import React, {useState, useEffect} from 'react';

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [selectedCity,setSelectedCity] = useState("Moscow")

    useEffect(() => {
        const fetchWeather = async () => {
            const linkWeather = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
            try {
                const result = await fetch(linkWeather);
                const data = await result.json();
                setWeatherData(data);
            } catch (error) {
                console.log("Error while message", error.message);
            }
        };

        fetchWeather();
    }, [selectedCity]);

    const handleCityChange = e => {
        setSelectedCity(e.target.value)
    }

    let option = new Option("text","value")





    return (
        <div className="WeatherWrapper">
            <form className="TodoForm">
                <select
                    className="cities"
                    id="cities"
                    size="1"
                    onChange={handleCityChange}
                    value={selectedCity}
                >
                    <option value="Moscow">Москва</option>
                    <option value="Vladivostok">Владивосток</option>
                    <option value="Volgograd">Волгоград</option>
                    <option value="Kolomna">Коломна</option>
                    <option value="Krasnodar">Краснодар</option>
                    <option value="Paris">Париж</option>
                </select>

            </form>
            <h2>Weather in {selectedCity}:</h2>
            {weatherData ? (
                <div>
                    <p> {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather;