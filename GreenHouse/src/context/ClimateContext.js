// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import {createContext, useContext, useState } from "react"

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export const ClimateProvider = props => {
    const [temp, setTemp] = useState(50);
    const [hum, setHum] = useState(40);
    
    return(
        <ClimateContext.Provider value={{ temp, setTemp, hum, setHum}}>
            {props.children}
        </ClimateContext.Provider>
    );
};
