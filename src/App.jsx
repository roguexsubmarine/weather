import WeatherAPI from "./components/WeatherAPI.jsx";


export function App() {


  return (
    <>   
      <div className="text-gray-200 flex flex-col items-center"  >
        <div className="min-h-screen min-v-screen w-full md:w-2/3 lg:w-1/2" >
          <WeatherAPI/>
        </div>
      </div>
      

    </>
  )
}

export default App;
