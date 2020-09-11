import React from "react";

function Chart({ global, countries }) {
    // console.log(countries[179]);
    // countries.map(country => {
    //     console.log(`${country.Country}, Total Deaths: ${country.TotalDeaths}` )
    // })

	return (
		<div>
			<h2>
				Global Total <span style={{ color: "gold" }}>Confirmed</span> Cases:{" "}
				{global.TotalConfirmed}
			</h2>
			<h2>
				Global Total <span style={{ color: "red" }}>Deaths</span>:{" "}
				{global.TotalDeaths}
			</h2>
			<h2>
				Global Total <span style={{ color: "limegreen" }}>Recovered</span>:{" "}
				{global.TotalRecovered}
			</h2>
		</div>
	);
}

export default Chart;
