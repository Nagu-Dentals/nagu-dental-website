// 1. PRELOADER & HERO REVEAL
window.addEventListener('load', () => {
    gsap.to("#loader", { opacity: 0, duration: 0.8, onComplete: () => {
        document.getElementById('loader').style.display = 'none';
        gsap.from(".hero-content > *", { y: 60, opacity: 0, stagger: 0.1, duration: 1.2, ease: "expo.out" });
    }});
});

// 2. LIVE STATUS LOGIC
function updateStatus() {
    const dot = document.querySelector('.status-dot');
    const text = document.querySelector('.status-text');
    const hour = new Date().getHours();

    if (hour >= 9 && hour < 22) {
        dot.style.background = "#22c55e";
        text.innerText = "Open Everyday";
        text.style.color = "#22c55e";
    } else {
        dot.style.background = "#ef4444";
        text.innerText = "Clinic Closed";
        text.style.color = "#ef4444";
    }
}

// 3. MAP MODAL TOGGLE
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
