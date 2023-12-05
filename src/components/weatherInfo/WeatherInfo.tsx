import location from "../../assets/interfaceIcons/location.svg";
import temperature from "../../assets/interfaceIcons/temperature.svg";

interface WIProps {
  weather: any;
}

export const WeatherInfo = ({ weather }: WIProps) => {
  return (
    <>
      {weather.city.length != 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            backgroundColor: "black",
            borderRadius: "10px",
            width: "700px",
            margin: "0 auto",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <img src={location} alt="" style={{ width: "50px" }} />
            <p style={{ fontSize: "20px" }}>
              {weather.city}, {weather.country}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <img src={temperature} alt="" />
            <p style={{ fontSize: "20px" }}>
              {weather.celcius}°C, {weather.fahrenheit}°F
            </p>
            <img src={weather.img} alt="" />
            <p style={{ fontSize: "20px" }}>{weather.condition}</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          ></div>
        </div>
      )}
    </>
  );
};
