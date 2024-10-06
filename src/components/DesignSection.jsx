import { useEffect } from "react";
import '../css/designSection.css';
import bottomRightAluminium from '../img/parallax-01.png';
import leftMiddleAluminium from '../img/parallax-02.png';
import topBigAluminium from '../img/parallax-03.png';

export function DesignSection() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const images = document.querySelectorAll('.phoneImageContainer img');

            images.forEach((img, index) => {
                let translateYValue;

                switch (index) {
                    case 0:
                        translateYValue = scrollY * -0.1;
                        break;
                    case 1:
                        translateYValue = scrollY * -0.15;
                        break;
                    case 2:
                        translateYValue = scrollY * -0.2;
                        break;
                    default:
                        translateYValue = scrollY * -0.1;
                }

                img.style.transform = `translateY(${translateYValue}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='DesignContainer'>
                <div className='textContainer'>
                    <h4 className='designTitle'>Design</h4>
                    <h1 className='perfectTitle'>Perfect Fit</h1>
                    <p className='longPara'>Innovation isn't always obvious to the eye, but look a little closer at Apple Plug. You'll find it is designed to fit seamlessly into the outdated headphone connector, transforming last year's phone into a modern masterpiece as beautifully as you'd expect from Apple. Once in place, Apple Plug cannot be removed. But why would you want to? Would you want to downgrade? We didn't think so.</p>
                </div>
                <div className='phoneImageContainer'>
                    <img src={bottomRightAluminium} alt="aluminum part" />
                    <img src={leftMiddleAluminium} alt="aluminum part" />
                    <img src={topBigAluminium} alt="aluminum part" />
                </div>
            </div>
        </>
    );
};
