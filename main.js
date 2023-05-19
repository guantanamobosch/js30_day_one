// declare variables to store buttons
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const boom = document.getElementById("boom");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tom = document.getElementById("tom");
const tink = document.getElementById("tink");

// function to get sound
const getSound = function (soundName) {
    const sound = new Audio(`./sounds/${soundName}.wav`);
    return sound;
};

// event listeners

// 1. playing sound
document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "a") {
        const sound = getSound("clap");
        sound.play();
    } else if (event.key === "s") {
        const sound = getSound("hihat");
        sound.play();
    } else if (event.key === "d") {
        const sound = getSound("kick");
        sound.play();
    } else if (event.key === "f") {
        const sound = getSound("openhat");
        sound.play();
    } else if (event.key === "g") {
        const sound = getSound("boom");
        sound.play();
    } else if (event.key === "h") {
        const sound = getSound("ride");
        sound.play();
    } else if (event.key === "j") {
        const sound = getSound("snare");
        sound.play();
    } else if (event.key === "k") {
        const sound = getSound("tom");
        sound.play();
    } else if (event.key === "l") {
        const sound = getSound("tink");
        sound.play();
    }
});

// 2. adding gold border on keydown
document.addEventListener("keyup", function (event) {
    if (event.key === "a") {
        const element = document.getElementById("clap");
        element.classList.add("goldborder");
    } else if (event.key === "s") {
        const element = document.getElementById("hihat");
        element.classList.add("goldborder");
    } else if (event.key === "d") {
        const element = document.getElementById("kick");
        element.classList.add("goldborder");
    } else if (event.key === "f") {
        const element = document.getElementById("openhat");
        element.classList.add("goldborder");
    } else if (event.key === "g") {
        const element = document.getElementById("boom");
        element.classList.add("goldborder");
    } else if (event.key === "h") {
        const element = document.getElementById("ride");
        element.classList.add("goldborder");
    } else if (event.key === "j") {
        const element = document.getElementById("snare");
        element.classList.add("goldborder");
    } else if (event.key === "k") {
        const element = document.getElementById("tom");
        element.classList.add("goldborder");
    } else if (event.key === "l") {
        const element = document.getElementById("tink");
        element.classList.add("goldborder");
    }
});

// 3. removing gold border on keyup
document.addEventListener("keyup", function (event) {
    if (event.key === "a") {
        const element = document.getElementById("clap");
        element.classList.remove("goldborder");
    } else if (event.key === "s") {
        const element = document.getElementById("hihat");
        element.classList.remove("goldborder");
    } else if (event.key === "d") {
        const element = document.getElementById("kick");
        element.classList.remove("goldborder");
    } else if (event.key === "f") {
        const element = document.getElementById("openhat");
        element.classList.remove("goldborder");
    } else if (event.key === "g") {
        const element = document.getElementById("boom");
        element.classList.remove("goldborder");
    } else if (event.key === "h") {
        const element = document.getElementById("ride");
        element.classList.remove("goldborder");
    } else if (event.key === "j") {
        const element = document.getElementById("snare");
        element.classList.remove("goldborder");
    } else if (event.key === "k") {
        const element = document.getElementById("tom");
        element.classList.remove("goldborder");
    } else if (event.key === "l") {
        const element = document.getElementById("tink");
        element.classList.remove("goldborder");
    }
});
