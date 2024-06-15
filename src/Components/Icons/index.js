import { useState, useEffect } from "react";
import Clear from "../../Assets/Icons/sun.png";
import Fog from "../../Assets/Icons/fog (1).png";
import Rain from "../../Assets/Icons/rain.png";
import Snow from "../../Assets/Icons/snow.png";
import Strom from "../../Assets/Icons/storm.png";
import Wind from "../../Assets/Icons/windy.png";
import Clouds from "../../Assets/Icons/cloud.png";
import Haze from '../../Assets/Icons/fog (2).png'

const Icons = ({ weatherData }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (weatherData && weatherData.weather && weatherData.weather[0]) {
      switch (weatherData.weather[0].main) {
        case "Clouds":
          setIcon(Clouds);
          break;
        case "Rain":
          setIcon(Rain);
          break;
        case "Snow":
          setIcon(Snow);
          break;
        case "Wind":
          setIcon(Wind);
          break;
        case "Clear":
          setIcon(Clear);
          break;
        case "Fog":
          setIcon(Fog);
          break;
        case "Strom":
          setIcon(Strom);
          break;
          case 'Haze':
            setIcon(Haze)
            break;
        default:
          setIcon(null);
      }
    }
  }, [weatherData]);
  return <img src={icon} alt="weather" className="icon" />;
};

export default Icons;
