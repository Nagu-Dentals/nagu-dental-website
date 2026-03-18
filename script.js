// Smooth Scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP
gsap.from("#heroText h1", {
  y: 100,
  opacity: 0,
  duration: 1.2
});

gsap.from("#heroText p", {
  y: 50,
  opacity: 0,
  delay: 0.5
});

// Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  let update = () => {
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;
    let speed = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + speed);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
