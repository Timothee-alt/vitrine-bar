import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const splitLines = SplitText.create('.sub-content p:first-of-type', {
            type: 'lines'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })
        scrollTimeline.from(splitLines.lines, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02
        })
        scrollTimeline.from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02
        })
        scrollTimeline.from('.top-grid div, .bottom-grid div', {
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.04,
        }, '-=0.05')
    })
    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                   <div className="md:col-span-8">
                        <p className="badge">Les meilleurs cocktails</p>
                        <h2>Où chaque détails comptent -
                        du début à la fin
                        </h2>
                   </div>
                    <div className="sub-content">
                        <p>
                           Chacun de nos cocktails est une réfléxion de notre attention du détail,
                            pour faire de chaque verre un moment mémorable
                        </p>
                        <div>
                            <p className="md:text-3xl text-5xl font-bold">
                                <span className="text-white">4.5</span><span>/</span><span className="text-white">5</span>
                            </p>
                            <p className="text-sm text-white-100">
                                Plus de 1200 clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt1.png" alt="grid-img-1" />
                </div>

                <div className="md:col-span-6">
                    <div className="noisy"/>
                    <img src="/images/abt2.png" alt="grid-img-2" />
                </div>

                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt5.png" alt="grid-img-5" />
                </div>
            </div>
            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy"/>
                    <img src="/images/abt3.png" alt="grid-img-3" />
                </div>
                <div className="md:col-span-4">
                    <div className="noisy"/>
                    <img src="/images/abt4.png" alt="grid-img-4" />
                </div>
            </div>
        </div>
    )
}

export default About