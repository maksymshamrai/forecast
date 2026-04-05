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
                    <p>
                        April 2026 <br />
                        Sunday, 5th
                    </p>
                </div>
                <input type="text" name="" id="" value="Search location..." />
                <button className='search-btn'><img src={search} alt="" /></button>
            </div>
        </>
    )
}

export default Hero;