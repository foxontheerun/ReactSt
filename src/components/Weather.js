import React from "react";

const Weather = props => (
	<div className="weather__info">
	 { 	
	 	props.temperature && <p className="weather__key"> Температура: 
	 		<span className="weather__value"> { props.temperature }	C</span>
	 	</p> 
	 }
	</div>
);

export default Weather;