import { useEffect, useState } from 'react';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const App = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputBox, setInputBox] = useState('')

  const today = new Date();
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  const fetchAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(`HTTP error! ${response.status}`)
      }

      setWeatherData(data)
      setError(null)

    } catch (err) {
      console.error('Error fetching data:', err);
      setWeatherData(null)
      setError(err.message)
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [city])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setCity(e.target.value.trim());
      setInputBox('')
    }
  };

  const handleValue = (e) => {
    setInputBox(e.target.value)
  }
  return (
    <>

      <div className="weather-card">
        <input
          type="text"
          placeholder="Enter City!"
          onKeyDown={handleKeyDown}
          className="city-input"
          onChange={handleValue}
          value={inputBox}
        />


        {loading && <span className="loader"></span>}
        {error && <p className="error-message">Error: {error}</p>}

        {weatherData && !loading && !error && (
          <>
            <div className="location">{weatherData.name}</div>
            <div className="date">
              {`${dayNames[today.getDay()]} ${monthNames[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`}
            </div>

            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="weather-icon"
            />

            <div className="temp">
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div className="description">
              {weatherData.weather[0].description}
            </div>

            <div className="weather-details">
              <div className="detail">
                💧 Humidity: {weatherData.main.humidity ?? "N/A"}%
              </div>
              <div className="detail">
                🌬 Wind: {weatherData.wind.speed} m/s
              </div>
              <div className="detail">
                Minimum Temp: {Math.round(weatherData.main.temp_min)}°C
              </div>
              <div className="detail">
                Maximum Temp: {Math.round(weatherData.main.temp_max)}°C
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
