import '../css/aluminiumSection.css';
import fourAluminiums from '../img/block-7.jpg'; 

export function AluminiumSection() {
    return (
        <>
            <div className='aluminiumSection'>
                <div className='textContainer'>
                    <h1 className='aluminiumTitle'>Aluminium. Crafted with precision.</h1>
                </div>
                <div className='phoneImageContainer'>
                    <img src={fourAluminiums} alt="aluminum part" /> 
                </div>
            </div>
        </>
    );
};
