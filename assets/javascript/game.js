var url = "https://cupururum.github.io/Trivia_Game/assets/javascript/questions.json";
$.getJSON(url, function(response){

  var $question = $("#question")
  var questionHTML = $question.text(response.question);
  var answersHTML = "<ul>";
  $.each(response.answers, function(i, answer) {
    answersHTML += '<li class="answer">';
    answersHTML += answer + '</li>';
  });
  answersHTML += "</ul>";
  $('#variants').html(answersHTML);
}); //end JSON
