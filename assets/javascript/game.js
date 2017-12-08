var index = 0;
var wrong = 0;
var correct = 0;
var unanswered = 0;
//when user presses the button game starts
$('button').on("click", function(){
  //the question and answers appear
  chooseQuestion();
});//end of onclick function

//when game starts:


function chooseQuestion() {
//the countdoun timer appears
  var timer = 10;
  $("#timer").text(timer);
  var intervals = setInterval(myTimer, 1000);
  function myTimer() {
    timer--;
    $("#timer").text(timer);
    console.log(timer);
    if (timer === 0) {
      clearInterval(intervals);
      index++
      unanswered++
      chooseQuestion();
     }
    }; //end of myTimer

  var url = "https://cupururum.github.io/Trivia_Game/assets/javascript/questions.json";
  $.getJSON(url, function(data){
    //check here if the json array is over, then show the result and continue game
    if (index === data.length) {
        clearInterval(intervals);
        $(".gameDiv").append('<div>')html('<p> Correct: ' + correct + '<br> Wrong: ' + wrong + '<br> Unanswered: ' + unanswered + '</p>')
        index = 0;
        setTimeout(chooseQuestion, 1000*5);
      };

      //the question and answers appear
    console.log(data);
    var $question = $("#question")
    var questionHTML = $question.text(data[index].question); //display the question
    console.log(data[index].question);
    var answersHTML = "<ul class='answer-list'>"; //start building the list with answers
    console.log(data[index].answers)
    $.each(data[index].answers, function(i, answer) {
      answersHTML += '<li class="answer">'; //creating list of items
      answersHTML += answer + '</li>'; //close the item
    });
    answersHTML += "</ul>"; //close the list
    $('#variants').html(answersHTML);//display list in html

    $(".answer-list").on("click", '.answer', function(){ //assign the click function to the list items
      clearInterval(intervals); //when I choose the answer I stop timer
      var userAnswer = $(this).text()
      console.log(userAnswer);
      console.log(data[index].correctAnswer);
      if (userAnswer === data[index].correctAnswer) { //check if answer is correct
        index++
        correct++
        $("#variants").append('<div>').html("<h2> You chose the correct answer </h2>");
        setTimeout(chooseQuestion, 1000*3)
      } else if (userAnswer !== data[index].correctAnswer) { //if the answer is not correct
        index++
        wrong++
        $("#variants").append('<div>').html("<h2> You chose the wrong answer </h2>");
        setTimeout(chooseQuestion, 1000*3)
      }
    }); //end of onclick function
  }); //end JSON
};// end of chooseQuestion





//user can choose the answer
  //user presses the answers
    //if answer is correct:
        // show "correct answer!"
        // count the correct answer
        // show the message for 5 seconds
        // move to the next question
        // start countdoun timer from the beggining

    //else if countdown timer is over and user did not choose the answer:
        // count unanswered question
        // move to the next question
        // start countdoun timer from the beggining

    // else :
        // show "wrong answer!"
        // count the wrong answer
        // show the message for 5 seconds
        // move to the next question
        // start countdoun timer from the beggining
