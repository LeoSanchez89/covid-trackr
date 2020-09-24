import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line, defaults } from "react-chartjs-2";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

defaults.global.defaultFontStyle = "bold";
defaults.global.defaultFontColor = "white";

function LineGraph({ countries, country, setCountry }) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const [countryData, setCountryData] = useState();

	useEffect(() => {
		if (country !== "Global") {
			axios
			.get(`https://api.covid19api.com/total/dayone/country/${country}`)
			.then((res) => {
				// console.log("response", res.data);
				setCountryData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}, [country]);

	const convertMonth = {
		"01": "Jan",
		"02": "Feb",
		"03": "Mar",
		"04": "Apr",
		"05": "May",
		"06": "Jun",
		"07": "Jul",
		"08": "Aug",
		"09": "Sep",
		"10": "Oct",
		"11": "Nov",
		"12": "Dec",
	};

	// Creates array for selected country from 1st of every Month with cases
	const history = [];

	countryData &&
		countryData.map((item) => {
			if (item.Date.slice(8, 10) === "01"){
				history.push(item);
			} 
		});
	

	// Creates Data for selected Country to fill in Graph
	const graphMonth = [];
	const infected = [];
	const deaths = [];
	const recovered = [];

	history && history.map((item) => {
		graphMonth.push(convertMonth[item.Date.slice(5, 7)]);
		infected.push(item.Confirmed);
		deaths.push(item.Deaths);
		recovered.push(item.Recovered);
	});

	const data = {
		labels: graphMonth,
		datasets: [
			{
				label: "Infected",
				fill: false,
				lineTension: 0.05,
				backgroundColor: "darkorange",
				borderColor: "darkorange",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "darkorange",
				pointBackgroundColor: "darkorange",
				pointBorderWidth: 0,
				pointHoverRadius: 8,
				pointHoverBackgroundColor: "white",
				pointHoverBorderColor: "dakorange",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 80,
				data: infected,
			},
			{
				label: "Deaths",
				fill: false,
				lineTension: 0.05,
				backgroundColor: "red",
				borderColor: "red",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "red",
				pointBackgroundColor: "red",
				pointBorderWidth: 0,
				pointHoverRadius: 8,
				pointHoverBackgroundColor: "white",
				pointHoverBorderColor: "red",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 80,
				data: deaths,
			},
			{
				label: "Recovered",
				fill: false,
				lineTension: 0.05,
				backgroundColor: "limegreen",
				borderColor: "limegreen",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "limegreen",
				pointBackgroundColor: "limegreen",
				pointBorderWidth: 0,
				pointHoverRadius: 8,
				pointHoverBackgroundColor: "white",
				pointHoverBorderColor: "limegreen",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 80,
				data: recovered,
			},
		],
	};
	return (
		<section>
			<h2>{country}</h2>
			<Dropdown isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>Select Country</DropdownToggle>
				<DropdownMenu>
					{countries.map((item) => {
						return (
							<DropdownItem
								key={item.Country}
								onClick={() => setCountry(item.Country)}
							>
								{item.Country}
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
			<Line
				data={data}
				height={120}
				options={{
					legend: {
						labels: {
							fontSize: 14,
							fontStyle: "bold",
						},
					},
				}}
				id="line-graph"
			/>
		</section>
	);
}

export default LineGraph;
