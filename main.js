gsap.registerPlugin(ScrollTrigger);

const slides = document.querySelectorAll(".slide");
const slideContent = document.querySelector(".slide-content");
const title = document.querySelector(".title");
const category = document.querySelector(".category");

const content = [
    {
        category: "CREATIVE VISION",
        title: "A WALK IN<br>NATURE"
        },
    {
        category: "THE NEXT CHAPTER",
        title: `COMING<br>SOON
            <span class="countdown-date">30 SEPTEMBER 2026 / 10:00 AM</span>
            <span class="countdown" aria-live="polite">
                <span class="countdown-unit"><strong data-unit="days">00</strong><span>DAYS</span></span>
                <span class="countdown-unit"><strong data-unit="hours">00</strong><span>HOURS</span></span>
                <span class="countdown-unit"><strong data-unit="minutes">00</strong><span>MINUTES</span></span>
                <span class="countdown-unit"><strong data-unit="seconds">00</strong><span>SECONDS</span></span>
            </span>`
    },
    {
        category: "EVENT BLUEPRINT",
        title: `
            <span class="scene3-heading">24-HOUR INTERDISCIPLINARY ENGINEERING HACKATHON</span>
            <span class="scene3-subheading">Proposed Event Structure</span>

            <span class="scene3-rounds">
                <span class="scene3-round scene3-round-blue">
                    <span class="scene3-round-label">ROUND 1</span>
                    <strong>PLAN &amp; INITIAL DESIGN</strong>
                    <b>10:00 AM - 1:00 PM</b>
                    <span class="scene3-list">
                        <span>Problem statement &amp; rules</span>
                        <span>Problem analysis + requirements</span>
                        <span>System architecture / CAD concept</span>
                        <span>Risk &amp; failure analysis</span>
                        <span>Team task allocation</span>
                        <span>Initial success criteria</span>
                    </span>
                </span>
                <span class="scene3-round scene3-round-orange">
                    <span class="scene3-round-label">ROUND 2</span>
                    <strong>BUILD &bull; TEST &bull; ADAPT</strong>
                    <b>1:00 PM - 8:00 AM</b>
                    <span class="scene3-list">
                        <span>Build and integrate the solution</span>
                        <span>4:00 PM - Change 1: unreliable data / assumptions</span>
                        <span>10:00 PM - Change 2: reduced resources / capacity</span>
                        <span>4:00 AM - Change 3: unexpected failure / limitation</span>
                        <span>Mandatory progress checkpoints</span>
                        <span>Adapt, test and recover</span>
                    </span>
                </span>
                <span class="scene3-round scene3-round-green">
                    <span class="scene3-round-label">ROUND 3</span>
                    <strong>FINAL VALIDATION &amp; PRESENTATION</strong>
                    <b>8:00 AM - 10:00 AM</b>
                    <span class="scene3-list">
                        <span>8:00 AM - Development freeze</span>
                        <span>Final testing &amp; validation</span>
                        <span>Final submission: code / CAD / report / demo</span>
                        <span>9:00 AM - Presentation + demonstration</span>
                        <span>Technical Q&amp;A</span>
                        <span>10:00 AM - Results</span>
                    </span>
                </span>
            </span>

            <span class="scene3-flow">Core flow: <b>PLAN &rarr; BUILD &rarr; ADAPT &rarr; RECOVER &rarr; VALIDATE</b></span>

            <span class="scene3-evaluation">
                <span class="scene3-evaluation-copy">
                    <span class="scene3-heading">CHALLENGE MECHANISM &amp; EVALUATION</span>
                    <span class="scene3-subheading">The objective is not just to build - it is to survive changing conditions.</span>
                    <span class="scene3-challenges">
                        <span class="scene3-challenge"><b>START</b><small>10:00 AM</small><span>Base problem + standard rules revealed</span></span>
                        <span class="scene3-challenge"><b>6 HOURS</b><small>4:00 PM</small><span>20-30% information / data / assumptions become unreliable</span></span>
                        <span class="scene3-challenge"><b>12 HOURS</b><small>10:00 PM</small><span>Resources, energy, budget or capacity are significantly reduced</span></span>
                        <span class="scene3-challenge"><b>18 HOURS</b><small>4:00 AM</small><span>Unexpected failure, design limitation or operating change</span></span>
                    </span>
                    <span class="scene3-cad"><b>CAD requirement</b><span>3D model / assembly &bull; motion &bull; material &bull; manufacturability &bull; calculations</span></span>
                </span>
                <span class="scene3-scoring">
                    <span class="scene3-section-title">Recommended Scoring - 100 Marks</span>
                    <span class="scene3-score"><b>Round 1 - Planning</b><strong>20</strong></span>
                    <span class="scene3-score"><b>Round 2 - Progress &amp; Adaptation</b><strong>25</strong></span>
                    <span class="scene3-score"><b>Final Technical Solution</b><strong>20</strong></span>
                    <span class="scene3-score"><b>Reliability &amp; Failure Handling</b><strong>15</strong></span>
                    <span class="scene3-score"><b>Innovation</b><strong>10</strong></span>
                    <span class="scene3-score"><b>Presentation &amp; Q&amp;A</b><strong>10</strong></span>
                    <span class="scene3-section-title scene3-presentation-title">Final Presentation - 8 Minutes / Team</span>
                    <span class="scene3-presentation">Problem (1) &bull; Original plan (1) &bull; Final solution (2) &bull; Adaptation (1) &bull; Failure handling (1) &bull; Results (1) &bull; Q&amp;A</span>
                </span>
            </span>
        `
    },
    {
        category: "CREATIVE VISION",
        title: "CONTACT<br>US"
    }
];

