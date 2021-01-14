import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Details() {
	let params = useLocation();
	console.log(params.state.dataObj.name);
	console.log(params.state.dataObj.nasa_jpl_url);
	console.log(params.state.dataObj.is_potentially_hazardous_asteroid);
	return (
		<div>
			<p>Name: {params.state.dataObj.name}</p>
			<p>Nasa jpl url: {params.state.dataObj.nasa_jpl_url}</p>
			<p>Is potentially hazardous asteroid: {params.state.dataObj.is_potentially_hazardous_asteroid ? 'True':'False'}</p>
		</div>
	) 
}