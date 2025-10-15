import React from 'react'

const WeatherCard = ({ data }) => {
  const { location, current } = data

  return (
    <div
      style={{
        background: '#f4f4f4',
        padding: '20px',
        borderRadius: '12px',
        width: '250px',
        margin: '0 auto',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h3>{location.name}, {location.country}</h3>
      <p>🌡️ Temperature: {current.temp_c}°C</p>
      <p>💨 Wind: {current.wind_kph} km/h</p>
      <p>☁️ Condition: {current.condition.text}</p>
      <img src={current.condition.icon} alt='weather-icon' />
    </div>
  )
}

export default WeatherCard
