gsap.to("#nav",{
    backgroundColor : "#011b1a",
    height : "73px",
    duration : 0.5,
    scrollTrigger :{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
})

gsap.to("#main",{
    backgroundColor:"#011b1a",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
})