//Change names

var p1Name = prompt("Player 1 Name:") || "Player 1";

var p2Name = prompt("Player 2 Name:") || "Player 2";

const playerNames = document.querySelectorAll("#options .op h2");
playerNames[0].textContent = p1Name;
playerNames[1].textContent = p2Name;


/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

const optionsHeading = document.querySelector("#options > h2");
const playerOptions = document.querySelector("#options .sides");

optionsHeading.addEventListener("click", function () {
    playerOptions.classList.toggle("hidden");
});

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

const fillInputs = document.querySelectorAll(".fill");

fillInputs.forEach(function (input, index) {
    const user = player[index];
    const output = input.nextElementSibling;

    input.value = user.fill;
    output.innerHTML = user.fill;

    input.addEventListener("input", function (e) {
        user.fill = e.target.value;
        user.pad.fill = user.fill;
        output.innerHTML = user.fill;
    });
});

const fillStrokes = document.querySelectorAll(".stroke");

fillStrokes.forEach(function (input, index) {
    const user = player[index];
    const output = input.nextElementSibling;

    input.value = user.stroke;
    output.innerHTML = user.stroke;

    input.addEventListener("input", function (e) {
        user.stroke = e.target.value;
        user.pad.stroke = user.stroke;
        output.innerHTML = user.stroke;
    });
});

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

const changeUp = document.querySelectorAll(".u");

changeUp.forEach(function (input, index){
    const user = player[index];

    input.value = user.keys.u;

    input.addEventListener("focus", function (){
        Paused = currentState === "pause";
        currentState = "pause";
    });

    input.addEventListener("input", function (e){
        user.keys.u = e.target.value;
    })
});

const changeDown = document.querySelectorAll(".d");

changeDown.forEach(function (input, index){
    const user = player[index];

    input.value = user.keys.d;

    input.addEventListener("focus", function (){
        Paused = currentState === "pause";
        currentState = "pause";
    });

    input.addEventListener("input", function (e){
        user.keys.d = e.target.value;
    })
});

const changeStraight = document.querySelectorAll(".s");

changeStraight.forEach(function (input, index){
    const user = player[index];
    let Paused = false;

    input.value = user.keys.s;

    input.addEventListener("focus", function (){
        Paused = currentState === "pause";
        currentState = "pause";
    });

    input.addEventListener("input", function (e){
        user.keys.s = e.target.value;
    })
});

