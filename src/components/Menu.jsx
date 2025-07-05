'use client'

import {sliderLists} from "../../constants/index.js";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Menu = () => {

    const contentRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        // Create a timeline for better control and cleanup
        const tl = gsap.timeline();

        tl.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1})
          .fromTo('.cocktails img', {opacity: 0, xPercent: -100},
              {xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'}, "<")
          .fromTo('.details h2', {yPercent: 100, opacity: 0},
              {yPercent: 0, opacity: 1, ease: 'power1.inOut'}, "<0.2")
          .fromTo('.details p', {yPercent: 100, opacity: 0},
              {yPercent: 0, opacity: 1, ease: 'power1.inOut'}, "<0.1");

        // Return cleanup function
        return () => {
            tl.kill();
        };
    }, [currentIndex])

    const totalCocktails = sliderLists.length;

    const goToSlide = (index) => {
       const newIndex = (index + totalCocktails) % totalCocktails;

       setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail =  getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white">
                Menu des cocktails
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={cocktail.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                        onClick={() => goToSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>
            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="Flèche précédent" aria-hidden="true" />
                    </button>

                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="Flèche suivant" aria-hidden="true" />
                    </button>
                </div>
                <div className="cocktails">
                    <img 
                        src={currentCocktail.image} 
                        alt={`Cocktail ${currentCocktail.name}`} 
                        className="object-contain"
                    />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recette pour:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
