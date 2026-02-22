/* =========================
   TYPING ANIMATION
========================= */

const text = "Web Developer | Software Engineer | Tech Enthusiast";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 60);
    }
}
type();



/* =========================
   SKILL ANIMATION
========================= */

window.addEventListener("scroll", () => {
    document.querySelectorAll(".bar span").forEach(bar => {
        bar.style.width = bar.getAttribute("data");
    });
});



/* =========================
   CONTACT FORM
   + VALIDATION
   + LOCAL STORAGE
========================= */

const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validation
    if (name === "") {
        alert("Name is required");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter valid email");
        return;
    }

    // Save feedback in LocalStorage
    let feedbackData =
        JSON.parse(localStorage.getItem("feedback")) || [];

    feedbackData.push({
        name: name,
        email: email,
        message: message
    });

    localStorage.setItem("feedback",
        JSON.stringify(feedbackData)
    );

    // Success Message Only
    success.innerText =
        "✅ Feedback submitted successfully!";

    form.reset();
});