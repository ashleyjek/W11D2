import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useContext, useEffect, useState } from "react";
import { ClimateContext } from "../../context/ClimateContext";

function Hygrometer() {
  const { hum, setHum } = useContext(ClimateContext);
  const [ desireHum, setDesireHum ] = useState(hum);
  
  useEffect(() => {
    if (hum < desireHum) {
      setTimeout(() => {
        setHum(hum + 2)
      }, 1000);
    } else if (hum > desireHum) {
      setTimeout(() => {
        setHum(hum - 2)
      }, 1000);
    }
  }, [desireHum, hum]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {hum}%</div>
      <ReactSlider
        value={desireHum}
        onAfterChange={(val) => setDesireHum(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;