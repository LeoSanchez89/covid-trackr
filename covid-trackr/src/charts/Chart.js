import React, {useState} from "react";
import { Card, Button, CardTitle, CardText, CardFooter } from "reactstrap";
import { Map as LeafMap, TileLayer } from "react-leaflet";


function Chart({ global, countries }) {
	// console.log(countries[179]);
	// countries.map(country => {
	//     console.log(`${country.Country}, Total Deaths: ${country.TotalDeaths}` )
	// })
	const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
	const [zoom, setZoom] = useState(5);

	const center = [position.lat, position.lng]

	console.log(center);
	return (
		<section>
			<div class="card-wrapper">
				<Card class="cases-card" id="new-cases">
					<CardTitle>
						<h2>New Cases</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "darkorange" }}>+{global.NewConfirmed}</h3>
					</CardText>
					<CardFooter>Total: {global.TotalConfirmed}</CardFooter>
				</Card>
				<Card class="cases-card" id="new-deaths">
					<CardTitle>
						<h2>Deaths</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "red" }}>+{global.NewDeaths}</h3>
					</CardText>
					<CardFooter>Total: {global.TotalDeaths}</CardFooter>
				</Card>
				<Card class="cases-card" id="new-recovered">
					<CardTitle>
						<h2>Recovered</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "limegreen" }}>+{global.NewRecovered}</h3>
					</CardText>
					<CardFooter>Total: {global.TotalRecovered}</CardFooter>
				</Card>
			</div>
			<div id="map">
				<LeafMap center={center} zoom={zoom}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
				</LeafMap>
			</div>
		</section>
	);
}

export default Chart;
