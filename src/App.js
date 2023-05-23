import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [weather, setWeather] = useState(0);
  var dat;
  async function getWeather() {

    dat = await axios.get('https://ipwho.is').then(res => dat = res.data.city).catch(err => console.log(err));
    console.log(dat);
    let x;
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dat}&appid=def17f16a0736a8ee47c5fa01f45a5f3&units=metric`).then(res => x = res.data.main.temp).catch(err => console.log(err))
    console.log(x);

    setWeather(x);
  }

  // useEffect(() => {
  //   getWeather();

  // }, [dat])


  return (
    <div className="App">
      <h1>this is testing </h1>
      <button onClick={getWeather} className="bg-indigo-800 text-4xl m-4 p-4 text-white">Get Weather</button>
      <h1>weather is {weather}</h1>
    </div>
  );
}

export default App;


