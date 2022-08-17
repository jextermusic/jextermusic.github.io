var circle = document.querySelector("#circle")


window.addEventListener("mousemove", function(dets){
    circle.style.top = `${dets.clientY}px`;
    circle.style.left = `${dets.clientX}px`;
})

gsap.set("#saffron,#white,#green",{
    width: "0%",
    backgroundColor: "white"
})

gsap.set("#ashokachakra",{
    opacity: 0
})

gsap.set("#bluroverlay",{
    opacity: 0
})

gsap.set("#img1,#img2,#img3",{
    left: "100%",
})

gsap.set("#quotes2 h1",{
    opacity: 0
})

var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#screen1",
            start: "top",
            end: "350%",
            scrub: 3,
            pin: true
        }
    })

tl1.to("#saffron",{
    width: "100%",
    backgroundColor: "rgba(252,119,0,255)",
    ease: "expo.Out",
    stagger: 1
})

tl1.to("#green",{
    width: "100%",
    backgroundColor: "rgba(21,136,9,255)",
    ease: "expo.Out",
    
})

tl1.to("#ashokachakra",{
    ease: "power1.inOut",
    opacity: 1,
    rotate: 120,
})

tl1.to("#bluroverlay",{
    opacity: 1,
    ease: "power1.inOut",
    backgroundColor: "rgba(240, 248, 255, 0.308)"
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#quotes",
        start: "0%",
        end: "350%",
        scrub: 5,
        pin: true,
        // markers: true
    }
})

tl2.to("#quotes",{
    ease: "expo.inOut",
    background: "rgb(255,111,0)",
    background: "linear-gradient(111deg, rgba(255,111,0,1) 13%, rgba(255,255,255,1) 52%, rgba(0,162,35,1) 96%)"
})

tl2.to('#img1,#text1,#img2,#img3',{
    ease: "expo.in",
    left: "-150%",
})

// tl2.to("#img1,#text1,#img2",{
//     ease: "ease.inOut",
//     opacity: 1,
//     x: "0",
//     stagger: 2
// })

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#quotes2",
        start: "0",
        end: "200%",
        scrub: 5,
        pin: true,
        // markers: true
    }
})

tl3.to("#quotes2",{
    ease: "power1.inOut",
    background: "rgb(23,23,23)",
    background: "linear-gradient(111deg, rgba(23,23,23,1) 0%, rgba(14,14,14,1) 52%, rgba(31,31,31,1) 100%)"
})

tl3.to("#final,#final2",{
    color: "white",
    opacity: 1,
    stagger: 1
})

