import axios from "axios";
import { useState } from "react";
import ContainerBox from "./ContainerBox";
import { MyContext } from "./MyContext";


function App() {

  const [weather, setWeather] = useState(null);
  const [text, setText] = useState('')
  // let dat;
  let y;

  async function getWeather(cityData) {

    // dat = await axios.get('https://ipwho.is').then(res => dat = res.data.city).catch(err => console.log(err));
    // console.log(dat);
    let x;
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=def17f16a0736a8ee47c5fa01f45a5f3&units=metric`).then(res => {x = res.data.main.temp; y = res.data.weather[0].description; }).catch(err => console.log(err))
    console.log(x);
    console.log(y)
    setWeather(x);
  }

  // useEffect(() => {
  //   getWeather();

  // }, [dat])


  return (
    <div className="App">
      <MyContext.Provider value={{text , setText}}>
      <ContainerBox getWeather={getWeather} />
      <h1 className="text-4xl text-white m-auto">weather is {weather}</h1>
      <p>{y}</p>

      </MyContext.Provider>
    </div>
  );
}

export default App;


