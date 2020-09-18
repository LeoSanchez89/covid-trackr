import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, CardTitle, CardText, CardFooter } from "reactstrap";
import { Map as LeafMap, TileLayer } from "react-leaflet";


function Chart({ global, countries, country }) {

	const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
	const [zoom, setZoom] = useState(5);
	
	const cardData = {
		NewConfirmed: global.NewConfirmed,
		TotalConfirmed: global.TotalConfirmed,
		NewDeaths: global.NewDeaths,
		TotalDeaths: global.TotalDeaths,
		NewRecovered: global.NewRecovered,
		TotalRecovered: global.TotalRecovered,
	};
	
	const center = [position.lat, position.lng]
	// const [cardData, setCardData] = useState(initialData);

	// useEffect(() => {
	// 	countries.map(item => {
	// 		if (item.Country === country) {
	// 			cardData.NewConfirmed = item.NewConfirmed;
	// 			cardData.TotalConfirmed = item.TotalConfirmed;
	// 			cardData.NewDeaths = item.NewDeaths;
	// 			cardData.TotalDeaths = item.TotalDeaths;
	// 			cardData.NewRecovered = item.NewRecovered;
	// 			cardData.TotalRecovered = item.TotalRecovered;
	// 		}
	// 	});
	// }, [country]);

	// console.log(country, cardData)
	
	return (
		<section>
			<div className="card-wrapper">
				<Card className="cases-card" id="new-cases">
					<CardTitle>
						<h2>New Cases</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "darkorange" }}>+{cardData.NewConfirmed}</h3>
					</CardText>
					<CardFooter>Total: {cardData.TotalConfirmed}</CardFooter>
				</Card>
				<Card className="cases-card" id="new-deaths">
					<CardTitle>
						<h2>Deaths</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "red" }}>+{cardData.NewDeaths}</h3>
					</CardText>
					<CardFooter>Total: {cardData.TotalDeaths}</CardFooter>
				</Card>
				<Card className="cases-card" id="new-recovered">
					<CardTitle>
						<h2>Recovered</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "limegreen" }}>+{cardData.NewRecovered}</h3>
					</CardText>
					<CardFooter>Total: {cardData.TotalRecovered}</CardFooter>
				</Card>
			</div>
			{/* <div id="map">
				<LeafMap center={center} zoom={zoom}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
				</LeafMap>
			</div> */}
		</section>
	);
}

export default Chart;
