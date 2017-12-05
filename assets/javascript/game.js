var url = "https://cupururum.github.io/Trivia_Game/assets/javascript/questions.json";
$.getJSON(url, function(data){
  console.log(data);
  var $question = $("#question")
  var questionHTML = $question.text(data[0].question);
  var answersHTML = "<ul>";
  console.log(data[0].answers)
  $.each(data[0].answers, function(i, answer) {
    answersHTML += '<li class="answer">';
    answersHTML += answer + '</li>';
  });
  answersHTML += "</ul>";
  $('#variants').html(answersHTML);
}); //end JSON
