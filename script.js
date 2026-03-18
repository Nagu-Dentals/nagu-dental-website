gsap.registerPlugin(ScrollTrigger);

// 1. DYNAMIC CLINIC STATUS LOGIC
function updateClinicStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    const now = new Date();
    const hour = now.getHours();

    // Opening Hours: 9 AM (9) to 10 PM (22)
    if (hour >= 9 && hour < 22) {
        statusDot.classList.add('active');
        statusDot.style.background = "#22c55e";
        statusText.innerText = "Clinic Open - Walk-ins Welcome";
        statusText.style.color = "#22c55e";
    } else {
        statusDot.classList.remove('active');
        statusDot.style.background = "#ef4444";
        statusText.innerText = "Closed - Opens at 9:00 AM";
        statusText.style.color = "#ef4444";
    }
}

// 2. LIVE MAP TOGGLE
function toggleMap() {
    const modal = document.getElementById('mapModal');
    if (modal.style.display === 'flex') {
        gsap.to(".modal-content", { y: 100, opacity: 0, duration: 0.4 });
        gsap.to(".modal-backdrop", { opacity: 0, duration: 0.4, onComplete: () => {
            modal.style.display = 'none';
        }});
    } else {
        modal.style.display = 'flex';
        gsap.fromTo(".modal-backdrop", { opacity: 0 }, { opacity: 1, duration: 0.5 });
        gsap.fromTo(".modal-content", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
    }
}

// 3. MASTER SCROLL ANIMATIONS
function initAnimations() {
    // Hero Entrance
    gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out"
    });

    gsap.from(".hero-arch", {
        x: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.2
    });

    // Staggered Service Cards
    gsap.from(".reveal-up", {
        scrollTrigger: {
            trigger: "#services",
            start: "top 80%"
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out"
    });

    // Parallax on Floating Card
    gsap.to(".animate-float", {
        y: -40,
        scrollTrigger: {
            trigger: ".hero-section",
            scrub: 2
        }
    });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    updateClinicStatus();
    initAnimations();
});
