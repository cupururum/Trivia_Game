var url = "questions.json";
$.getJSON(url, function(response){

  var $question = $("#question")
  var questionHTML = $question.text(response.question);
  var answersHTML = "<ul>";
  $.each(data.answers, function(i, answer) {
    answersHTML += '<li class="answer">'
    answersHTML += answer + '</li>'
  });
  $('#variants').html(answersHTML);
}); //end JSON
