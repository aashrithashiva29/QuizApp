const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_HIGH_SCORES = 5;
//things on local storage are strings
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; 
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup",()=>{
    // console.log(username.value)
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
//if b score > a score , put b before a
    highScores.sort( (a,b) => b.score - a.score );
    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    console.log(highScores);

};