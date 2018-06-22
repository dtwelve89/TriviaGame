// Variable for Time in Seconds
var time = 60;

// On Start Click Timer Counting Down, Display, and Result Checker in 60 Seconds (1min)

$("#start").on("click", function(){
var quiz = setInterval(myTimer, 1000);
function myTimer(){
    time--;
    console.log(time);
    $("#display").text("Time Remaining: " + time + " Seconds");
    if (time <= 0){
        clearInterval(quiz);
    }
}
});

$("#start").on("click", function(){
    setTimeout(checkResults, 1000 * time);
    $("#display").show();
    $("form").show();
    $("#button").show();
    $("#start").hide();
 
});

// Click Event Listener

$("#button").on("click", checkResults);

function checkResults(){

var amountCorrect = 0;
var amountWrong = 0;
var unAnswered = 0;
    for (var i = 0; i <= 9; i++){
        var radios = document.getElementsByName("group"+i);
        for (var j = 0; j < radios.length; j++){
            var radio = radios [j];
            if (radio.value == "correct" && radio.checked){
                amountCorrect++;
            }
            if (radio.value == "wrong" && radio.checked){
                amountWrong++;
            }
            unAnswered = 9 - amountCorrect - amountWrong;
        }
    }
    $("#display").hide();
    $("form").empty();
    $(".wrapper").empty();
    $("#display1").text("All Done!");
    $("#display2").text("Correct Answers: " + amountCorrect);
    $("#display3").text("Incorrect Answers: " + amountWrong);
    $("#display4").text("Unanswered: " + unAnswered);
}

// Intializers

$("form").hide();
$("#button").hide();
