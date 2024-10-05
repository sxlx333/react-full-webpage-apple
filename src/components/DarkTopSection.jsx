import '../css/darkTopSection.css';
import logoTop from '../img/logoTopDarkBackground.webp';

export function DarkTopSection () {
    return (
        <>
        <div className='darkTopSection'>
            <div className='imgContainer'>
                <img className='topLogo' src={logoTop} alt="top logo" />
            </div>
        </div>
        </>
    )
};