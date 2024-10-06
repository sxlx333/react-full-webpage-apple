import '../css/visionSection.css';
import phoneImageRight from '../img/phoneImageRight.jpg';

export function VisionSection () {
    return (
        <>
        <div className='visionContainer'>
            <div className="visionSection">

                <div className='textContainer'>
                    <h4 className='visionTitle'>Vision</h4>
                    <h1 className='upgradeTitle'>Upgrade to iPhone 7 with Apple Plug.</h1>
                    <p className='longPara'>This isn't 2009. Your phone doesn't have a floppy drive, and it shouldn't have a headphone connector either. When we made iPhone 6 and 6s, the world wasn't ready for the future. Now, it is. Apple Plug is the perfect solution. Fill in your archaic headphone connector with beautiful aluminium and plug yourself into the future.</p>
                </div>
                <div className='phoneImageContainer'>
                    <img src={phoneImageRight} alt="phone image" />
                </div>
            </div>

        </div>
        </>
    )
};