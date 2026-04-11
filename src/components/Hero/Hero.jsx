import search from '../../assets/search.svg'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <h1>Weather dashboard</h1>
                <div className='txt-container'>
                    <p className='hero-txt'>
                        Create your personal list of <br />
                        favorite cities and always be <br />
                        aware of the weather.
                    </p>
                    <div className='divider'></div>
                    <p className='hero-date'>
                        April 2026 <br />
                        Sunday, 5<sup>th</sup>
                    </p>
                </div>
                <div className='search-container'>
                    <input type="text" name="" id="" value="Search location..." />
                    <button className='search-btn'><img src={search} alt="" /></button>
                </div>
                
            </div>
        </>
    )
}

export default Hero;