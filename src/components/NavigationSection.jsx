import '../css/navigationSection.css';
import appleLogo from '../img/appleLogo.svg';

export function NavigationSection () {
    return (
        <>
        <div className='navigationSection'>
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
    )
};