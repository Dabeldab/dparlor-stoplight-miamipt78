import React, {useState}  from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./Trafficlight";
let light = ['red','green','yellow']

//create your first component
const Home = () => {
	return (
		<>
		<TrafficLight/>
		</>
	);
};


export default Home;