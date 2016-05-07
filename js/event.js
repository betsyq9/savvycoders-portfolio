

var thingWeWantToDo = function (event) {
  // $("li").css("font-size", "25px")
  $(event.target).toggleClass("bigger-font")
}

$("li").hover(thingWeWantToDo)

//add eventListener

  var changeColor = function(event) {
    $(event.target).toggleClass("bigger")
  }

  $("h1").hover(changeColor)


  var clickLink = function (event) {
    // $("li").css("font-size", "25px")
    $(event.target).toggleClass("font-color")
  }

  $("a").hover(clickLink)

//weather - 72d43f0d3e731d1c9dfae5490367e130



  var outputWeather = function( weatherData ){
  var output = $("<ul id='weather-list'></ul>");

    output.append("<li>Current City: " + weatherData.name + "</li>");
    output.append("<li>The weather today is: " + weatherData.weather[0].description + "</li>");
    output.append("<li>High Temp: " + weatherData.main.temp_max + " F</li>");
    output.append("<li>Low Temp: " + weatherData.main.temp_min + " F</li>");
    output.append("<li>Wind Speed: " + weatherData.wind.speed + " mph</li>");

    $("#weather-data").html( output );
};


var generateUrl = function( city ){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&mode=json&units=imperial&appid=72d43f0d3e731d1c9dfae5490367e130';

  return url;
};

$("button").click( function( evt ){
  var city = $(evt.target).attr("id");

  $("#weather-data").text("Your data is loading...");

  $.ajax({
  method: 'GET',
  url: generateUrl( city ),
  success: outputWeather
});

} );
