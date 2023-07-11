import ReactSlider from "react-slider";
import './Thermometer.css';
import { ClimateContext } from "../../context/ClimateContext";
import { useContext, useEffect, useState } from "react";

function Thermometer() {
  const { temp, setTemp } = useContext(ClimateContext);
  const [ desireTemp, setDesireTemp ] = useState(temp);
  
  useEffect(() => {
    if (temp < desireTemp) {
      setTimeout(() => {
        setTemp(temp + 1)
      }, 1000);
    } else if (temp > desireTemp) {
      setTimeout(() => {
        setTemp(temp - 1)
      }, 1000);
    }
  }, [desireTemp, temp]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={desireTemp}
        onAfterChange={(val) => setDesireTemp(val) }
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;