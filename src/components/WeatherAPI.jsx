import wind_img from "../assets/wind.svg";
import humid_img from "../assets/humid.svg";
import pressure_img from "../assets/barometer.svg";
import WeatherIcon from "./Imgs.jsx";

import React, { useState, useEffect } from 'react';

const weatherData = () => {
  const [data, setData] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "e036ab7ea3msheb55e38c7173492p17711djsn39ad29f293cd");
  myHeaders.append("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const baseURL = "https://weatherapi-com.p.rapidapi.com/current.json";
  const query = "?q=";
  const ip = "210.212.183.2";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL + query + ip, requestOptions);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(data);
  const loc = data["location"];
  const curr = data["current"];
  // console.log(loc);
  // console.log(curr);

  //get date and date;
  const currentDate = new Date();
  let hour = currentDate.getHours();
  let min = currentDate.getMinutes();
  let day = currentDate.getDay();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const description = (curr ? curr["condition"].text : null);
  const isDay = (curr ? curr.is_day : null)? "Morning" :"Night";
  const code = (curr ? curr["condition"].code : null);

  const windSpeed = (curr ? curr.wind_kph : null);
  const humidity = (curr ? curr.humidity : null);
  const pressure = (curr ? curr.pressure_mb : null);

  const icon = WeatherIcon({code:code? code : 1000, isday:isDay });










  
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <p className=" uppercase font-semibold mt-4 ">{daysOfWeek[day]} {hour}:{min < 10 ? min = "0" + min : min}</p>
      <p className=" text-3xl font-light uppercase hover:underline underline-offset-8 decoration-sky-500 transition ease-in-out">{loc ? loc.name : null}</p>


          <span className="flex justify-around">
            <img src={icon} className="w-80 hover:translate-y-1 transition ease-in duration-800"/>
          </span>
          <p className=" font-normal text-lg text-sky-300 hover:text-gray-50 transition ease-in-out duration-300">{description}</p>
          
          <p className=" uppercase font-normal text-6xl m-8 drop-shadow-[0px_0px_15px_rgba(255,190,111,0.5)] hover:drop-shadow-[0px_0px_80px_rgba(255,255,255,0.5)] transition ease-in-out duration-1200">
            {curr ? curr.temp_c : null}  {"\u00B0"}
          </p>
        
          {/* <p className=" font-normal mb-4">Good {isDay}</p> */}

          <div className="flex justify-around h-36 max-w-md w-3/4">

            <div className="flex flex-col justify-around hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,0.5)] transition ease-in-out duration-300">
              <img src={wind_img} alt="wind" />
              <div className="flex flex-col items-center">
                <p>{windSpeed} KPH</p>
                <p className="text-slate-500 text-sm">Wind</p>
              </div>
            </div>

            <div className="flex flex-col justify-around hover:drop-shadow-[0px_0px_20px_rgba(98,160,234,0.5)] transition ease-in-out duration-300">
              <img src={pressure_img} alt="pressure img" className=""/>
              <div className="flex flex-col items-center">
                <p>{pressure} mbar</p>
                <p className="text-slate-500 text-sm">Pressure</p>
              </div>
            </div>

            <div className="flex flex-col justify-around hover:drop-shadow-[0px_0px_20px_rgba(28,113,216,0.5)] transition ease-in-out duration-300">
              <img src={humid_img} alt="wind" />
              <div className="flex flex-col items-center">
                <p>{humidity} %</p>
                <p className="text-slate-500 text-sm">Humidity</p> 
              </div>
            </div>

          </div>
    </div>
  );
};

export default weatherData;