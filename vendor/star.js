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
let dpr = window.devicePixelRatio || 1;

/* Layer arrays declared early so initLayers can reference them safely */
let farStars = [];
let midStars = [];
let nearStars = [];
let dust = [];
let shootingStars = [];
let planet = null;
let nextShootingStarTime = Date.now() + Math.random() * 10000 + 3000;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = window.devicePixelRatio || 1;

    // set CSS size
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    // set backing store size for high DPI
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));

    // reset transform so drawing commands are in CSS pixels
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // regenerate some layers responsively
    initLayers();
}
/* Configurable counts tuned for performance */
const CONFIG = {
    layerCounts: { far: 220, mid: 120, near: 60, dust: 160 },
    shootingChance: 0.92,
    shootingIntervalMin: 3000,
    shootingIntervalMax: 13000,
    planetEnabled: false,
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
        nearStars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2.4 + 0.6,
            alpha: Math.random() * 0.95,
            twinkleSpeed: rand(0.001, 0.006),
        });
    }

    for (let i = 0; i < CONFIG.layerCounts.dust; i++) {
        dust.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: rand(0.6, 2.2),
            alpha: rand(0.03, 0.12),
            speed: rand(0.02, 0.2),
            dir: rand(-Math.PI, Math.PI),
        });
    }

    if (CONFIG.planetEnabled) {
        planet = {
            x: width * 0.85,
            y: height * 0.25,
            radius: Math.min(160, Math.max(80, width * 0.08)),
            angle: 0,
            speed: 0.0004,
            color: "rgba(255,240,230,0.06)",
        };
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
        { x: width * 0.2, y: height * 0.15, r: Math.max(width, height) * 0.6, color: "rgba(124,58,237,0.06)" },
        { x: width * 0.9, y: height * 0.05, r: Math.max(width, height) * 0.45, color: "rgba(37,99,235,0.04)" },
        { x: width * 0.5, y: height * 0.8, r: Math.max(width, height) * 0.6, color: "rgba(96,165,250,0.03)" },
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

    // Far stars (slowest, faint)
    ctx.save();
    for (const s of farStars) {
        const px = s.x + motion.x * 0.02;
        const py = s.y + motion.y * 0.02;
        ctx.beginPath();
        // ensure far stars are visible by making them bright white with reasonable alpha
        ctx.fillStyle = `rgba(255,255,255,${0.6 + 0.4 * s.alpha})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.alpha += s.twinkleSpeed;
        if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
        s.x -= 0.02;
        if (s.x < 0) s.x = width;
    }
    ctx.restore();

    // Mid stars
    ctx.save();
    for (const s of midStars) {
        const px = s.x + motion.x * 0.04;
        const py = s.y + motion.y * 0.04;
        ctx.beginPath();
        // brighten mid stars as well
        ctx.fillStyle = `rgba(255,255,255,${0.65 + 0.35 * s.alpha})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.alpha += s.twinkleSpeed;
        if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
        s.x -= 0.05;
        if (s.x < 0) s.x = width;
    }
    ctx.restore();

    // Near stars (more prominent)
    ctx.save();
    for (const s of nearStars) {
        const px = s.x + motion.x * 0.08;
        const py = s.y + motion.y * 0.08;
        ctx.beginPath();
        // use brighter near stars with slight blue tint for depth
        const base = 230;
        const tint = base + Math.floor((Math.random() * 10));
        ctx.fillStyle = `rgba(${tint},${tint},255,${0.75 + 0.25 * s.alpha})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.alpha += s.twinkleSpeed;
        if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
        s.x -= 0.12;
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

    // Planet (soft glow)
    if (planet) {
        ctx.save();
        const px = planet.x + motion.x * 0.06 + Math.sin(time * 0.0002) * 10;
        const py = planet.y + motion.y * 0.06 + Math.cos(time * 0.00015) * 6;
        const rad = planet.radius;
        // soft halo
        const g = ctx.createRadialGradient(px, py, rad * 0.2, px, py, rad * 1.6);
        g.addColorStop(0, planet.color);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, rad * 1.6, 0, Math.PI * 2);
        ctx.fill();
        // solid planet
        ctx.globalCompositeOperation = "source-over";
        ctx.beginPath();
        ctx.fillStyle = "rgba(60,80,120,0.16)";
        ctx.arc(px, py, rad * 0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // Maybe spawn shooting star occasionally
    const now = Date.now();
    if (now > nextShootingStarTime) {
        if (Math.random() > CONFIG.shootingChance) createShootingStar();
        nextShootingStarTime = now + rand(CONFIG.shootingIntervalMin, CONFIG.shootingIntervalMax);
    }

    requestAnimationFrame(drawScene);
}

/* Interaction for parallax */
function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    const cx = (e.clientX - rect.left) || (e.touches && e.touches[0] && e.touches[0].clientX - rect.left) || width / 2;
    const cy = (e.clientY - rect.top) || (e.touches && e.touches[0] && e.touches[0].clientY - rect.top) || height / 2;
    mouse.x = cx;
    mouse.y = cy;

    // motion vector normalized - small values for subtle parallax
    motion.x = (mouse.x - width / 2) / (width / 2);
    motion.y = (mouse.y - height / 2) / (height / 2);
    lastMoveAt = Date.now();
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
window.addEventListener("pointermove", onPointerMove, { passive: true });
window.addEventListener("touchmove", onPointerMove, { passive: true });
window.addEventListener("deviceorientation", onDeviceOrientation, { passive: true });

// Expose a hook to create a shooting star from outside (could be used on user action)
window.__katahariCreateShootingStar = createShootingStar;
