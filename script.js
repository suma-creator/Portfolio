const typingElement = document.getElementById("typing");
const typingText = "Aspiring Web Developer & Java Programmer";
let index = 0;

function typeWriter() {
    if (typingElement && index < typingText.length) {
        typingElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

window.addEventListener("load", typeWriter);

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    animateSkills();
    updateActiveNav();
});

function scrollTopPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let skillsAnimated = false;

function animateSkills() {
    const skillsSection = document.getElementById("skills");

    if (!skillsSection || skillsAnimated) return;

    const sectionTop = skillsSection.offsetTop;

    if (window.scrollY + window.innerHeight > sectionTop + 50) {
        document.querySelector(".html").style.width = "90%";
        document.querySelector(".css").style.width = "85%";
        document.querySelector(".js").style.width = "75%";
        document.querySelector(".java").style.width = "80%";
        document.querySelector(".cpp").style.width = "90%";
        document.querySelector(".c").style.width = "90%";

        skillsAnimated = true;
    }
}

function updateActiveNav() {
    let currentSection = "";

    document.querySelectorAll("section").forEach((section) => {
        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {
            currentSection = section.id;
        }
    });

    document.querySelectorAll("nav a").forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}
