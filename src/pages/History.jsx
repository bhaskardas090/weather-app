import React, { useState, useEffect } from 'react';
import styles from './History.module.scss';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useHistoryForecast from '../hooks/useHistoryForecast';
import useGeolocation from '../hooks/useGeolocation';
function History() {
  const { data: historyForecast, handleDateChange } = useHistoryForecast();
  const { geoLocationData } = useGeolocation();

  console.log(geoLocationData);
  return (
    <div className={styles.historyForecast}>
      {
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Pick Any Historical Date to View Forecast"
              onChange={(e) =>
                handleDateChange(e, geoLocationData.lat, geoLocationData.lon)
              }
              sx={{ width: '90%', maxWidth: '800px', margin: 'auto' }}
              disableFuture
            />
          </DemoContainer>
        </LocalizationProvider>
      }
      {historyForecast?.data ? (
        <div className={styles.container}>
          <div className={styles.currentTemp}>
            <img src="https://cdn-icons-png.flaticon.com/128/4629/4629161.png" />
            <h1>{historyForecast?.data[0]?.temp}°C</h1>
          </div>
          <div className={styles.forecastDetails}>
            <div className={styles.forecastDetailsItem}>
              <img src="https://cdn-icons-png.flaticon.com/128/4629/4629096.png" />
              <p>Feels like: </p>
              <p>{historyForecast?.data[0]?.feels_like}°C</p>
            </div>
            <div className={styles.forecastDetailsItem}>
              <img src="https://cdn-icons-png.flaticon.com/128/4629/4629152.png" />
              <p>Humidity: </p>
              <p>{historyForecast?.data[0]?.humidity}%</p>
            </div>
            <div className={styles.forecastDetailsItem}>
              <img src="https://cdn-icons-png.flaticon.com/128/4629/4629175.png" />
              <p>Visibility: </p>
              <p>{historyForecast?.data[0]?.visibility}m</p>
            </div>
            <div className={styles.forecastDetailsItem}>
              <img src="https://cdn-icons-png.flaticon.com/128/4629/4629202.png" />
              <p>Wind:</p>
              <p>{historyForecast?.data[0]?.wind_speed}km/h</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: '70vh', textAlign: 'center', paddingTop: '3rem' }}
        >
          <img src="https://cdn-icons-png.flaticon.com/128/6975/6975188.png" />
          <h3 style={{ marginTop: '1rem' }}>Select a Date to View Forecast</h3>
        </div>
      )}
    </div>
  );
}

export default History;
