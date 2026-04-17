import { useState, useEffect } from "react";
import './Weather.css';
import refreshIcon from '../../assets/refresh.svg';
import likeIcon from '../../assets/like.svg';
import deleteIcon from '../../assets/delete.svg';
import sunImage from '../../assets/sun.png'

const Weather = () => {
    return (
        <>
            <div className="weather">
                <div className="card">
                    <div className="place">
                        <p className="city">Prague</p>
                        <p className="country">Czech Republic</p>
                    </div>
                    <h3 className="time">14:00</h3>
                    <div className="forecast-type">
                        <button className="forecast-type-btn">Hourly forecast</button>
                        <button className="forecast-type-btn">Weekly forecast</button>
                    </div>
                    <div className="date">
                        <p className="full-date">05.04.2026</p>
                        <p className="day">Sunday</p>
                    </div>
                    <img className="weather-image" src={sunImage} alt="" />
                    <p className="temp">22℃</p>
                    <div className="btn-container">
                        <button className="refresh-btn"><img src={refreshIcon} alt="" /></button>
                        <button className="like-btn"><img src={likeIcon} alt="" /></button>
                        <button className="see-more-btn">See more</button>
                        <button className="delete-btn"><img src={deleteIcon} alt="" /></button>
                    </div>
                </div>
                <div className="card">
                    <div className="place">
                        <p className="city">Prague</p>
                        <p className="country">Czech Republic</p>
                    </div>
                    <h3 className="time">14:00</h3>
                    <div className="forecast-type">
                        <button className="forecast-type-btn">Hourly forecast</button>
                        <button className="forecast-type-btn">Weekly forecast</button>
                    </div>
                    <div className="date">
                        <p className="full-date">05.04.2026</p>
                        <p className="day">Sunday</p>
                    </div>
                    <img className="weather-image" src={sunImage} alt="" />
                    <p className="temp">22℃</p>
                    <div className="btn-container">
                        <button className="refresh-btn"><img src={refreshIcon} alt="" /></button>
                        <button className="like-btn"><img src={likeIcon} alt="" /></button>
                        <button className="see-more-btn">See more</button>
                        <button className="delete-btn"><img src={deleteIcon} alt="" /></button>
                    </div>
                </div>
                <div className="card">
                    <div className="place">
                        <p className="city">Prague</p>
                        <p className="country">Czech Republic</p>
                    </div>
                    <h3 className="time">14:00</h3>
                    <div className="forecast-type">
                        <button className="forecast-type-btn">Hourly forecast</button>
                        <button className="forecast-type-btn">Weekly forecast</button>
                    </div>
                    <div className="date">
                        <p className="full-date">05.04.2026</p>
                        <p className="day">Sunday</p>
                    </div>
                    <img className="weather-image" src={sunImage} alt="" />
                    <p className="temp">22℃</p>
                    <div className="btn-container">
                        <button className="refresh-btn"><img src={refreshIcon} alt="" /></button>
                        <button className="like-btn"><img src={likeIcon} alt="" /></button>
                        <button className="see-more-btn">See more</button>
                        <button className="delete-btn"><img src={deleteIcon} alt="" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;