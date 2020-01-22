$(document).ready(function () {

    // var targetNumber;
    // var numberOptions;
    // var counterTotal = 0;
    // var wins = 0;
    // var losses = 0;


    // var crystalOne = $("#red-crystal");
    // var crystalTwo = $("#blue-crystal");
    // var crystalThree = $("#yellow-crystal");
    // var crystalFour = $("#green-crystal");
    // var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // var ranNums = [];
    // targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    // $("#wins").text(wins);
    // $("#losses").text(losses);
    // $("#counter-total").text(counterTotal);
    // $("#counter-total").empty();

    // ///////////////////////////
    // ///////////////////////////


    // function restart() {
    //     counterTotal = 0;
    //     $("#counter-total").text(counterTotal);
    //     $("#counter-total").empty();
    //     $("#current-random-num").empty();
    //     targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    //     $("#current-random-num").text(targetNumber);
    // }
    // function randomCrystalValues() {
    //     (i = nums.length), (j = 0);
    //     ranNums.push(nums[i]);
    // }

    // // while (i--) {
    // //     j = Math.floor(Math.random() * (i + 1));
    // //     ranNums.push(nums[i]);
    // //     nums.splice(j, 1);
    // // }

    // console.log(ranNums);

    // randomCrystalValues();

    // $(".crystal-image").on("click", function () {
    //     $(crystalOne).attr("data-crystalvalue", ranNums[0]);
    //     $(crystalTwo).attr("data-crystalvalue", ranNums[1]);
    //     $(crystalThree).attr("data-crystalvalue", ranNums[2]);
    //     $(crystalFour).attr("data-crystalvalue", ranNums[3]);

    //     var crystalValue = $(this).attr("data-crystalvalue");
    //     crystalValue = parseInt(crystalValue);
    //     console.log(crystalValue);
    //     // Add the crystalValue to the user's "counter" which is a global variable.
    //     // Every click, from every crystal adds to the global counter.
    //     counterTotal += crystalValue;
    //     $("#counter-total").text(counterTotal);

    //     if (counterTotal === targetNumber) {
    //         alert("You win!");
    //         wins++;
    //         $("#wins").text(wins);
    //         restart();

    //     } else if (counterTotal >= targetNumber) {
    //         alert("You lose!!");
    //         losses++;
    //         $("#losses").text(losses);
    //         restart();
    //     }
    // })})

    // ///////

    // $(document).ready(function () {

        // Global variables
    
        var targetNumber;
        var userTotal = 0;
        var wins = 0;
        var losses = 0;
    
        // Functions
    
        function reset() {
            for(var i = 0; i < crystals.length; i++) {
                crystals[i].setAttribute("target-score", Math.floor(Math.random() * 11 + 1))
            }
            targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
            userTotal = 0;
            $("#counter-total").text(userTotal);
            $("#target-score").text(targetNumber);
        }
    
        function start() {
            crystals = document.getElementsByTagName("img")
            for(var i = 0; i < crystals.length; i++) {
                crystals[i].setAttribute("counter-total", Math.floor(Math.random() * 11 + 1))
                crystals[i].addEventListener("click", (args) => {
                    // value = Math.round(args.target.getAttribute("counter-total"))
                    userTotal = Math.floor(Math.random("counter-total") * 11 + 1)
                    // userTotal = userTotal + value;
                    $("counter-total").text(userTotal);
                    console.log(userTotal);
                    getOutcome();
                })
            }
            targetNumber = Math.floor(Math.random() * 101 + 19);
            $("#target-score").text(targetNumber);
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#counter-total").text(userTotal);
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
    
        start();
    });