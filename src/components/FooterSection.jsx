import '../css/footerSection.css';

export function FooterSection () {
    return (
        <>
        <div className='footerSection'>
            <div className='footerContainer'>
                <h1 className='madeTitle'>Made by <span className='underlined'>Nicer</span>.
                </h1>
                <p className='parodyPara'>(A parody of the good folks at Apple.)</p>
                <p className='nicerPara'>
                    <i className='fab fa-twitter'></i> {/* 'fab' instead of 'fa' */}
                    <span className='underlined'>@nicerstudio</span>
                </p>

                <p className='ifThisMadePara'>If this made you chuckle, sign up to get an email when we make other cool stuff.</p>
                <div className='formContainer'>
                    <form action="">
                        <input type="email" placeholder='Email address' required/>
                        <button className='subscribeBtn'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
};