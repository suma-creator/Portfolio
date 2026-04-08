// Typing animation
const typingText = "Hello, I'm Suma Pal Srabanty - Web Developer & Java Programmer";
let i = 0;
function typeWriter() {
    if (i < typingText.length) {
        document.getElementById("typing").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }a
}
window.onload = typeWriter;

// Hire Me alert
function showMessage() { alert("Thank you for visiting my portfolio!"); }

// Scroll top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else { topBtn.style.display = "none"; }
}
function scrollTopPage() { window.scrollTo({ top: 0, behavior: "smooth" }); }

// Dark mode toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => { document.body.classList.toggle("dark-mode"); });

// Animate skill bars
window.addEventListener("scroll", ()=>{
    const skills = document.querySelectorAll(".fill");
    const skillsTop = document.getElementById("skills").offsetTop;
    const scrollY = window.scrollY + window.innerHeight;
    if(scrollY > skillsTop + 50){
        skills.forEach(el=>{
            if(el.classList.contains("html")) el.style.width="90%";
            else if(el.classList.contains("css")) el.style.width="85%";
            else if(el.classList.contains("js")) el.style.width="75%";
            else if(el.classList.contains("java")) el.style.width="80%";
            else if(el.classList.contains("cpp")) el.style.width="100%"; // Full
            else if(el.classList.contains("c")) el.style.width="100%";   // Full
        });
    }
});