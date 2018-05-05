$(function() {
    $(".devourIT").on("click", function(event) {
        let id = $(this).data("id");
        let devour = $(this).data("devoured");

        let newAvailability = {
            devoured: devour
        };

        //Send the PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newAvailability
        }).then(
            function() {
                console.log("Burger has been devoured!")
                //Reload the page
                location.reload();
            }
        );
    });

    $(".create-burger-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name : $("#newBurger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created a new burger!")
                //Reload the page
                location.reload();
            }
        );
    });
});