// ======================
// MANA QUIZ
// ======================

const quiz = [

{
question:"How old is Mana?",

choices:["20","24","25"],

answer:"24",

correct:"Correct! I'm already 24 years old today!",

wrong:"Ehhh~ I'm actually 24!"
},

{
question:"Is Mana left-handed or right-handed?",

choices:["Left-handed","Right-handed"],

answer:"Left-handed",

correct:"Yep! I'm left-handed!",

wrong:"Nope~ I'm left-handed!"
},

{
question:"How tall is Mana?",

choices:["170 cm","169 cm"],

answer:"170 cm",

correct:"Exactly! I'm 170 cm!",

wrong:"Close! I'm actually 170 cm!"
},

{
question:"What's Mana's MBTI?",

choices:["ESFJ","ENFP","ENTP"],

answer:"ENFP",

correct:"You're correct! I retook the test and i got ENFP!! ",

wrong:"Nope! It's ENFP!"
},

{
question:"What's the girl's name in the First Love story during the debut stream?",

choices:[
"Hanako-chan",
"Hatsuko-chan",
"Inami-chan"
],

answer:"Hatsuko-chan",

correct:"You remembered Hatsuko-chan!",

wrong:"It's Hatsuko-chan!"
},

{
question:"Oriens or Dytica?",

choices:[
"Oriens",
"Dytica"
],

answer:"Oriens",

correct:"ORIENS!!! ",

wrong:"It's Oriens!"
},

{
question:"When was Mana's first 3D stream?",

choices:[
"7 March 2025",
"3 July 2025",
"7 April 2025"
],

answer:"7 March 2025",

correct:"Yay! 7 March 2025! It was so memorable for me!",

wrong:"The answer is 7 March 2025!"
}

];

// ======================

let currentQuestion = 0;
let score = 0;

const question =
document.getElementById("question");

const choices =
document.getElementById("choices");

const comment =
document.getElementById("comment");

const commentBox =
document.getElementById("comment-box");

const nextBtn =
document.getElementById("nextBtn");

const currentNumber =
document.getElementById("current-number");

// ======================

function showQuestion(){

commentBox.style.display="none";

nextBtn.style.display="none";

currentNumber.textContent=currentQuestion+1;

question.textContent=
quiz[currentQuestion].question;

choices.innerHTML="";

quiz[currentQuestion].choices.forEach(choice=>{

const btn=document.createElement("button");

btn.className="choice";

btn.textContent=choice;

btn.onclick=()=>chooseAnswer(btn,choice);

choices.appendChild(btn);

});

}
// ======================
// CHECK ANSWER
// ======================

function chooseAnswer(button, selected){

    const q = quiz[currentQuestion];

    const allButtons = document.querySelectorAll(".choice");

    // Disable semua tombol
    allButtons.forEach(btn=>{
        btn.disabled = true;
    });

    // Tandai jawaban benar
    allButtons.forEach(btn=>{
        if(btn.textContent === q.answer){
            btn.classList.add("correct");
        }
    });

    // ======================
    // SOAL TINGGI (169 dipaksa jadi 170)
    // ======================

    if(q.question === "How tall is Mana?" && selected === "169 cm"){

        score++;

        comment.textContent =
        "Hehe~ Nice try! I'll just choose 170 cm for you because i am!!";

    }

    // Jawaban benar
    else if(selected === q.answer){

        score++;

        comment.textContent = q.correct;

    }

    // Jawaban salah
    else{

        button.classList.add("wrong");

        comment.textContent = q.wrong;

    }

    // Tampilkan komentar & tombol Next
    commentBox.style.display = "block";
    nextBtn.style.display = "inline-block";

}

// ======================
// NEXT BUTTON
// ======================

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion<quiz.length){

showQuestion();

}

else{

showResult();

}

});
// ======================
// SHOW RESULT
// ======================

function showResult(){

    question.innerHTML = "Quiz Finished!";

    choices.innerHTML = "";

    commentBox.style.display = "block";

    nextBtn.style.display = "none";

    currentNumber.textContent = quiz.length;

    let message = "";

    if(score === quiz.length){

        message = "WOW! You're a true Manadeshi! Thank you so much for supporting me!";

    }
    else if(score >= 5){

        message = "Amazing! You know me really well~ Thank you for always watching!";

    }
    else if(score >= 3){

        message = "Not bad! Maybe it's time to watch a few more streams? Hehe~";

    }
    else{

        message = "Ehhhh!? Looks like you need to know me better!";

    }

    comment.innerHTML = `
        <h2 style="margin-bottom:15px;">
            Your Score
        </h2>

        <div style="
            font-size:72px;
            color:#E0B800;
            font-weight:bold;
            margin-bottom:20px;
        ">
            ${score} / ${quiz.length}
        </div>

        <p style="
            font-size:20px;
            line-height:1.8;
        ">
            ${message}
        </p>

        <br>

        <button id="homeBtn" class="choice">
            Go to Home
        </button>
    `;

    document.getElementById("homeBtn").onclick = ()=>{

        document.body.classList.add("fade-out");

        setTimeout(()=>{

            window.location.href="home.html";

        },800);

    };

}


showQuestion();
