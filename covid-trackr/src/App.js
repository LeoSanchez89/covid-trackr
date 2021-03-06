import React, { useState, useEffect } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Chart from "./charts/Chart";
import LineGraph from "./charts/LineGraph";
import axios from "axios";
import ParticlesBg from "particles-bg";
import Icon from "./charts/icon";

function App() {
	const [global, setGlobal] = useState({});
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState("Global");


	let config = {
		num: [4, 7],
		rps: 1,
		radius: [5, 55],
		life:  [1.5,5],
		v: 1,
		tha: [-40, 40],
		alpha: [.8, .2],
		scale: [.03, .07],
		body: Icon,
		position: "all",
		// color: "random",
		cross: "dead",
		random: 16,
	};

	useEffect(() => {
		axios
			.get("https://api.covid19api.com/summary")
			.then((res) => {
				// console.log("response", res.data);
				setGlobal(res.data.Global);
				setCountries(res.data.Countries);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);



	return (
		<div className="App">
			{/* <ParticlesBg type="custom" config={config} bg={true} /> */}
			<h1>Daily Covid Trackr</h1>
			<Chart global={global} countries={countries} country={country} />
			<LineGraph countries={countries} country={country} setCountry={setCountry}></LineGraph>
		</div>
	);
}

export default App;
