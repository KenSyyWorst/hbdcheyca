const messages = [
    "Hari ini adalah hari yang sangat spesial, hari dimana cheyca bertambah umur menjadi 19th, happy brithday cheyca",
    "Semoga panjang umur dan sehat selalu dan diberikan kemudahan atas apa yang terjadi kedepanya dan dijauhkan dari hal hal yang buruk🎂",
    "Semoga semua wishlist dan permohonan segera tercapai dan dikaulkan aku selalu beerdoa supaya dirikan kemudahan ✨",
    "semoga terus menjadi pribadi yang baik dan dewasa dan pintar, dan semoga di umur ke 19 dan seterusnya cheyca kelak menjadi orang yang sukses dan membanggakan orang tua ❤️",
    "Terima kasih sudah lahir di dunia ini aku sangat bersyukur di dalam dunia ini yang egitu kejam aku masih melihat sosok yang egitu lemut dan menawan dan penuh kasih sayang, seperti melihat cahaya di dalam kegelapan 🌎",
    "ketika aku melihat senyumanmu aku merasa seperti di tengah tengah taman bunga yang begitu menawan dan ketika aku melihat matamu seperti aku berada di lautan dengan sunset sore yang begitu indah, Ini kejutan kecil untukmu 🎉"
];

let index = 0;
let typingSpeed = 50;

const messageEl = document.getElementById("message");
const finalSection = document.getElementById("finalSection");

/* ENVELOPE OPEN */
document.getElementById("envelope").addEventListener("click", function() {
    this.classList.add("open");
    setTimeout(() => {
        this.style.display = "none";
        document.getElementById("card").classList.remove("hidden");
        typeMessage(messages[0]);
    }, 1000);
});

/* MUSIC CONTROL */
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").addEventListener("click", function(){
    music.play();
    this.innerText = "🎵 Playing...";
});

/* TYPING EFFECT */
function typeMessage(text) {
    messageEl.innerHTML = "";
    let i = 0;
    let typing = setInterval(() => {
        messageEl.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(typing);
    }, typingSpeed);
}

/* NEXT SLIDE */
function nextSlide() {
    index++;
    if (index < messages.length) {
        typeMessage(messages[index]);
    }
    if (index === messages.length - 1) {
        finalSection.style.display = "block";
        startConfetti();
    }
}

/* CONFETTI EFFECT */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 150
        });
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 0, 150, 0.8)";
    ctx.beginPath();
    for (let i = 0; i < confetti.length; i++) {
        let c = confetti[i];
        ctx.moveTo(c.x, c.y);
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    updateConfetti();
    requestAnimationFrame(animateConfetti);
}

function updateConfetti() {
    for (let i = 0; i < confetti.length; i++) {
        let c = confetti[i];
        c.y += Math.cos(c.d) + 1;
        c.x += Math.sin(c.d);
        if (c.y > canvas.height) {
            c.y = 0;
            c.x = Math.random() * canvas.width;
        }
    }
}