$(document).ready(function() {
	$('form').submit(function(event) {
		//maybe make this into an object?
		
		var city_name = $('#cityField').val();
		var weather_url = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name +"&APPID=ccf79b03f71a245806ac37bf2c4cf494";
		$.get(weather_url, function(res){
			var temperature = res.main.temp;
			temperature = ((temperature * (9/5)) - 459.67).toPrecision([4]);
			var wind_speed = ((res.wind.speed)*2.23694).toPrecision([4]);
			var city_name = res.name;
			var condition = res.weather[0].main;
			var date_time = new Date((res.dt)*1000);

			var cardMaker = "<div class='weatherCard'><h1>";
			cardMaker += city_name;
			cardMaker += "<img src='cardClose.png' alt='Close Button' height='25'></h1><p>Temperature:"	
			cardMaker += temperature;
			cardMaker += "</p><p>wind speed: ";
			cardMaker += wind_speed;
			cardMaker += "mph </p><p>Condition: ";
			cardMaker += condition;
			cardMaker += "<p>Date/Time: ";
			cardMaker += date_time;
			cardMaker +="</p></div>"
			$(".weatherCardArea").append(cardMaker);

			
			
		});
		$(document).on('click', 'img', function(){
			$(this).parent('h1').parent('div').remove();
		});
			
		return false;
	});
	
});


//https://cdwf-seattle-june2016.slack.com/archives/blake-jae-peter/p1467238671000002
//"http://api.openweathermap.org/data/2.5/weather?q=" + city_name +"&APPID=ccf79b03f71a245806ac37bf2c4cf494"