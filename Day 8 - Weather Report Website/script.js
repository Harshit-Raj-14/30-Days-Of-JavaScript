/*Notes */
/* 
Extension to downlaod for the project
RapidAPI client
*/


// Weather by API-Ninjas - JS fetch code //

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21d9469cf2mshd4d7d57be4b5727p10aa96jsn1acf1c1bd251',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		cloud_pct2.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		//wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) =>{		//submit is the id of submit button
	e.preventDefault()		//to stop form our page reloading everytime we search and not get delhi as deafult value
	getWeather(city.value)						//city is the id of input of navbar
})

getWeather("Delhi")		//default when website opens

