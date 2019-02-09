$(function() { 

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBill = {
      rate: $("#rate").val().trim(),
      date: $("#date").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/bills", {
      type: "POST",
      data: newBill
    }).then(
      function() {
        console.log("new bill added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})