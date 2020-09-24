import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, CardTitle, CardText, CardFooter } from "reactstrap";
import { Map as LeafMap, TileLayer } from "react-leaflet";


function Chart({ global, countries, country }) {

	const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
	const [zoom, setZoom] = useState(5);
	
	// const initialData = {
	// 	NewConfirmed: global.NewConfirmed,
	// 	TotalConfirmed: global.TotalConfirmed,
	// 	NewDeaths: global.NewDeaths,
	// 	TotalDeaths: global.TotalDeaths,
	// 	NewRecovered: global.NewRecovered,
	// 	TotalRecovered: global.TotalRecovered,
	// };
	
	const center = [position.lat, position.lng]
	const [cardData, setCardData] = useState();

	useEffect(() => {
		countries.map(item => {
			if (item.Country === country) {
				setCardData(item);
			}
		});
	}, [country]);

	return (
		<section>
			<div className="card-wrapper">
				<Card className="cases-card" id="new-cases">
					<CardTitle>
						<h2>New Cases</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "darkorange" }}>
							+{cardData ? cardData.NewConfirmed : global.NewConfirmed}
						</h3>
					</CardText>
					<CardFooter>
						Total: {cardData ? cardData.TotalConfirmed : global.TotalConfirmed}
					</CardFooter>
				</Card>
				<Card className="cases-card" id="new-deaths">
					<CardTitle>
						<h2>Deaths</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "red" }}>
							+{cardData ? cardData.NewDeaths : global.NewDeaths}
						</h3>
					</CardText>
					<CardFooter>
						Total: {cardData ? cardData.TotalDeaths : global.TotalDeaths}
					</CardFooter>
				</Card>
				<Card className="cases-card" id="new-recovered">
					<CardTitle>
						<h2>Recovered</h2>
					</CardTitle>
					<CardText>
						<h3 style={{ color: "limegreen" }}>
							+{cardData ? cardData.NewRecovered : global.NewRecovered}
						</h3>
					</CardText>
					<CardFooter>
						Total: {cardData ? cardData.TotalRecovered : global.TotalRecovered}
					</CardFooter>
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
