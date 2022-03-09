import React, { useState } from 'react'
import video from '../styles/assets/video/clouds.mp4'
import Card from './card'

const Hero = () => {
	const [city, setCity] = useState('')
	const apiKey = 'e1cfcb68dedfb5eecbf214bf2b358f23'
	let lat = ''
	let lon = ''
	const [town, setTown] = useState({})
	// let town = {}
	const [showCard, setShowCard] = useState(false)
	const fetchApi = () => {
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
		)
			.then((res) => res.json())
			.then((result) => {
				lat = result[0].lat
				lon = result[0].lon
				return fetch(
					`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${apiKey}`
				)
			})
			.then((data) => data.json())
			.then((res) => {
				console.log(res)
				setTown({
					temp: Math.trunc(res.main.temp),
					desc: res.weather[0].description,
					icon: res.weather[0].icon,
				})

				console.log(town)
			})
			.catch((error) => console.log(error))
	}

	return (
		<div className="hero">
			<video loop muted autoPlay>
				<source src={video} type="video/mp4" />
			</video>
			<div className="overlay">
				<form
					onSubmit={(e) => {
						e.preventDefault()
						fetchApi()
						setShowCard(true)
					}}
				>
					<input
						type="text"
						placeholder="Quel temps à... ?"
						onChange={(e) => setCity(e.target.value)}
					/>
				</form>
				{showCard ? <Card city={town} /> : ''}
			</div>
		</div>
	)
}

export default Hero
