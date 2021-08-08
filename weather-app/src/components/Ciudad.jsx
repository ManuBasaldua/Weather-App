import React from "react";
import './Ciudad.css';


export default function Ciudad({city}) {
    if(city){

    
    return (
        <div className="card city">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
            
           
            
            
        </div>
    )}
    else{
        return(
            <div>No existe la ciudad</div>
        )
    }
}