import '../css/innovationSection.css';
import LbackwardsAluminium from '../img/Lbackwards.png';

export function InnovationSection() {
    return (
        <>
            <div className='innovationSection'>
                <div className='textContainer'>
                    <h4 className='innovationTitle'>Innovation</h4>
                    <h1 className='pureTitle'>Pure Invention</h1>
                    <p className='longPara'>
                        Innovation questions everything you know. We removed the floppy drive, and people said we were wrong. We weren't. We removed the CD drive, and again people said we were wrong. We weren't. We never are. Apple Plug isn't just a pristine product. It's an essential part of showing others who you are.
                    </p>
                </div>
                <div className='phoneImageContainer'>
                    <img src={LbackwardsAluminium} alt="aluminum part" />
                </div>
            </div>
        </>
    );
};
