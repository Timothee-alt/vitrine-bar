import {navLinks} from '../../constants/index.js';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });
        navTween.fromTo('nav', { backgroundColor: 'transparent'}, {
            backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.out',
        });
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <p className="hover:text-yellow transition-colors duration-700">Sunny Lounge</p>
                </a>

                <ul >
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className="group relative transition-colors duration-700"
                        >
                            <a
                                href={`#${link.id}`}
                                className="group-hover:text-yellow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-yellow after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100 after:rounded-full"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar