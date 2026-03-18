gsap.registerPlugin(ScrollTrigger);

// 1. LIVE CLINIC HOURS LOGIC
function updateStatus() {
    const dot = document.querySelector('.status-dot');
    const text = document.querySelector('.status-text');
    const hour = new Date().getHours();

    if (hour >= 9 && hour < 22) { // 9 AM to 10 PM
        dot.classList.add('active');
        text.innerText = "Clinic Open";
        text.classList.replace('text-slate-400', 'text-green-500');
    } else {
        dot.classList.remove('active');
        dot.style.background = "#ef4444";
        text.innerText = "Clinic Closed";
        text.classList.replace('text-slate-400', 'text-red-500');
    }
}

// 2. TOGGLE MAP MODAL
function toggleMap() {
    const modal = document.getElementById('mapModal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        gsap.from(".relative.bg-white", { y: 50, opacity: 0, duration: 0.5 });
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// 3. PAGE ANIMATIONS
window.addEventListener('DOMContentLoaded', () => {
    updateStatus();

    // Hero Entry
    gsap.from(".hero-reveal > *", { y: 40, opacity: 0, stagger: 0.15, duration: 1, ease: "power4.out" });

    // Staggered Service Cards
    gsap.from(".reveal-up", {
        scrollTrigger: { trigger: "#services", start: "top 80%" },
        y: 100, opacity: 0, stagger: 0.2, duration: 1.2, ease: "expo.out"
    });
});
