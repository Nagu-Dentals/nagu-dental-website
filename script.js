gsap.registerPlugin(ScrollTrigger);

// PRELOADER
window.addEventListener('load', () => {
    gsap.to("#loader", { opacity: 0, duration: 0.8, onComplete: () => {
        document.getElementById('loader').style.display = 'none';
        gsap.from(".hero-content > *", { y: 50, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" });
    }});
});

// FLOATING CTA TOGGLE
function toggleCTA() {
    const options = document.getElementById('cta-options');
    const mainBtn = document.getElementById('cta-main');
    
    if (options.classList.contains('hidden')) {
        options.classList.remove('hidden');
        gsap.from("#cta-options a", { y: 20, opacity: 0, stagger: 0.1, duration: 0.4 });
        mainBtn.innerText = "✕";
    } else {
        options.classList.add('hidden');
        mainBtn.innerText = "✨";
    }
}

// SCROLL ANIMATIONS
gsap.from(".reveal-up", {
    scrollTrigger: { trigger: ".reveal-up", start: "top 90%" },
    y: 50, opacity: 0, stagger: 0.2, duration: 1, ease: "expo.out"
});
