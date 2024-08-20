import React, {useContext} from 'react'
import { useMeasurement } from '../context/Measurements'

export function UnitCalc(_type){
    const measurement = useMeasurement().measurement;
    let type;
    console.log("detected measurement - ", measurement)

    switch (_type) {
        case "weight":
          type = measurement === "Imperial" ? "lbs" : "kg";
          break;
        case "dist":
          type = measurement === "Imperial" ? "miles" : "km";
          break;
        case "distSmall":
          type = measurement === "Imperial" ? "in" : "cm";
          break;
        case "liquid":
          type = measurement === "Imperial" ? "gal" : "l";
          break;
        default:
          type = measurement === "Imperial" ? "unknown" : "unknown";
      }
  
    return type
  }