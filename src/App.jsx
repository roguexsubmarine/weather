import WeatherAPI from "./components/WeatherAPI";


export function App() {


  return (
    <>   

      <div className="min-h-screen bg-gray-200 flex justify-center dark:text-gray-200">
        <div id="body" className="min-h-screen bg-[#EEEEEE] dark:bg-[#222831] flex flex-col items-center w-full md:w-2/3 lg:w-1/2 mt-12 pt-4 rounded-t-lg" >
          <WeatherAPI />
        </div>
      </div>

      
    </>
  )
}

export default App;
