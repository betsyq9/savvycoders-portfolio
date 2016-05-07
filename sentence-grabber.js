


var randomSentenceGrabber = function () {
  var randomNumber = Math.random ()

  if (randomNumber <= .32) {
      return $("#also_second_paragraph")
  } else if (randomNumber <= .65) {
      return $("span.italics_guy")
  } else {
      return $(".section h1")
  }


}

// $("whatever").append/prepend
// $("whatever").css("propertyname,""value")
// $("whatever").text()
//
//
var sentenceAdder = function () {
var randomSentence = randomSentenceGrabber().text()
$("body").append(randomSentence)
}
var i = 0;
while (i < 5) {
  sentenceAdder()
  i++
}
