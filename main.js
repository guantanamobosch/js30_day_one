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

// event listener
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
