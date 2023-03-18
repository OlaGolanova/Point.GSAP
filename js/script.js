'use strict';

window.addEventListener('DOMContentLoaded', () => {
    fix100vh();
    findHeight();
    animation();
    window.addEventListener('resize', () => {
        fix100vh();
        findHeight();
    })
})

let promo = document.querySelector('.promo');


function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function findHeight(){
    let fullHeight = document.documentElement.clientHeight,
        fullWidth = document.documentElement.clientWidth;
    if(fullWidth > 768 && fullWidth <= 1024){
        if(fullHeight < 730){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth > 576 && fullWidth <= 768){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth <= 576){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } 
}

function animation(){
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
        const tlTitle = gsap.timeline({})
        tlTitle.from('.promo__title span:first-child', {
            xPercent: 200,
            ease: "back.out(1.1)",
            duration: 1, 
        })
        tlTitle.from('.promo__title span:last-child', {
            xPercent: -200,
            ease: "back.out(1.1)",
           
            duration: 1, 
        }, '<',)
    
        const tlPromo = gsap.timeline({
            scrollTrigger: {
                trigger: '.promo',
                start: 'top top',
                end: '+=50%',
                scrub: 1,
                pin: true,
            }
        })
    
        tlPromo.to('.promo__bottom', {
            opacity: 1,
            y: 0,
        })
        tlPromo.fromTo('.promo__bottom img', {y: -75}, {
            y:10
        },'<')
    
    
        const tlLines = gsap.timeline({
            scrollTrigger: {
                trigger: '.choose__wrap',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })
        tlLines.to('.choose__wrap .top', {
            xPercent: -70
        })
        tlLines.to('.choose__wrap .bottom', {
            xPercent: 20
        },'<')
    
        gsap.from('.rates__card', {
           opacity: 0,
           yPercent: 100,
           stagger: 0.3,
           scrollTrigger: {
                trigger: '.rates__wrap',
                start: 'top bottom',
                toggleActions: 'play none none reverse'
           }
        })
    
        let sections = gsap.utils.toArray('.plus-block');
        
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            // delay: 0.2,
            scrollTrigger: {
                trigger: '.plus',
                start: 'top top',
                end: '+=2000',
            //  end: `+=${sections.length*1000}`,
                // snap: 1 / (sections.length - 1),
                pin: true,
                scrub: 1        }
        })
    
        const tlPoint = gsap.timeline({
            scrollTrigger: {
                trigger: '.point',
                start: 'top center',
                end: 'bottom bottom',
                toggleActions: 'play reverse play reverse',
                scrub: 1
            }
        })
        tlPoint.to('.point', {
            backgroundColor: '#000',
        })
        .to('.point__title', {
            color: '#fff',
        }, '<')
        .to('.point__descr', {
            color: '#fff',
        }, '<')
    
        const tlImg = gsap.timeline({
            scrollTrigger: {
                trigger: '.point__wrapper',
                start: 'top top',
                pin: true,
                scrub: 1
            }
        })
        tlImg.to('.point__img:first-child img', {
            scale: 1
        })
        tlImg.to('.point__img:last-child img', {
            scale: 0
        }, '<')
    
        gsap.to('.footer__point', {
            y: 0,
            scrollTrigger: {
                trigger: '.main',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
    
            }
        })
    
        const tlFooter = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 80%',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        tlFooter.to('.footer__point svg path', {
                fill: '#FF0027',
                opacity: 1 
        })
        .to('.footer__point', {
                scale: 1 
            }, '<')
    });

    mm.add("(max-width: 1024px)", () => {
        const tlTitle = gsap.timeline({})
        tlTitle.from('.promo__title span:first-child', {
            xPercent: 200,
            ease: "back.out(1.1)",
            duration: 1, 
        })
        tlTitle.from('.promo__title span:last-child', {
            xPercent: -200,
            ease: "back.out(1.1)",
           
            duration: 1, 
        }, '<',)
    
        const tlPromo = gsap.timeline({
            scrollTrigger: {
                trigger: '.promo',
                start: 'top top',
                end: '+=50%',
                scrub: 1,
            }
        })
    
        tlPromo.to('.promo__bottom', {
            opacity: 1,
            y: 0,
        })
        tlPromo.fromTo('.promo__bottom img', {y: -75}, {
            y:10
        },'<')
    
    
        const tlLines = gsap.timeline({
            scrollTrigger: {
                trigger: '.choose__wrap',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })
        tlLines.to('.choose__wrap .top', {
            xPercent: -70
        })
        tlLines.to('.choose__wrap .bottom', {
            xPercent: 15
        },'<')
    
        // gsap.from('.rates__card', {
        //    yPercent: 100,
        //    scrollTrigger: {
        //         trigger: '.rates__wrap',
        //         start: 'top bottom',
        //         end: 'bottom bottom',
        //         scrub: true,
        //         toggleActions: 'play none none reverse'
        //    }
        // })
        gsap.fromTo('.rates__card', {yPercent: 100}, {
            yPercent: -20,
            scrollTrigger: {
                trigger: '.rates__wrap',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
                toggleActions: 'play none none reverse'
           }
        })
   

        const tlPoint = gsap.timeline({
            scrollTrigger: {
                trigger: '.point',
                start: 'top center',
                end: 'bottom bottom',
                toggleActions: 'play reverse play reverse',
                scrub: 1
            }
        })
        tlPoint.to('.point', {
            backgroundColor: '#000',
        })
        .to('.point__title', {
            color: '#fff',
        }, '<')
        .to('.point__descr', {
            color: '#fff',
        }, '<')
    
        const tlImg = gsap.timeline({
            scrollTrigger: {
                trigger: '.point__wrapper',
                start: 'top top',
                pin: true,
                scrub: 1
            }
        })
        tlImg.to('.point__img:first-child img', {
            scale: 1
        })
        tlImg.to('.point__img:last-child img', {
            scale: 0
        }, '<')
    
        gsap.to('.footer__point', {
            y: 0,
            scrollTrigger: {
                trigger: '.main',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
    
            }
        })
    
        const tlFooter = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 80%',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        tlFooter.to('.footer__point svg path', {
                fill: '#FF0027',
                opacity: 1 
        })
        .to('.footer__point', {
                scale: 1 
            }, '<')
    });

    
}
