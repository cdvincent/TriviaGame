$(document).ready(function() {

    let userAnswer;

    
    var questions = ["What is the name of Ash's first poke'mon?", "What does a Charmander evolve into?", "What is the name of Ash's rival?"]
    
    $("#questions").text(questions[0]);

    
        question1();

        function question1(){
            
            var answers1 = ["Squirtle", "Pikachu", "Meowth", "Penguin"];
            let correct = "Pikachu";
            
            for (let i = 0; i < answers1.length; i++){
            $(".answer-1").html(answers1[0]);
            $(".answer-2").html(answers1[1]);
            $(".answer-3").html(answers1[2]);
            $(".answer-4").html(answers1[3]);
            }
                    $(".selected").on("click", function() {
                        let userAnswer = $(this).val();
                        if (userAnswer === correct){
                            $("#answers").empty();
                            $("#answers").text("Correct!");
                        } else {
                            $("#answers").empty();
                            $("#answers").text("Incorrect!");
                        }
                    });

                }


});