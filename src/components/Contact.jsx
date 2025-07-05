import {openingHours, socials} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        })

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.2,
        })
        timeline.from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.2,
        })
        .to('#f-right-leaf', {
            y: '-50',
            duration: 1,
            ease: 'power1.inOut',
        }, '<')
        .to('#f-left-leaf', {
            y: '50',
            duration: 1,
            ease: 'power1.inOut',
        })
    })
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id ="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id ="f-left-leaf" />

            <div className="content">
                <h2 className="text-yellow">Où nous trouver</h2>

                <div>
                    <h3 className="text-yellow">Visiter notre bar</h3>
                    <p>26, rue Kerampont, Lannion</p>
                </div>
                <div>
                    <h3 className="text-yellow">Nous contacter</h3>
                    <p>06.00.00.00.00</p>
                    <p>sunnylounge@cocktail.com</p>
                </div>
                <div>
                    <h3 className="text-yellow">Ouvert tous les jours</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>
                <div>
                    <h3 className="text-yellow">Nos réseaux</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <img
                                 src={social.icon}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact