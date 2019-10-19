$(document).ready(function() {
    // questions and answers
    let currentAnswer;
    let choice1 = ["Pikachu", "Brock", "Red Version", "Power", "Crystals"];
    let choice2 = ["Squirtle", "Gary", "Blue Version", "Water", "Rocks"];
    let choice3 = ["Megasaur", "George", "Orange Version", "Fire", "Stones"];
    let choice4 = ["Meowth", "May", "Yellow Version", "Ground", "Badges"];
    
    let questions = ["What is the name of Ash's first Poke'mon?", "Who is Ash's rival in the show?", "Which is not a Poke'mon video game?", "What type of Poke'mon is Squirtle?", "What must trainers collect to enter the Poke'mon League?"]
    
    // timer
    let counter = 10;    
    var intervalId;
    
    function runCounter() {
        counter = 10;
        $(".timer").html("<h2>" + "10" + "</h1>");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        counter--;
        $(".timer").html("<h2>" + counter + "</h2>");
        if (counter === 0){
            unanswered++;   
            stop();
            $(".button").hide();
            var pikaWrong = $("<img>").attr("src", "assets/images/pikaWrong.gif");
            $("#result").append("<h6>" + "TIME'S UP!" + "</h6>");
            $("#result").append(pikaWrong);
        }
    }
    function stop() {
        clearInterval(intervalId);
    }
//start quiz on click
    start();
    function start(){
        reset();
        var titlePic = $("<img>").attr("src", "assets/images/title.png");
        $(".title").prepend("<h1>" + "QUIZ" + "</h1>")
        $(".title").prepend(titlePic);
        $(".answers").hide();
        $("#start").on("click", function(){
            $(".answers").show();
            $(".title").hide();
            q1();
        });
    }
//empty questions/answers
    function reset(){
        clearInterval();
        $("#result").empty();
        $(".questions").empty();
        $(".button").empty().show();
        $(".stats").empty();
    }
//functions to fill in questions/answers
    function q1(){
        runCounter();
        reset();
        currentAnswer = "Pikachu";
        $(".questions").append(questions[0]);
        $("#answer0").append(choice1[0]);
        $("#answer1").append(choice2[0]);
        $("#answer2").append(choice3[0]);
        $("#answer3").append(choice4[0]);
        setTimeout(q2, 13000);

}

    function q2(){
        runCounter();
        reset();
        currentAnswer = "Gary";
        $(".questions").append(questions[1]);
        $("#answer0").append(choice1[1]);
        $("#answer1").append(choice2[1]);
        $("#answer2").append(choice3[1]);
        $("#answer3").append(choice4[1]);    
        setTimeout(q3, 13000);    
}

    function q3(){
        runCounter();
        reset();
        currentAnswer = "Orange Version";
        $(".questions").append(questions[2]);
        $("#answer0").append(choice1[2]);
        $("#answer1").append(choice2[2]);
        $("#answer2").append(choice3[2]);
        $("#answer3").append(choice4[2]);
        setTimeout(q4, 13000);
    }

    function q4(){
        runCounter();
        reset();
        currentAnswer = "Water";
        $(".questions").append(questions[3]);
        $("#answer0").append(choice1[3]);
        $("#answer1").append(choice2[3]);
        $("#answer2").append(choice3[3]);
        $("#answer3").append(choice4[3]);
        setTimeout(q5, 13000);
    }

    function q5(){
        runCounter();
        reset();
        currentAnswer = "Badges";
        $(".questions").append(questions[4]);
        $("#answer0").append(choice1[4]);
        $("#answer1").append(choice2[4]);
        $("#answer2").append(choice3[4]);
        $("#answer3").append(choice4[4]);
        setTimeout(showStats, 13000);
    }

//stats variables
let right = 0;
let wrong = 0;
let unanswered = 0;


function showStats(){
    stop();
    reset();
    $(".stats").append("<h1>" + "Right Answers: " + right + "</h1>");
    $(".stats").append("<h1>" + "Wrong Answers: " + wrong + "</h1>");
    $(".stats").append("<h1>" + "Unanswered: " + unanswered + "</h1>");
    let percentage = right / 5 * 100;   
    $(".stats").append("<h1>" + percentage + "%" + "</h1>");
    $(".timer").empty();
    $(".answers").empty();
}



// grab user selections
    $(".button" ).on("click", function (){
        let userGuess = $(this).text();
        $(".button").hide();        
//win/loss logic
            if (userGuess === currentAnswer){
                $("#result").append("<h6>" + "CORRECT!" + "</h6>");
                var pikaRight = $("<img>").attr("src", "assets/images/pikachu.gif");
                $("#result").append(pikaRight);
                right++;
                stop();
            } else if (userGuess !== currentAnswer){
            $("#result").append("<h6>" + "INCORRECT!" + "</h6>");
            var pikaWrong = $("<img>").attr("src", "assets/images/pikaWrong.gif");
            $("#result").append(pikaWrong);
            wrong++;
            stop();
        }
//update stats div        
$(".stats").append("<p>" + "Right Answers: " + right + "</p>");
$(".stats").append("<p>" + "Wrong Answers: " + wrong + "</p>");
$(".stats").append("<p>" + "Unanswered: " + unanswered + "</p>");
        
    });
});