gsap.set(slides, { opacity: 0 });
gsap.set(slides[0], { opacity: 1 });
slides.forEach((slide, index) => {
    gsap.set(slide.querySelector("img"), {
        scale: index === 0 ? 1.05 : 1.14,
        z: index === 0 ? 0 : -120
    });
});

const masterTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: `+=${(slides.length - 1) * 230}%`,
        scrub: 0.35,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false
    }
});

function addSlideTransition(timeline, currentIndex, nextIndex) {
    const currentImage = slides[currentIndex].querySelector("img");
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];
    const nextImage = nextSlide.querySelector("img");

    timeline
        .to([currentImage, slideContent], {
            scale: 3.2,
            z: 180,
            duration: 0.9,
            ease: "power2.in"
        })
        .set(currentSlide, { opacity: 0 })
        .set(nextSlide, { opacity: 1 })
        .set(slideContent, { className: `slide-content scene-${nextIndex + 1}` })
        .call(() => {
            slideContent.scrollTop = 0;
        })
        .set(slideContent, {
            scale: 1,
            x: 0,
            y: 0,
            yPercent: nextIndex === 2 ? 0 : -50,
            z: 0
        })
        .set(title, { innerHTML: content[nextIndex].title })
        .set(category, { textContent: content[nextIndex].category })
        .fromTo(nextImage,
            { scale: 1.32, z: -180 },
            { scale: 1.05, z: 0, duration: 0.95, ease: "power3.out" }
        )
        .fromTo(slideContent,
            { scale: 1.18, z: -180 },
            { scale: 1, z: 0, duration: 0.95, ease: "power3.out" },
            "<"
        );
}

for (let index = 0; index < slides.length - 1; index += 1) {
    addSlideTransition(masterTimeline, index, index + 1);
}

const countdownTarget = new Date(2026, 8, 30, 10, 0, 0).getTime();

function updateCountdown() {
    const countdownUnits = {
        days: document.querySelector('[data-unit="days"]'),
        hours: document.querySelector('[data-unit="hours"]'),
        minutes: document.querySelector('[data-unit="minutes"]'),
        seconds: document.querySelector('[data-unit="seconds"]')
    };
    const remaining = Math.max(0, countdownTarget - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (countdownUnits.days) {
        countdownUnits.days.textContent = String(days).padStart(2, "0");
        countdownUnits.hours.textContent = String(hours).padStart(2, "0");
        countdownUnits.minutes.textContent = String(minutes).padStart(2, "0");
        countdownUnits.seconds.textContent = String(seconds).padStart(2, "0");
    }

    if (remaining === 0) {
        clearInterval(countdownTimer);
    }
}

let countdownTimer;
updateCountdown();
countdownTimer = setInterval(updateCountdown, 1000);