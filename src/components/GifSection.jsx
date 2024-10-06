import '../css/gifSection.css';
import cool from '../img/cool.jpg';
import affordable from '../img/affordable.jpg';
import progressive from '../img/progressive.jpg';
import safe from '../img/safe.jpg';
import waterproof from '../img/waterproof.jpg';
import animation from '../img/animation.gif';


export function GifSection () {
    return (
        <>
        <div className='gifContainer'>
            <div className='iconContainer'>
                <img src={cool} alt="cool icon" />
                <img src={affordable} alt="cash icon" />
                <img src={progressive} alt="line icon" />
                <img src={safe} alt="lock icon" />
                <img src={waterproof} alt="raindrop icon" />
            </div>
            <div className='justTrustUsContainer'>
                <h1>Just trust us. It's better.</h1>
                <img src={animation} alt="phone animation" />
            </div>
        </div>
        </>
    )
};