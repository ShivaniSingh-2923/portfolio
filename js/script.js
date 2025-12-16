const texts = [
  "Computer Science Undergraduate",
  "Frontend Developer",
  "UI/UX Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 50;
const holdDelay = 1200;

const typingElement = document.getElementById("typing");

function typeText() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), holdDelay);
    }
  } else {
    typingElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

typeText();
