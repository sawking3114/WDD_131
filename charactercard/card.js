let charName = document.querySelector(".name");
let charClass = document.querySelector(".class");
let charLevel = document.querySelector(".level");
let charHealth = document.querySelector(".health");
let charImg = document.querySelector("img");
let atkBtn = document.querySelector(".attack");
let lvlBtn = document.querySelector(".level");

let character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    img: "Snortleblat.jpeg",
    attacked: function() {
        if (this.health == 0) {
            alert("Character has died")
        }
        else {
            this.health -= 20;
            charHealth.innerHTML = "<strong>Health: </strong>" + this.health;
        }
    },
    levelUp: function() {
        this.level++;
        charLevel.innerHTML = "<strong>Level: </strong>" + this.level;
    }
};

charImg.src = character.img;
charName.textContent = character.name;
charClass.innerHTML = "<strong>Class: </strong>" + character.class;
charLevel.innerHTML = "<strong>Level: </strong>" + character.level;
charHealth.innerHTML = "<strong>Health: </strong>" + character.health;