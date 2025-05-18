const audio = new Audio('images/hbd.mp3');
audio.loop = true;
audio.play();

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