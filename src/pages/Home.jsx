import React from 'react';
import styles from './Home.module.scss';

function Home({ dailyForecast }) {
  return (
    <div className={styles.dailyForecast}>
      <div className={styles.container}>
        <div className={styles.currentTemp}>
          <img src="https://cdn-icons-png.flaticon.com/128/4735/4735121.png" />
          <h1>{dailyForecast.current.temp}°C</h1>
        </div>
        <div className={styles.forecastDetails}>
          <div className={styles.forecastDetailsItem}>
            <img src="https://cdn-icons-png.flaticon.com/128/4735/4735107.png" />
            <p>Feels like: </p>
            <p>{dailyForecast.current.feels_like}°C</p>
          </div>
          <div className={styles.forecastDetailsItem}>
            <img src="https://cdn-icons-png.flaticon.com/128/4735/4735092.png" />
            <p>Humidity: </p>
            <p>{dailyForecast.current.humidity}%</p>
          </div>
          <div className={styles.forecastDetailsItem}>
            <img src="https://cdn-icons-png.flaticon.com/128/4735/4735030.png" />
            <p>Visibility: </p>
            <p>{dailyForecast.current.visibility}m</p>
          </div>
          <div className={styles.forecastDetailsItem}>
            <img src="https://cdn-icons-png.flaticon.com/128/4735/4735137.png" />
            <p>Wind:</p>
            <p>{dailyForecast.current.wind_speed}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
