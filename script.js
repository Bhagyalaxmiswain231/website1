// Day 1: JavaScript Setup
console.log("Portfolio Website Loaded Successfully!");

// DOM Elements
const darkModeBtn = document.getElementById("darkModeBtn");
const form = document.querySelector(".contact-form");
const formMessage = document.getElementById("formMessage");

const nameInput = document.querySelector(
    'input[type="text"]'
);

const emailInput = document.querySelector(
    'input[type="email"]'
);

const image = document.querySelector(".image-box img");

// ============================
// Reusable Functions
// ============================

function showMessage(message, color) {
    formMessage.textContent = message;
    formMessage.style.color = color;
}

function validateEmail(email) {
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

// ============================
// Interactive Feature #1
// Dark Mode Toggle
// ============================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {
        localStorage.setItem(
            "theme",
            "dark"
        );
    } else {
        localStorage.setItem(
            "theme",
            "light"
        );
    }
}

darkModeBtn.addEventListener(
    "click",
    toggleDarkMode
);

// Load saved theme

if (
    localStorage.getItem("theme")
    === "dark"
) {
    document.body.classList.add(
        "dark-mode"
    );
}

// ============================
// Interactive Feature #2
// Image Hover Effect
// ============================

image.addEventListener(
    "mouseover",
    function () {
        image.style.transform =
            "scale(1.1)";
    }
);

image.addEventListener(
    "mouseout",
    function () {
        image.style.transform =
            "scale(1)";
    }
);

// ============================
// Interactive Feature #3
// Skill Card Click Effect
// ============================

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );

skillCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            alert(
                "You selected: " +
                card.querySelector("h3")
                    .textContent
            );

        }
    );

});

// ============================
// Form Validation
// ============================

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();

        if (name.length < 3) {

            showMessage(
                "Name must contain at least 3 characters.",
                "red"
            );

            return;
        }

        if (
            !validateEmail(email)
        ) {

            showMessage(
                "Please enter a valid email address.",
                "red"
            );

            return;
        }

        showMessage(
            "Form submitted successfully!",
            "green"
        );

        form.reset();

    }
);

// ============================
// Real-time Validation
// ============================

emailInput.addEventListener(
    "keyup",
    function () {

        if (
            validateEmail(
                emailInput.value
            )
        ) {

            emailInput.style.border =
                "2px solid green";

        } else {

            emailInput.style.border =
                "2px solid red";

        }

    }
);

// ============================
// DOM Manipulation Example
// ============================

document.querySelector(
    ".tagline"
).textContent =
    "Frontend Developer & Web Learner";