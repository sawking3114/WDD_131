const texts = document.querySelectorAll("div");
const button = document.querySelector("#explode");
const talking = document.querySelector(".interact");
const special = document.querySelector(".special");

const firstPuzzle = document.querySelector("#firstPuzzle");
const firstInput = document.querySelector("#answer");

const secPuzzle = document.querySelector("#secondPuzzle");
let secValue = 0;
const secDisplay = document.querySelector("#secondDisplay");
const secChanges = [3, -4, 13];
const secButtons = document.querySelectorAll(".numButton");
let moves = [];

const thirdPuzzle = document.querySelector("#thirdPuzzle");
const thirdInput = document.querySelector("#thirdAnswer");

//creates an observer object (watches when something appears on screen) that makes stuff visible
const fader = new IntersectionObserver((lines) => {
    lines.forEach(line =>{
        if (line.isIntersecting){
            line.target.classList.add("visible")
            fader.unobserve(line.target);
        }
    });
}, {
    //20% of thingamajig is visible
    threshold: 0.2
});

texts.forEach(text => fader.observe(text));

button.addEventListener("click", () =>{
    //checks if first puzzle has begun
    if (!firstPuzzle.classList.contains("open")){
        firstPuzzle.classList.add("open");
        talking.textContent = "haHa, There iS no WaY you'Re fiGuring oUt the coDe!";
        return;
    }
    const firstCode = firstInput.value.toUpperCase();
    //checks that second puzzle isn't open, then solves first
    if (!secPuzzle.classList.contains("open")) {
        if (firstCode === "HTSWYRGUD") {
            beginSecPuzzle();
            return;
        } else {
            alert("Incorrect Code.");
            return;
        }
    }
    //checks that third puzzle isn't open, then solves second
    if (secPuzzle.classList.contains("open") && !thirdPuzzle.classList.contains("open")) {
        if (secValue === 7) {
            beginThirdPuzzle();
        } 
        else {
            alert("Incorrect Value.");
        }
        return;
    }
    //solves third puzzle
    const thirdCode = thirdInput.value;
    if (thirdPuzzle.classList.contains("open")) {
        const thirdCode = thirdInput.value;
        if (thirdCode == 177){
            detonate();
        }
        else {
            alert("Incorrect Value.");
        }
        return;
    }
});

function beginFirstPuzzle() {
    if (!firstPuzzle.classList.contains("open")){
        firstPuzzle.classList.add("open");
        talking.textContent = "haHa, There iS no WaY you'Re fiGuring oUt the coDe!";
    }
}

function beginSecPuzzle() {
    if (!secPuzzle.classList.contains("open")){
        secPuzzle.classList.add("open");
        talking.textContent = "Well, you're never figuring out this one! I'm not dumb enough to make it something like, I dunno, how many times I've spoken";
    }
}
//create an click event for every button, checks buttons index value upon clicking
secButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        moves.push(secChanges[index]);
        secValue = moves.reduce((total,num) => total + num, 0);
        secDisplay.textContent = secValue;

        if (secValue >= 20){
            alert("Number exceeding limit. Restarting");
            moves = [];
            secValue = 0;
            secDisplay.textContent = secValue;
        }
        else if (secValue <= -5){
            alert("Number exceeding minimum. Restarting");
            moves = [];
            secValue = 0;
            secDisplay.textContent = secValue;
        }
    });
});

function beginThirdPuzzle() {
    if (!thirdPuzzle.classList.contains("open")){
        thirdPuzzle.classList.add("open");
        talking.textContent = "That's it. You're never figuring out what number goes in this last one. Its the value for the blue and green that makes my text color. But this text box will give you no hints!";
        special.textContent = "the second answer twice";
    }
}

function detonate() {
    talking.textContent = "NOOOOOOOOOO";
    const explosion = document.querySelector("#kaboom");
    const fade = document.querySelector("#end");
    explosion.classList.add("active");
    //timer so that screen fades to black after explosion
    setTimeout(() => {
        fade.classList.add("active");
    }, 300);
}
