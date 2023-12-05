import axios from "../../node_modules/axios/index";

export async function getWeather(location: string) {
  const apiKey = "5693eb9ece9e4f5cafd193909232011";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  const { data } = await axios.get(apiUrl);
  return data;
}
