import React from 'react'

const card = (props) => {
	return (
		<div className="card">
			<img
				src={`http://openweathermap.org/img/wn/${props.city.icon}@4x.png`}
				alt="Icone de météo"
			/>
			<div className="right-column">
				<p className="temperature">{props.city.temp}°C</p>
				<p>{props.city.desc}</p>
			</div>
		</div>
	)
}

export default card
