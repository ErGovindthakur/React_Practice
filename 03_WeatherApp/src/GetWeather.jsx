import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'

const GetWeather = () => {
     const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
     console.log(apiKey); // Will print your key


  const [weatherLocation, setWeatherLocation] = useState('Delhi')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const findWeather = async (city) => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`
      )
      const data = await res.json()

      if (data.error) {
        throw new Error(data.error.message)
      }

      setWeatherData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (weatherLocation.trim() !== '') {
      findWeather(weatherLocation)
    }
  }

  // Fetch default city weather once
  useEffect(() => {
    findWeather('Delhi')
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>🌤️ Weather App</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type='text'
          placeholder='Enter your city'
          value={weatherLocation}
          onChange={(e) => setWeatherLocation(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type='submit' style={{ padding: '8px 16px' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading weather...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  )
}

export default GetWeather
