import { useEffect, useState } from 'react';
import '../css/navigationSection.css';
import appleLogo from '../img/appleLogo.svg';

export function NavigationSection() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const nav = document.querySelector('.navigationSection');
        const navOffsetTop = nav.offsetTop;

        const handleScroll = () => {
            if (window.scrollY >= navOffsetTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`navigationSection ${isFixed ? 'fixedOnScroll' : ''}`}>
                <div className='navigationContent'>
                    <img src={appleLogo} alt="logo apple with word plug" />
                    <nav>
                        <ul>
                            <li><a href="">Vision</a></li>
                            <li><a href="">Design</a></li>
                            <li><a href="">Innovation</a></li>
                            <li><a href=""><button className='buyBtn'>Buy</button></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
