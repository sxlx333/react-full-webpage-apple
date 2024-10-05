import '../css/plugSection.css';
import appleLogo from '../img/appleLogo.svg';
import aluminiumPhoto from '../img/aluminiumFourParts.jpg'

export function PlugSection () {
    return (
        <>
        <div className='plugSectionContainer'>
            <div className='plugSection'>
                <img className='logo' src={appleLogo} alt="apple logo" />
                <p className='paragraph'>Our lightest product ever.</p>
                <img className='aluminium' src={aluminiumPhoto} alt="aluminium photo" />
            </div>
        </div>
        </>
    )
};