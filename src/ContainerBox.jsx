import { useEffect, useRef, useState } from "react"

export default function ContainerBox({ getWeather }) {

    // const ref = useRef();
    let city;

    const getCity = (e) => {
        city = e.target.value;
        console.log(city);
    }

    //     useEffect(() => {
    // getCity()
    //     })

    return (
        <>
            <div className="w-1/2 ml-auto mr-auto mt-[10%]">
                <div className="text-center">
                    <label className="text-4xl text-white">
                        <input type="text" onChange={getCity} className="w-full h-16 bg-yellow-200 rounded mb-8 text-gray-700 focus:outline-none" /> <br />
                        Enter City name to check the weather
                    </label>
                </div>
                <button onClick={() => getWeather(city)} className="bg-lime-400 rounded text-4xl m-4 p-4 text-gray-700 ml-[35%] mt-12">Get Weather</button>
            </div>
        </>
    )
}