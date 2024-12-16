
const dynamicText = document.getElementById("dynamic-text");
const roles = ["Frontend Designer","Creative Thinker"];
let roleIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < roles[roleIndex].length) {
        dynamicText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeText, 150);
    }
}

typeText();


const navLinks = document.querySelectorAll("header nav a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
