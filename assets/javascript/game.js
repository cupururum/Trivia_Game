var url = "../data/questions.json";
$.getJSON(url, function(data){

  var $question = $("#question")
  var questionHTML = $question.text(data.question);
  var answersHTML = "<ul>";
  $.each(data.answers, function(i, answer) {
    answersHTML += '<li class="answer">'
    answersHTML += answer + '</li>'
  });
  $('#variants').html(answersHTML);
}); //end JSON
