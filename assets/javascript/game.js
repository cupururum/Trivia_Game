//when user presses the button game starts
$('button').on("click", function(){
  //the question and answers appear
  chooseQuestion();
});//end of onclick function

//when game starts:

var index = 0;
function chooseQuestion() {

  var url = "https://cupururum.github.io/Trivia_Game/assets/javascript/questions.json";

  $.getJSON(url, function(data){
    //the countdoun timer appears
    var timer = 5;
    $("#timer").text(timer);
    var intervals = setInterval(myTimer, 1000);
    function myTimer() {
      timer--;
      $("#timer").text(timer);
      console.log(timer);
      if (timer === 0) {
        $("#timer").text(timer);
        clearInterval(intervals);

        chooseQuestion();
          if (index === data.length) {
            clearInterval(intervals);
          };
      }
    }; //end of myTimer

      //the question and answers appear
    console.log(data);
    var $question = $("#question")
    var questionHTML = $question.text(data[index].question);
    console.log(data[index].question);
    var answersHTML = "<ul>";
    console.log(data[index].answers)
    $.each(data[index].answers, function(i, answer) {
      answersHTML += '<li class="answer">';
      answersHTML += answer + '</li>';
    });
    answersHTML += "</ul>";
    $('#variants').html(answersHTML);

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
