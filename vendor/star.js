/*
  Katahari Space — MinimalSky + Big Meteor (all-in-one)
  - Bintang lebih sedikit (minimal)
  - Nebula ditone-down (subtle)
  - Offscreen prerender utk far+mid stars
  - Shooting stars biasa + Big Meteor dengan glow, trail gradien, fragments
  - Meteor Shower (toggle via key 'M' atau API)
  - Parallax ringan + device orientation
  - Throttle FPS & DPR cap
*/

(() => {
    const canvas = document.getElementById("stars");
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    // ===== Perf & motion =====
    const REDUCED = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const DPR_CAP = 1; // cap untuk hemat biaya render
    let dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

    // ===== CONFIG (MinimalSky default) =====
    const CONFIG = {
        layerCounts: { far: 60, mid: 28, near: 12, dust: 50 },
        shootingChance: 0.997,
        shootingIntervalMin: 16000,
        shootingIntervalMax: 52000,
        useOffscreen: true,
        targetFPS: REDUCED ? 20 : 30,
    };

    // Parallax multiplier (lebih kecil jika reduced motion)
    const PARALLAX = REDUCED
        ? { far: 0.01, mid: 0.02, near: 0.04, dust: 0.03 }
        : { far: 0.02, mid: 0.04, near: 0.08, dust: 0.05 };

    // ===== State =====
    let width = window.innerWidth;
    let height = window.innerHeight;

    let farStars = [];
    let midStars = [];
    let nearStars = [];
    let dust = [];
    let shootingStars = [];
    let planet = null; // disiapkan bila ingin diaktifkan kelak

    let bigMeteors = [];
    let nextShootingStarTime = Date.now() + Math.random() * 10000 + 3000;
    let nextBigMeteorAt = Date.now() + 10000 + Math.random() * 20000;
    let meteorShowerUntil = 0;

    let backgroundCanvas = null;
    let backgroundCtx = null;
    let backgroundRendered = false;

    let lastFrameTime = 0;

    const mouse = { x: width / 2, y: height / 2 };
    const motion = { x: 0, y: 0 };
    let lastMoveAt = 0;

    // ===== Utils =====
    function rand(min, max) { return Math.random() * (max - min) + min; }

    // ===== Resize & init =====
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.width = Math.max(1, Math.floor(width * dpr));
        canvas.height = Math.max(1, Math.floor(height * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        if (CONFIG.useOffscreen) {
            if (!backgroundCanvas) {
                backgroundCanvas = document.createElement("canvas");
                backgroundCtx = backgroundCanvas.getContext("2d", { alpha: true });
            }
            backgroundCanvas.width = canvas.width;
            backgroundCanvas.height = canvas.height;
            backgroundRendered = false;
        }

        initLayers();
    }

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
            dust.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: rand(0.4, 1.0),
                alpha: rand(0.02, 0.05),
                speed: rand(0.005, 0.045),
                dir: rand(-Math.PI, Math.PI),
            });
        }

        // planet tetap null (opsional di masa depan)
        planet = null;

        // Offscreen prerender untuk far+mid
        if (CONFIG.useOffscreen && backgroundCtx && backgroundCanvas) {
            backgroundCtx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
            for (const s of farStars) {
                backgroundCtx.beginPath();
                backgroundCtx.fillStyle = `rgba(255,255,255,${0.6 + 0.4 * s.alpha})`;
                backgroundCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                backgroundCtx.fill();
            }
            for (const s of midStars) {
                backgroundCtx.beginPath();
                backgroundCtx.fillStyle = `rgba(255,255,255,${0.65 + 0.35 * s.alpha})`;
                backgroundCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                backgroundCtx.fill();
            }
            backgroundRendered = true;
        }
    }

    // ===== Shooting star biasa =====
    function createShootingStar() {
        const startX = rand(width * 0.1, width * 0.9);
        const startY = rand(0, height * 0.45);
        const len = rand(60, 160);
        const speed = rand(6, 12);
        const angle = rand(Math.PI * 0.25, Math.PI * 0.42);
        shootingStars.push({ x: startX, y: startY, length: len, speed, angle, alpha: 1 });
    }

    // ===== Big Meteor (komet/bolide) =====
    function spawnBigMeteor(opts = {}) {
        const speed = opts.speed ?? rand(9, 14);
        const length = opts.length ?? rand(160, 300);
        const thickness = opts.thickness ?? rand(3, 6);
        const angle = opts.angle ?? rand(Math.PI * 0.18, Math.PI * 0.32);
        const startY = rand(height * 0.05, height * 0.35);
        const startX = -100;

        bigMeteors.push({
            x: startX,
            y: startY,
            speed,
            length,
            thickness,
            angle,
            alpha: 1,
            glow: rand(14, 26),
            fragments: Array.from({ length: 6 + Math.floor(Math.random() * 4) }, () => ({
                x: startX,
                y: startY,
                vx: rand(1, 3),
                vy: rand(-1.2, 1.2),
                life: rand(400, 900),
                born: performance.now(),
                size: rand(1.2, 2.2),
                a0: rand(0.4, 0.8),
            })),
        });
    }

    // ===== Nebula (toned down) =====
    function drawNebula() {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const gradients = [
            { x: width * 0.25, y: height * 0.15, r: Math.max(width, height) * 0.5, color: "rgba(124,58,237,0.015)" },
            { x: width * 0.80, y: height * 0.08, r: Math.max(width, height) * 0.35, color: "rgba(37,99,235,0.012)" },
        ];
        gradients.forEach(g => {
            const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
            grad.addColorStop(0, g.color);
            grad.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
        });
        ctx.restore();
    }

    // ===== Main draw =====
    function drawScene() {
        // throttle
        const nowPerf = performance.now();
        const frameInterval = 1000 / (CONFIG.targetFPS || 30);
        const delta = nowPerf - (lastFrameTime || 0);
        if (delta < frameInterval) {
            requestAnimationFrame(drawScene);
            return;
        }
        lastFrameTime = nowPerf;

        ctx.clearRect(0, 0, width, height);
        drawNebula();

        const time = performance.now();

        // Dust subtle
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        for (const d of dust) {
            const px = d.x + motion.x * PARALLAX.dust;
            const py = d.y + motion.y * PARALLAX.dust + Math.sin(time * 0.0001 + d.dir) * 0.3;
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${Math.max(0.05, d.alpha)})`;
            ctx.arc(px, py, d.size, 0, Math.PI * 2);
            ctx.fill();

            d.x -= d.speed * 0.15;
            if (d.x < -10) d.x = width + 10;
        }
        ctx.restore();

        // Far+Mid (offscreen blit fallback)
        ctx.save();
        if (CONFIG.useOffscreen && backgroundRendered && backgroundCanvas) {
            ctx.drawImage(backgroundCanvas, 0, 0, width, height);
        } else {
            for (const s of farStars) {
                const px = s.x + motion.x * PARALLAX.far;
                const py = s.y + motion.y * PARALLAX.far;
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,255,255,${0.6 + 0.4 * s.alpha})`;
                ctx.arc(px, py, s.r, 0, Math.PI * 2);
                ctx.fill();

                s.alpha += s.twinkleSpeed;
                if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
                s.x -= 0.02;
                if (s.x < 0) s.x = width;
            }
            for (const s of midStars) {
                const px = s.x + motion.x * PARALLAX.mid;
                const py = s.y + motion.y * PARALLAX.mid;
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

        // Near stars
        ctx.save();
        for (const s of nearStars) {
            const px = s.x + motion.x * PARALLAX.near;
            const py = s.y + motion.y * PARALLAX.near;
            ctx.beginPath();
            ctx.fillStyle = `rgba(${s.tint},${s.tint},255,${0.75 + 0.25 * s.alpha})`;
            ctx.arc(px, py, s.r, 0, Math.PI * 2);
            ctx.fill();

            s.alpha += s.twinkleSpeed;
            if (s.alpha > 1 || s.alpha < 0) s.twinkleSpeed *= -1;
            s.x -= 0.08;
            if (s.x < 0) s.x = width;
        }
        ctx.restore();

        // Shooting stars biasa (atas nearStars)
        ctx.save();
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const s = shootingStars[i];
            const xEnd = s.x + Math.cos(s.angle) * s.length;
            const yEnd = s.y + Math.sin(s.angle) * s.length;

            const grad = ctx.createLinearGradient(s.x, s.y, xEnd, yEnd);
            grad.addColorStop(0, `rgba(255,255,255,${Math.max(0, s.alpha)})`);
            grad.addColorStop(1, `rgba(255,255,255,0)`);
            ctx.lineWidth = Math.max(1, s.length * 0.02);
            ctx.strokeStyle = grad;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(xEnd, yEnd);
            ctx.stroke();

            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            s.alpha -= 0.015;
            if (s.alpha <= 0) shootingStars.splice(i, 1);
        }
        ctx.restore();

        // Big Meteors (paling atas)
        ctx.save();
        for (let i = bigMeteors.length - 1; i >= 0; i--) {
            const m = bigMeteors[i];
            const headX = m.x;
            const headY = m.y;
            const tailX = m.x - Math.cos(m.angle) * m.length;
            const tailY = m.y - Math.sin(m.angle) * m.length;

            // Glow di kepala
            const g = ctx.createRadialGradient(headX, headY, 0, headX, headY, m.glow);
            g.addColorStop(0, `rgba(255,255,255,${0.8 * m.alpha})`);
            g.addColorStop(0.35, `rgba(255,215,170,${0.35 * m.alpha})`);
            g.addColorStop(1, `rgba(255,140,80,0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(headX, headY, m.glow, 0, Math.PI * 2);
            ctx.fill();

            // Trail gradien
            const trail = ctx.createLinearGradient(headX, headY, tailX, tailY);
            trail.addColorStop(0.0, `rgba(255,255,255,${0.95 * m.alpha})`);
            trail.addColorStop(0.3, `rgba(255,200,120,${0.45 * m.alpha})`);
            trail.addColorStop(1.0, `rgba(255,150,80,0)`);
            ctx.strokeStyle = trail;
            ctx.lineWidth = m.thickness;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(headX, headY);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();

            // Fragments
            const now = performance.now();
            ctx.globalCompositeOperation = "screen";
            for (const f of m.fragments) {
                const t = now - f.born;
                if (t > f.life) continue;
                const fade = Math.max(0, 1 - t / f.life);
                const fx = f.x + f.vx * (t * 0.06);
                const fy = f.y + f.vy * (t * 0.06);
                ctx.beginPath();
                ctx.fillStyle = `rgba(255,220,160,${f.a0 * fade * m.alpha})`;
                ctx.arc(fx, fy, f.size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalCompositeOperation = "source-over";

            // Update posisi
            m.x += Math.cos(m.angle) * m.speed;
            m.y += Math.sin(m.angle) * m.speed;
            if (m.x > width * 0.6) m.alpha -= 0.008;

            if (m.alpha <= 0 || headX > width + 200 || headY > height + 200) {
                bigMeteors.splice(i, 1);
            }
        }
        ctx.restore();

        // ===== Spawner & mode khusus =====
        const now = Date.now();
        if (now > nextShootingStarTime) {
            if (Math.random() > CONFIG.shootingChance) createShootingStar();
            nextShootingStarTime = now + rand(CONFIG.shootingIntervalMin, CONFIG.shootingIntervalMax);
        }

        // Jadwal Big Meteor
        if (now > nextBigMeteorAt) {
            if (Math.random() < 0.35) spawnBigMeteor();
            nextBigMeteorAt = now + rand(20000, 60000);
        }

        // Meteor Shower aktif?
        if (now < meteorShowerUntil && Math.random() < 0.2) {
            spawnBigMeteor({ speed: rand(10, 16), thickness: rand(4, 7), length: rand(220, 360) });
            createShootingStar();
        }

        requestAnimationFrame(drawScene);
    }

    // ===== Motion damping =====
    function dampMotion() {
        const idle = Date.now() - lastMoveAt > 200;
        if (idle) {
            motion.x *= 0.95;
            motion.y *= 0.95;
        }
        requestAnimationFrame(dampMotion);
    }

    // ===== Device orientation =====
    function onDeviceOrientation(e) {
        const gx = e.gamma || 0; // [-90, 90]
        const by = e.beta || 0;  // [-180, 180]
        motion.x = Math.max(-1, Math.min(1, gx / 30));
        motion.y = Math.max(-1, Math.min(1, by / 90));
    }

    // ===== Start =====
    resizeCanvas();
    initLayers();
    drawScene();
    dampMotion();

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("deviceorientation", onDeviceOrientation, { passive: true });

    // ===== Public hooks =====
    function triggerMeteorShower(ms = 6000) { meteorShowerUntil = Date.now() + ms; }

    window.__katahariCreateShootingStar = createShootingStar;
    window.__katahariTriggerMeteorShower = triggerMeteorShower;

    // Keybinding opsional
    window.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "m") triggerMeteorShower(6000);
    });

})();
