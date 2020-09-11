import React, { useState, useEffect } from "react";
import "./App.css";
import Chart from "./charts/Chart";
import axios from "axios";

function App() {
	const [global, setGlobal] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
			.get("https://api.covid19api.com/summary")
			.then((res) => {
				// console.log("response", res.data);
        setGlobal(res.data.Global);
        setCountries(res.data.Countries)
			})
			.catch((err) => {
				console.log(err);
			});
  },[])
	
	return (
		<div className="App">
			<h1>Daily Covid Trackr</h1>
      <Chart global={global} countries={countries}/>
		</div>
	);
}

export default App;
