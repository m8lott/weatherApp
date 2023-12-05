import { useState } from "react"
import { Form } from "./components/form/Form"
import { WeatherInfo } from "./components/weatherInfo/WeatherInfo"

function App() {
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    celcius: 0,
    fahrenheit: 0,
    condition: "",
    img:null,
    error: "",
  });

  const onWeather = (data: any) => {
    setWeather(
      (_prev) =>
        (_prev = {
          error: "",
          city: data.location.name,
          country: data.location.country,
          celcius: data.current.temp_c,
          fahrenheit: data.current.temp_f,
          condition: data.current.condition.text,
          img: data.current.condition.icon,
        })
    );
  };

  const onWeatherError = (error: any) => {
    weather.error == ""
      ? setWeather({ ...weather, error: error.response.status })
      : setWeather({ ...weather, error: "" });
  };

  return (
    <>
      <Form weather={weather} onWeather={onWeather} onError={onWeatherError} />
      <WeatherInfo weather={weather} />
    </>
  );
}

export default App;
