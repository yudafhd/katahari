/*
  Enhanced space background for Katahari.
  - Twinkling multi-layer stars
  - Nebula gradient overlays
  - Parallax dust particles that react to mouse movement / device orientation
  - Occasional shooting stars
  - Optional drifting planet
*/

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d", { alpha: true });

let width = window.innerWidth;
let height = window.innerHeight;
/* Cap devicePixelRatio to reduce expensive high-DPI backing store work */
const DPR_CAP = 1;
let dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

/* Layer arrays declared early so initLayers can reference them safely */
let farStars = [];
let midStars = [];
let nearStars = [];
let dust = [];
let shootingStars = [];
let planet = null;
let nextShootingStarTime = Date.now() + Math.random() * 10000 + 3000;

/* Offscreen / pre-render helpers to reduce per-frame work */
let backgroundCanvas = null;
let backgroundCtx = null;
let backgroundRendered = false;
let lastFrameTime = 0;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    // enforce DPR cap for lighter rendering
    dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

    // set CSS size (logical pixels)
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    // set backing store size for (capped) DPI
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));

    // reset transform so drawing commands are in CSS pixels
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // create/resize background offscreen canvas if using pre-render
    if (CONFIG.useOffscreen) {
        if (!backgroundCanvas) {
            backgroundCanvas = document.createElement('canvas');
            backgroundCtx = backgroundCanvas.getContext('2d', { alpha: true });
        }
        backgroundCanvas.width = canvas.width;
        backgroundCanvas.height = canvas.height;
        backgroundRendered = false; // force re-render of pre-rendered layers
    }

    // regenerate layers responsively
    initLayers();
}
/* Configurable counts tuned for performance */
const CONFIG = {
    // further reduced counts to minimize CPU/GPU work
    layerCounts: { far: 210, mid: 94, near: 42, dust: 204 },
    // make shooting stars very rare
    shootingChance: 0.995,
    shootingIntervalMin: 12000,
    shootingIntervalMax: 45000,
    // use an offscreen pre-render for static star layers
    useOffscreen: true,
    // throttle rendering to a modest FPS to reduce CPU use
    targetFPS: 30,
};

let mouse = { x: width / 2, y: height / 2 };
let motion = { x: 0, y: 0 };
let lastMoveAt = 0;


/* Helpers */
function rand(min, max) { return Math.random() * (max - min) + min; }
function pick(array) { return array[Math.floor(Math.random() * array.length)]; }

/* Initialize / recreate layers */
function initLayers() {
    farStars = [];
    midStars = [];
    nearStars = [];
    dust = [];

    for (let i = 0; i < CONFIG.layerCounts.far; i++) {
        farStars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 0.9 + 0.1,
            alpha: Math.random() * 0.9,
            twinkleSpeed: rand(0.0005, 0.003),
        });
    }

    for (let i = 0; i < CONFIG.layerCounts.mid; i++) {
        midStars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.5 + 0.3,
            alpha: Math.random() * 0.9,
            twinkleSpeed: rand(0.0008, 0.0045),
        });
    }

    for (let i = 0; i < CONFIG.layerCounts.near; i++) {
        // precompute a tint and twinkle speed to avoid random work during draw
        const tint = 230 + Math.floor(Math.random() * 10);
        nearStars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.6 + 0.6,
            alpha: Math.random() * 0.9,
            twinkleSpeed: rand(0.002, 0.008),
            tint,
        });
    }

    for (let i = 0; i < CONFIG.layerCounts.dust; i++) {
        // smaller, subtler dust particles
        dust.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: rand(0.4, 1.2),
            alpha: rand(0.02, 0.06),
            speed: rand(0.005, 0.06),
            dir: rand(-Math.PI, Math.PI),
        });
    }

    // planet feature disabled via CONFIG. planet remains null so it won't be drawn.
    planet = null;

    // Pre-render far + mid star layers into offscreen backgroundCanvas (cheap to blit)
    if (CONFIG.useOffscreen && backgroundCtx && backgroundCanvas) {
        backgroundCtx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
        // scale so pre-render matches CSS pixels (we already sized canvas backing to use dpr)
        // draw far stars
        for (const s of farStars) {
            backgroundCtx.beginPath();
            backgroundCtx.fillStyle = `rgba(255,255,255,${0.6 + 0.4 * s.alpha})`;
            backgroundCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            backgroundCtx.fill();
        }
        // draw mid stars
        for (const s of midStars) {
            backgroundCtx.beginPath();
            backgroundCtx.fillStyle = `rgba(255,255,255,${0.65 + 0.35 * s.alpha})`;
            backgroundCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            backgroundCtx.fill();
        }
        backgroundRendered = true;
    }
}

/* Shooting star factory */
function createShootingStar() {
    const startX = rand(width * 0.1, width * 0.9);
    const startY = rand(0, height * 0.45);
    const len = rand(60, 160);
    const speed = rand(6, 12);
    const angle = rand(Math.PI * 0.25, Math.PI * 0.42); // diagonal
    shootingStars.push({ x: startX, y: startY, length: len, speed, angle, alpha: 1 });
}

/* Draw nebula - soft radial gradients */
function drawNebula() {
    // Layered subtle nebula blobs
    const gradients = [
        // toned-down nebula blobs for a subtler background
        { x: width * 0.2, y: height * 0.15, r: Math.max(width, height) * 0.6, color: "rgba(124,58,237,0.03)" },
        { x: width * 0.9, y: height * 0.05, r: Math.max(width, height) * 0.45, color: "rgba(37,99,235,0.02)" },
        { x: width * 0.5, y: height * 0.8, r: Math.max(width, height) * 0.6, color: "rgba(96,165,250,0.015)" },
    ];

    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    gradients.forEach(g => {
        const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
        grad.addColorStop(0, g.color);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
    });
    ctx.restore();
}

/* Draw all particles and stars with parallax */
function drawScene() {
    ctx.clearRect(0, 0, width, height);

    // Nebula background first
    drawNebula();

    const time = performance.now();

    // Dust (very subtle) - move based on time for slow drift, and parallax based on mouse
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    for (const d of dust) {
        const px = d.x + motion.x * 0.05;
        const py = d.y + motion.y * 0.05 + Math.sin(time * 0.0001 + d.dir) * 0.3;
        ctx.beginPath();
        // make dust a touch brighter to ensure visibility
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0.06, d.alpha)})`;
        ctx.arc(px, py, d.size, 0, Math.PI * 2);
        ctx.fill();

        // small drift
        d.x -= d.speed * 0.15;
        if (d.x < -10) d.x = width + 10;
    }
    ctx.restore();

    // Draw pre-rendered background (far + mid stars) when available — fast blit
    ctx.save();
    if (CONFIG.useOffscreen && backgroundRendered && backgroundCanvas) {
        ctx.drawImage(backgroundCanvas, 0, 0, width, height);
    } else {
        // Fallback: draw far stars
        for (const s of farStars) {
            const px = s.x + motion.x * 0.02;
            const py = s.y + motion.y * 0.02;
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${0.6 + 0.4 * s.alpha})`;
            ctx.arc(px, py, s.r, 0, Math.PI * 2);
            ctx.fill();

            s.alpha += s.twinkleSpeed;
            if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
            s.x -= 0.02;
            if (s.x < 0) s.x = width;
        }
        // Fallback: draw mid stars
        for (const s of midStars) {
            const px = s.x + motion.x * 0.04;
            const py = s.y + motion.y * 0.04;
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${0.65 + 0.35 * s.alpha})`;
            ctx.arc(px, py, s.r, 0, Math.PI * 2);
            ctx.fill();

            s.alpha += s.twinkleSpeed;
            if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
            s.x -= 0.05;
            if (s.x < 0) s.x = width;
        }
    }
    ctx.restore();

    // Near stars (more prominent)
    ctx.save();
    for (const s of nearStars) {
        const px = s.x + motion.x * 0.08;
        const py = s.y + motion.y * 0.08;
        ctx.beginPath();
        // use precomputed tint for consistent visuals without per-frame random()
        ctx.fillStyle = `rgba(${s.tint},${s.tint},255,${0.75 + 0.25 * s.alpha})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.alpha += s.twinkleSpeed;
        if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
        s.x -= 0.08; // slower movement for near stars to reduce redraw churn
        if (s.x < 0) s.x = width;
    }
    ctx.restore();

    // Shooting stars (drawn on top)
    ctx.save();
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const xEnd = s.x + Math.cos(s.angle) * s.length;
        const yEnd = s.y + Math.sin(s.angle) * s.length;
        ctx.beginPath();
        ctx.lineWidth = Math.max(1, s.length * 0.02);
        ctx.strokeStyle = `rgba(255,255,255,${Math.max(0, s.alpha)})`;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.015;
        if (s.alpha <= 0) shootingStars.splice(i, 1);
    }
    ctx.restore();

    // Maybe spawn shooting star occasionally
    const now = Date.now();
    if (now > nextShootingStarTime) {
        if (Math.random() > CONFIG.shootingChance) createShootingStar();
        nextShootingStarTime = now + rand(CONFIG.shootingIntervalMin, CONFIG.shootingIntervalMax);
    }

    // throttle to a target FPS to reduce CPU usage
    const nowPerf = performance.now();
    const frameInterval = 1000 / (CONFIG.targetFPS || 30);
    const delta = nowPerf - (lastFrameTime || 0);
    lastFrameTime = nowPerf;
    if (delta < frameInterval) {
        console.log(2)
        // schedule next frame but skip heavy work if we're ahead of schedule
        requestAnimationFrame(drawScene);
        return;
    }
    console.log(2)
    requestAnimationFrame(drawScene);
}

/* Slow decay of motion to center when idle */
function dampMotion() {
    const idle = Date.now() - lastMoveAt > 200;
    if (idle) {
        motion.x *= 0.95;
        motion.y *= 0.95;
    }
    requestAnimationFrame(dampMotion);
}

/* Device orientation fallback (mobile) */
function onDeviceOrientation(e) {
    // gamma: left to right [-90,90], beta front/back [-180,180]
    const gx = e.gamma || 0;
    const by = e.beta || 0;
    // small mapping to motion
    motion.x = Math.max(-1, Math.min(1, gx / 30));
    motion.y = Math.max(-1, Math.min(1, by / 90));
}

/* Start */
// ensure canvas is sized and layers initialized before drawing
resizeCanvas();
initLayers();
drawScene();
dampMotion();

window.addEventListener("resize", resizeCanvas);
window.addEventListener("deviceorientation", onDeviceOrientation, { passive: true });

// Expose a hook to create a shooting star from outside (could be used on user action)
window.__katahariCreateShootingStar = createShootingStar;
