const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

const stars = [];
const shootingStars = [];

for (let i = 0; i < Math.floor(Math.random() * 1996 - 26) + 2; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.4,
        alpha: Math.random(),
        speed: Math.random() * 0.039 + 0.001
    });
}

let nextShootingStarTime = Date.now() + Math.random() * 10000 + 3000;

function createShootingStar() {
    shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 30 + 55,
        speed: Math.random() * 2 + 6,
        angle: Math.PI / 4,
        alpha: 1
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Static twinkling stars
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(143, 149, 162, ${star.alpha})`;
        ctx.fill();

        star.alpha += star.speed;
        if (star.alpha >= 1 || star.alpha <= 0) star.speed *= -1;

        star.x -= 0.065;
        if (star.x < 0) star.x = canvas.width;
    }

    // Shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const xEnd = s.x + Math.cos(s.angle) * s.length;
        const yEnd = s.y + Math.sin(s.angle) * s.length;

        ctx.strokeStyle = `rgba(133,139,151,${s.alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.01;

        if (s.alpha <= 0) {
            shootingStars.splice(i, 1);
        }
    }

    // Cek apakah sudah waktunya buat shooting star
    const now = Date.now();
    if (now > nextShootingStarTime) {
        if (Math.random() > 0.9) {
            createShootingStar();
        }
        nextShootingStarTime = now + Math.random() * 10000 + 3000;
    }

    requestAnimationFrame(drawStars);
}

drawStars();
window.addEventListener("resize", resizeCanvas);
