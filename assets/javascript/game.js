$(document).ready(function () {

    // Global variables

    var targetNumber = 0;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    function reset() {
        for (var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("total-score", Math.floor(Math.random() * 11 + 1))
        }
        targetNumber = Math.floor(Math.random() * 101 + 19);
        userTotal = 0;
        $("#total-score").text(userTotal);
        $("#target-score").text(targetNumber);
    }

    function initialize() {
        crystals = document.getElementsByTagName("img")
        for (var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("total-score", Math.floor(Math.random() * 11 + 1))
            crystals[i].addEventListener("click", (args) => {
                value = Math.round(args.target.getAttribute("total-score"))
                userTotal = userTotal + value;
                $("#total-score").text(userTotal);
                console.log(userTotal);
                getOutcome();
            })
        }
        targetNumber = Math.floor(Math.random() * 101 + 19);
        $("#target-score").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#total-score").text(userTotal);
    }
    function getOutcome() {
        if (userTotal === targetNumber) {
            alert("You Win!");
            reset();
            wins++;
            $("#wins").text(wins);
        }
        else if (userTotal > targetNumber) {
            alert("You lose!");
            reset();
            losses++;
            $("#losses").text(losses);
        }
    }

    initialize();
});


