import {featureLists, goodLists} from "../../constants/index.js";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useMediaQuery} from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Art = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const listItems = document.querySelectorAll('.will-fade li');
        listItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    scale: 1.03,
                    duration: 0.3,
                    borderRadius: '8px',
                    padding: '4px 8px',
                    ease: 'power1.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    backgroundColor: 'transparent',
                    scale: 1,
                    duration: 0.3,
                    borderRadius: '0px',
                    padding: '0px',
                    ease: 'power1.out'
                });
            });
        });

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: '+=150%',
                scrub: 1.5,
                pin: true,
                pinSpacing: true
            }
        });

        gsap.from('h2.will-fade', {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#art',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });


        gsap.from('.will-fade li', {
            x: isMobile ? 0 : -50,
            y: isMobile ? 30 : 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '#art',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });


        gsap.from('.check-icon', {
            scale: 0,
            rotation: 180,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'elastic.out(1.2, 0.5)',
            scrollTrigger: {
                trigger: '#art',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });


        maskTimeline.to('.will-fade', {
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.inOut',
            delay: 0.5,
        })
        maskTimeline.to('.masked-img', {
            scale: 1.3,
            rotation: 5,
            maskPosition: 'center',
            maskSize: '400%',
            duration: 1.5,
            ease: 'power2.inOut',
        })
        maskTimeline.to('.masked-container div', {
            opacity: 1,
            y: -20,
            duration: 1,
            ease: 'power2.out',
        }, "+=0.5");


        ScrollTrigger.create({
            trigger: '#art',
            start: 'top bottom',
            end: 'bottom -50%',
            scrub: true,
            onUpdate: (self) => {
                gsap.to('.masked-img', {
                    y: self.progress * 50,
                    duration: 0.5,
                    ease: 'none'
                });
            }
        });

        const finalHeadingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.masked-container h3',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        finalHeadingTimeline
            .from('.masked-container h3', {
                textShadow: '0 0 0px rgba(255, 255, 255, 0)',
                duration: 2,
                ease: 'power2.inOut'
            })
            .to('.masked-container h3', {
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                duration: 2,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });
    })
    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="">L'ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images/check.png" alt="check" className="check-icon" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <img
                            src="/images/under-img.jpg"
                            alt="cocktail"
                            className="abs-center masked-img size-full object-contain"
                        />
                    </div>
                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/images/check.png" alt="check" className="check-icon" />
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="masked-container">
                    <h2 className="will-fade">Une perfection liquide</h2>
                    <div id="masked-content">
                        <h3>Fait avec passion</h3>
                        <p>Plus qu'un cocktail, un moment inoubliable.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art
