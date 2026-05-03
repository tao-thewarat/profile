const progress = document.querySelector(".progress");
const cursorLight = document.querySelector(".cursor-light");
const revealItems = document.querySelectorAll(".reveal");
const tiltCards = document.querySelectorAll("[data-tilt]");
const skillTrack = document.querySelector(".skill-track");
const header = document.querySelector(".site-header");

if (skillTrack) {
  skillTrack.innerHTML += skillTrack.innerHTML;
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${ratio * 100}%`;

  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

let rafId = 0;
let pendingX = 0;
let pendingY = 0;

window.addEventListener("pointermove", (event) => {
  pendingX = event.clientX;
  pendingY = event.clientY;
  if (!rafId) {
    rafId = requestAnimationFrame(() => {
      cursorLight.style.left = `${pendingX}px`;
      cursorLight.style.top = `${pendingY}px`;
      rafId = 0;
    });
  }
});

document.addEventListener("pointerleave", () => {
  cursorLight.style.opacity = "0";
});

document.addEventListener("pointerenter", () => {
  cursorLight.style.opacity = "";
});

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 7}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
});

const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
