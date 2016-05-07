var afterOpeningTheDoor = function () {


        response = prompt("Beyond the door, you see an oil painting and a box of kittens. Type 'approach' to walk over and look at the oil painting. Type 'cuddle' to go play with the kittens");

        if (response === "approach") {
            alert("As you approach the oil painting you suddenly feel lighter and realize with dread that you are being sucked into the painting, to be trapped forever");
        } else {
            alert("As you sit down and pull a kitten out of the box suddenly you are filled with joy and you think for a moment that everything might just turn out alright");
        }
}

var afterGazingOutTheWindow = function () {
      response = prompt("Outside the window you see a bank and a Range Rover. Type 'drive' to go drive the Range Rover, or type 'be financially responsible' to go to the bank");

      if (response === 'drive') {
          alert("You jump in the Range Rover, with your kittens in tow, and jump out to rob the bank. The heist is successful. You are now a millionare");
      } else if (response === 'be financially responsible'){
          alert("You go to the bank with a stack of neatly transcribed checks to pay each of your bills a week ahead of time. As you return home you realize that your life is incredibly boring. You should probably take up oil painting.");
      }
}

var response = prompt("You walk into a room with a door and a window. Type 'open the door' to go through the door, or type 'gaze' to gaze wistfully out the window and sigh");

if (response === "open the door") {
    afterOpeningTheDoor()
}
else if (response === "gaze") {
    afterGazingOutTheWindow()
} else {
    alert("Hey man you need to learn to follow directions or else you wil grow up with no job and have to rob a bank or something..");
        }
