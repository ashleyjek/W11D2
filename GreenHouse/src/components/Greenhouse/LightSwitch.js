import './LightSwitch.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


function LightSwitch() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  const handleClick = (field) => {
    return (e) => {
      if (field === "on") {
        setThemeName("day");
    } else {
      setThemeName("night");
    }};
  }

  return (
      <div className={`light-switch ${themeName}`}>
        <div className="on" onClick={handleClick("on")}>DAY</div>
      <div className="off" onClick={handleClick("off")}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;