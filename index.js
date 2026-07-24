/* ==========================================
            LANDING PAGE
========================================== */

const enterBtn = document.getElementById("enterBtn");
const landing = document.getElementById("landing");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {
  landing.classList.add("fade-out");

  setTimeout(() => {
    landing.style.display = "none";

    mainContent.style.display = "block";

    music.play().catch(() => {});
  }, 800);
});
/* ==========================================
        BACK TO LANDING PAGE
========================================== */

const backHome = document.getElementById("backHome");

backHome.addEventListener("click", () => {
  landing.style.display = "flex";

  landing.classList.remove("fade-out");

  mainContent.style.display = "none";

  music.pause();

  music.currentTime = 0;
});

/* ==========================================
            TYPING EFFECT
========================================== */

const typing = document.getElementById("typing");

const text = "Every love story is beautiful, but ours is my favorite. ❤️";

let index = 0;

function typeText() {
  if (index < text.length) {
    typing.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText, 50);
  }
}

/* ==========================================
            LOVE COUNTER
========================================== */

/* GANTI DENGAN TANGGAL JADIAN */

const startDate = new Date("2026-04-10T00:00:00");

function updateCounter() {
  const now = new Date();

  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();

setInterval(updateCounter, 1000);

/* ==========================================
            LOVE QUOTES
========================================== */

const quotes = [
  "Every love story is beautiful, but ours is my favorite. ❤️",

  "You are my today and all of my tomorrows.",

  "Home is wherever I'm with you.",

  "You make ordinary moments unforgettable.",

  "Forever wouldn't be enough with you.",

  "I still fall in love with you every single day.",
];

let quoteIndex = 0;

const quoteText = document.getElementById("quoteText");

setInterval(() => {
  quoteIndex++;

  if (quoteIndex >= quotes.length) {
    quoteIndex = 0;
  }

  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerHTML = quotes[quoteIndex];

    quoteText.style.opacity = 1;
  }, 300);
}, 5000);

/* ==========================================
            LETTER
========================================== */

const letterBtn = document.getElementById("letterBtn");
const paper = document.querySelector(".paper");

letterBtn.addEventListener("click", () => {
  paper.classList.toggle("show");

  if (paper.classList.contains("show")) {
    letterBtn.innerHTML = "Close Letter";
  } else {
    letterBtn.innerHTML = "Open Letter";
  }
});

/* ==========================================
            GALLERY LIGHTBOX
========================================== */

const images = document.querySelectorAll(".grid img");

const lightbox = document.querySelector(".lightbox");

const lightImg = document.getElementById("lightImg");

const close = document.getElementById("close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";

    lightImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

/* ==========================================
            FLOATING HEARTS
========================================== */

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 15 + Math.random() * 20 + "px";

  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);

/* ==========================================
            SCROLL ANIMATION
========================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  section.style.opacity = "0";

  section.style.transform = "translateY(40px)";

  section.style.transition = ".8s";

  observer.observe(section);
});

/* ==========================================
            START TYPING
========================================== */

typeText();

backHome.addEventListener("click", () => {
  landing.style.display = "flex";
  landing.classList.remove("fade-out");

  mainContent.style.display = "none";

  music.pause();
  music.currentTime = 0;
});

const showMoreBtn = document.getElementById("showMoreBtn");

const extraPhotos = document.getElementById("extraPhotos");

showMoreBtn.addEventListener("click", () => {
  extraPhotos.classList.toggle("show");

  if (extraPhotos.classList.contains("show")) {
    showMoreBtn.textContent = "Show Less";

    setTimeout(() => {
      extraPhotos.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  } else {
    showMoreBtn.textContent = "See More Photos";
  }
});
