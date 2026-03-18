gsap.registerPlugin(ScrollTrigger);

// 1. PRELOADER & HERO ANIMATION
window.addEventListener('load', () => {
    gsap.to("#loader", { opacity: 0, duration: 1, onComplete: () => {
        document.getElementById('loader').style.display = 'none';
        gsap.from(".hero-content > *", { y: 60, opacity: 0, stagger: 0.15, duration: 1, ease: "power4.out" });
    }});
});

// 2. LIVE CLINIC HOURS LOGIC
function updateStatus() {
    const dot = document.querySelector('.status-dot');
    const text = document.querySelector('.status-text');
    const hour = new Date().getHours();

    // 9 AM to 10 PM Operating Hours
    if (hour >= 9 && hour < 22) {
        dot.style.background = "#22c55e";
        text.innerText = "Open Now";
        text.style.color = "#22c55e";
    } else {
        dot.style.background = "#ef4444";
        text.innerText = "Closed Now";
        text.style.color = "#ef4444";
    }
}

// 3. SCROLL REVEAL
gsap.from(".reveal-up", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    y: 80, opacity: 0, stagger: 0.2, duration: 1.2, ease: "expo.out"
});

// 4. MAP MODAL TOGGLE
function toggleMap() {
    const modal = document.getElementById('mapModal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        gsap.from(".relative.bg-white", { y: 100, opacity: 0, duration: 0.6, ease: "expo.out" });
    } else {
        gsap.to(".relative.bg-white", { y: 100, opacity: 0, duration: 0.4, onComplete: () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }});
    }
}

updateStatus();
