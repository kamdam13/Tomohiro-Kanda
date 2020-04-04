'use strict';

function utcTimeToJSTime(utcTime){
	return utcTime * 1000;
}

function ajaxRequest(){
	const endpoint = 'https://api.openweathermap.org/data/2.5/weather';
	const appId = '4b5774e9f3d2a07b84f0f2f88e486224';
	$.ajax({
		url: endpoint,
		data: {
			appid: appId,
			q: 'London',
			units: 'metric',
			lang: 'ja'
		}
	}).done(function(data){
		const datetime = new Date(utcTimeToJSTime(data.dt));
		const month = datetime.getMonth() + 1;
		const date = datetime.getDate();
		const hour = datetime.getHours();
		const min = String(datetime.getMinutes()).padStart(2,'0');
		const cityName = data.name;
		const weather = data.weather[0].main;
		const weatherIcon = data.weather[0].icon;
		const temperature = Math.round(data.main.temp);
		const maxTemp = Math.round(data.main.temp_max);
		const minTemp = Math.round(data.main.temp_min);
		const humidity = data.main.humidity;
		
		$('#weather').html(
			`<h1>${cityName}</h1>
			<p>${month}月${date}日 ${hour}時${min}分</p>
			<p>${weather}</p>
			<p><img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="天気"></p>
			<p>気温: ${temperature} °C</p>
			<p>湿度: ${humidity} ％</p>
			<p>最高気温: ${maxTemp} °C</p>
			<p> 最低気温: ${minTemp} °C</p>`
		);
	}).fail(function(){
		$('#weather').html(
			'<h1>ajax failed!</h1>'
		);
	});
}

$('document').ready(ajaxRequest());