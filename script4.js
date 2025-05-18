const audio = new Audio('images/hbd.mp3');
audio.loop = true;
audio.play();

function playSongOnce() {
    audio.play();
    document.body.removeEventListener('touchstart', playSongOnce);
    document.body.removeEventListener('click', playSongOnce);
}

document.body.addEventListener('touchstart', playSongOnce);
document.body.addEventListener('click', playSongOnce);

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

for (let i = 0; i < 100; i++) {
    launchBalloons(20);
}
