window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const myModal = new bootstrap.Modal(document.getElementById('birthdayModal'));
        myModal.show();
    }, 5000);
});

const face = document.getElementById('dancing-face');
const frames = ['＼(＾O＾)/', '/(＾O＾)＼'];
let i = 0;

setInterval(() => {
    i = (i + 1) % frames.length;
    face.textContent = frames[i];
}, 500);

function launchBalloons(count = 10) {
    const container = document.getElementById('balloon-container');
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'balloon-wrapper';
        wrapper.style.left = Math.random() * 100 + 'vw';
        wrapper.style.animationDelay = Math.random() * 1 + 's';

        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        let color = getRandomColor();
        balloon.style.backgroundColor = color;

        const knot = document.createElement('div');
        knot.className = 'knot';
        knot.style.backgroundColor = color;

        const string = document.createElement('div');
        string.className = 'string';

        wrapper.appendChild(balloon);
        wrapper.appendChild(knot);
        wrapper.appendChild(string);
        container.appendChild(wrapper);
    }
}

function getRandomColor() {
    const colors = ['#FF69B4', '#FFD700', '#87CEEB', '#FF4500', '#32CD32'];
    return colors[Math.floor(Math.random() * colors.length)];
}

const modal = document.querySelector('.modal');
modal.addEventListener('shown.bs.modal', () => {
    launchBalloons(15);
});

function showImage(src) {
    const img = document.getElementById('displayedImage');
    img.src = src;
    img.style.display = 'block';
}

function checkInput() {
    const input = document.getElementById("moonInput").value.trim().toLowerCase();
    let message = "";
    modalMessage.classList.remove("red", "green");
    if (input.includes("leen")) {
        message = "🎉 YES YOU WON 🎉 DONT YOU KNOW YOU ARE MY MOON (｡•̀ᴗ-)✧";
        modalMessage.classList.add("green");
        document.getElementById("next").style.display = "";
    } else if (input.includes("me")) {
        message = "OH NOW YOU GET IT YOU ARE CLOSE!";
        modalMessage.classList.add("red");
    } else if (input.includes("moon")) {
        message = "WRONG ARE YOU BLIND?";
        modalMessage.classList.add("red");
    } else {
        message = "TRY AGAIN!";
        modalMessage.classList.add("red");
    }

    document.getElementById("modalMessage").textContent = message;
    const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));
    modal.show();
}