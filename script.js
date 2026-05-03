const progress = document.querySelector(".progress");
const cursorLight = document.querySelector(".cursor-light");
const revealItems = document.querySelectorAll(".reveal");
const tiltCards = document.querySelectorAll("[data-tilt]");
const skillTrack = document.querySelector(".skill-track");

if (skillTrack) {
  skillTrack.innerHTML += skillTrack.innerHTML;
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const width = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${width}%`;
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
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

window.addEventListener("pointermove", (event) => {
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 8}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
