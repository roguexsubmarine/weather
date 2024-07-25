import sun_cloud from "../assets/sun-cloud.svg";

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








  
  return (
    <>
      <p className=" text-3xl font-light uppercase mt-4">{loc ? loc.name : null}</p>
          <p className=" uppercase font-semibold">{daysOfWeek[day]} {hour}:{min < 10 ? min = "0" + min : min}</p>

          <p className=" uppercase font-normal text-8xl">{curr ? curr.temp_c : null} {"\u00B0C"}</p>
          <p className=" font-normal text-lg">{description} code {code}</p>

          <p className=" font-normal text-lg">Good {isDay}</p>

          <div className="flex justify-around w-3/4 ">
            <div className="flex flex-col">
              <img src={sun_cloud} alt="sun cloud" />
              <p>Wind</p>
              <p>{windSpeed} KPH</p>
            </div>

            <div className="flex flex-col">
              <p>icon</p>
              <p>Humidity</p>
              <p>{humidity} %</p>
            </div>

            <div className="flex flex-col">
              <p>icon</p>
              <p>Pressure</p>
              <p>{pressure} mbar</p>
            </div>

          </div>
    </>
  );
};

export default weatherData;