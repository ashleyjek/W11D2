import './ClimateStats.css';
import { ClimateContext } from "../../context/ClimateContext";
import { useContext } from "react";

function ClimateStats() {
  const { temp, setTemp, hum, setHum } = useContext(ClimateContext);

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {hum}%
      </div>
    </div>
  )
}

export default ClimateStats;