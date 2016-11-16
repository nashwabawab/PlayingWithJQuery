function highlight() {
  $('h1').text('hello');
  $('.jumbotron').addClass('highlight');
}

function unhighlight() {
  $('h1').text('Hello World');
  $('.jumbotron').removeClass('highlight');
}
