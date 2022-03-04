
var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");



// clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// go to home page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});