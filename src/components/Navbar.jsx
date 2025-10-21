import {navLinks} from '../../constants/index.js';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useState} from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav>
            <div className="flex items-center justify-between lg:ml-8 relative">
                <a href="#home" className="flex items-center gap-2">
                    <p className="hover:text-yellow transition-colors duration-700">Sunny Lounge</p>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex lg:mr-22">
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

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 flex flex-col gap-0">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className="border-b border-white/5 last:border-b-0"
                        >
                            <a
                                href={`#${link.id}`}
                                onClick={closeMenu}
                                className="block px-5 py-3 text-sm hover:text-yellow transition-colors duration-300"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar