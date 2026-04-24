import { useState } from 'react';
import search from '../../assets/search.svg'
import './Hero.css'

const Hero = ({onSearch}) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        onSearch(input);
        setInput("");
    };
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
                <form className='search-container' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search location..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className='search-btn'><img src={search} alt="" /></button>
                </form>
                
            </div>
        </>
    )
}

export default Hero;