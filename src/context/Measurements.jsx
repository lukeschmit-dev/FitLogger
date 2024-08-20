import React, { createContext, useContext, useState } from 'react';


export const measurementContext = createContext(null)



export function MeasurementProvider({children}){
    const [measurement, setMeasurement] = useState("Imperial") //default to freedom units
    console.log("current measurement: ", measurement)
    return (
        <measurementContext.Provider value={{measurement, setMeasurement}}>
            {children}
        </measurementContext.Provider>
    )
}

export function useMeasurement(){
    return useContext(measurementContext)
}
