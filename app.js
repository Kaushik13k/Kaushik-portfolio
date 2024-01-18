gsap.registerPlugin(ScrollTrigger);

gsap.to(".scrolling-text", {
    x: 300,
    duration: 2,
    scrollTrigger: {
        trigger: ".scrolling-text",
        start: "50% 70%",
        scrub:5,
        // markers: true
    }
})