const dialogues = [
{
    name: "Hibachi Mana",
    text: "Welcome to my birthday celebration!"
},

{
    name: "Hibachi Mana",
    text: "Thank you for taking the time to visit this little website."
},

{
    name: "Hibachi Mana",
    text: "Every stream, every laugh, and every memory means a lot to me."
},

{
    name: "Hibachi Mana",
    text: "Whether you've been here from the beginning..."
},

{
    name: "Hibachi Mana",
    text: "...or you only found me recently..."
},

{
    name: "Hibachi Mana",
    text: "I'm truly grateful for your support."
},

{
    name: "Hibachi Mana",
    text: "Let's continue making wonderful memories together!"
}


];

/* VISUAL NOVEL */

const speaker = document.getElementById("speaker");
const dialogText = document.getElementById("dialog-text");
const dialogBox = document.getElementById("dialog-box");

if(speaker && dialogText && dialogBox){

let currentDialogue = 0;

function showDialogue(){

    speaker.textContent =
        dialogues[currentDialogue].name;

    dialogText.textContent =
        dialogues[currentDialogue].text;
}

showDialogue();

dialogBox.addEventListener("click", () => {

    currentDialogue++;

    if(currentDialogue < dialogues.length){

        showDialogue();

    }
    else{

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = "home.html";

        }, 1000);

    }

});

}

/* DAYS SINCE DEBUT */

const counterElement =
document.getElementById("days-counter");

if(counterElement){

const debutDate =
new Date("2023-04-03");

const today =
new Date();

const difference =
today - debutDate;

const days =
Math.floor(
    difference /
    (1000 * 60 * 60 * 24)
);

counterElement.textContent =
days.toLocaleString();

}
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));

});