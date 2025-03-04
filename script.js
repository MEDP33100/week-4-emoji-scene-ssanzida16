window.onload = () => {
    gsap.fromTo(".sun", {
        x: -200
    }, {
        x: 200,
        duration: 5,
        ease: "power2.inOut",
        repeat: -1,  // Repeat indefinitely
        yoyo: true    // Makes it reverse back
    });

    gsap.from(".clouds", {
        opacity: 0,
        duration: 3,
        delay: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });
};
