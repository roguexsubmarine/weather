import sun_cloud from "../assets/sun-cloud.svg";

export default function WeatherAPI(){
  const myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "e036ab7ea3msheb55e38c7173492p17711djsn39ad29f293cd");
  myHeaders.append("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const data = fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=210.212.183.2", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  const loc = data.location;

  console.log(data["location"]);


  
  return (
    <>
      <p className=" text-3xl font-light uppercase mt-4">{data[0]}</p>
          <p className=" uppercase font-normal text-lg">monday 730 pm</p>

          

          <p className=" uppercase font-normal text-8xl">20 C</p>
          <p className=" font-normal text-lg">Good Night</p>

          <div className="flex justify-around w-3/4 ">
            <div className="flex flex-col">
              <img src={sun_cloud} alt="sun cloud" />
              <p>sunset</p>
              <p>time</p>
            </div>

            <div className="flex flex-col">
              <p>icon</p>
              <p>sunset</p>
              <p>time</p>
            </div>

            <div className="flex flex-col">
              <p>icon</p>
              <p>sunset</p>
              <p>time</p>
            </div>

          </div>
    </>
  );

}