$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var usersName = $("input#usersName").val();

    $(".usersName").text(usersName);
    $(".gif").toggle();
    $("#letter").toggle();

    event.preventDefault();

  });
  $("#blanks2 form").submit(function() {
    if ($("#userResponse option").is(yes)) {
      alert("Thanks!");
    } else {
      alert("SCREW YOU!");
    };
  });
});
