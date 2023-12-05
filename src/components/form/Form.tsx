import { useState } from "react";
import { getWeather } from "../../api/getWeather";
import search from "../../assets/interfaceIcons/search.svg";

interface FormProps {
  weather: any;
  onWeather: (data: any) => void;
  onError: (data: any) => void;
}

export const Form = ({ weather, onWeather, onError }: FormProps) => {
  const [value, setValue] = useState("");

  const onChange = (e:any) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setValue("");
        value.length != 0
          ? getWeather(value)
              .then((response) => onWeather(response))
              .catch((err) => onError(err))
          : null;
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={search}
          alt=""
          style={{
            width: "25px",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={
            weather.error === 400 ? "Wrong enter!" : "Search location"
          }
          style={{
            outline: "none",
            fontSize: "20px",
            borderRadius: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "40px",
            marginBottom: "20px",
            borderColor:'black'
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          fontSize: "20px",
          color: "white",
          backgroundColor: "black",
          borderRadius: "10px",
          border: "none",
          padding: "18px 0",
          width: "200px",
          cursor: "pointer",
        }}
      >
        Get weather
      </button>
    </form>
  );
};
