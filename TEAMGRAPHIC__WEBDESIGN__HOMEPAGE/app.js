gsap.to("#box", {
    duration: 1,
    rotate: "-720",
    scrollTrigger: {
        trigger: "#box",
        scroller: "body",
        scrub: 1,
        start: "top 50%",
        end: "top 150%"
    }
})