// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatIt").on("click", function(event) {
      var id = $(this).attr("id");
      console.log(id);
      // var newDevoure = $(this).data("newDevoured");
  
      // var newDevouredState = {
      //   devoured: newDevoured
      // };
  
      // Send the PUT request.
      $.ajax("/burger/eatit/" + id, {
        type: "PUT"
        // data: newDevouredState
      }).then(
        function(data) {
          console.log("data", data);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bur").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).attr("id");
      // Send the DELETE request.
      $.ajax("/burger/deleteit/" + id, {
        type: "DELETE"
      }).then(
        function(data) {
          console.log("deleted burger", data);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });