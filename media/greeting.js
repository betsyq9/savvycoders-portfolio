// document
// querySelector
// querySelectorAll
// textContent
// prompt
// alert
// innerHTML
//

var name = prompt("Hello, what is your name?")

document.querySelector("div")

var greetingDiv = document.querySelector("div")

if (name){
  var greetingDiv = document.querySelector("div")
  greetingDiv.textContent = "Hey " + name + ", welcome to the page!"
} else {
  var greetingDiv = document.querySelector("div")
  greetingDiv.textContent = "Hey stranger, welcome to the page!"
}

greetingDiv.innerHTML = greetingString
