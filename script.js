$(document).ready(function () {
    console.log('DOCUMENT READY!!!');

    // Variables for nutritional info API
    var APIId = "4ddc0164";
    var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
    var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";

    // Necessary gobal variables
    var foods;
    var foodResponse;

    // Random food fact API call
    var triviaQueryURL = "https://api.spoonacular.com/food/trivia/random?apiKey=d7e30d059506417c82aa5dabdbdadf43";
    $.ajax({
        url: triviaQueryURL,
        method: "get",
    }).then(function (response) {
        console.log("RESPONSE", response);
        $("#foodFact").text("Random Food Fact: " + response.text)
    });

    // Function to get our nutritional info and display it
    function getFoodData(item) {
        $("#food-results-0").empty();
        $("#food-results").empty();
        $("#food-results-1").empty();
        $("#food-results-2").empty();
        
        // Nutritional info API call
        var getUrl = `${dbURL}ingr=${item}&app_id=${APIId}&app_key=${APIKey}`;
        $.ajax({
            url: getUrl,
            method: "GET"
        }).then(function (response) {
            console.log('RESPONSE', response);
            $('#food-results-0').append('<h2>Food Results</h2>');
            response.parsed.forEach(function (foodItem) {
                
                if (foodItem.food.image != null) {
                    $('#food-results').append(`<img src=${foodItem.food.image} alt=${foodItem.food.label}/>`);
                }

                $('#food-results-1').append('<h4>Food</h4>');
                $('#food-results-1').append(`<p>${foodItem.food.label}</p>`);

                $('#food-results-1').append('<h4>Category</h4>');
                $('#food-results-1').append(`<p>${foodItem.food.category}</p>`);

                $('#food-results-1').append('<h4>Carbs</h4>');
                $('#food-results-1').append(`<p>${foodItem.food.nutrients.CHOCDF} g</p>`);

                $('#food-results-1').append('<h4>Energy</h4>');
                $('#food-results-1').append(`<p>${foodItem.food.nutrients.ENERC_KCAL} cal</p>`);

                $('#food-results-2').append('<h4>Fat</h4>');
                $('#food-results-2').append(`<p>${foodItem.food.nutrients.FAT} g</p>`);

                $('#food-results-2').append('<h4>Fiber</h4>');
                $('#food-results-2').append(`<p>${foodItem.food.nutrients.FIBTG} g</p>`);

                $('#food-results-2').append('<h4>Protein</h4>');
                $('#food-results-2').append(`<p>${foodItem.food.nutrients.PROCNT} g</p>`);

                $('#food-results-2').append(`<br>`);
                $('#food-results-2').append(`<br>`);
                $('#food-results-2').append(`<br>`);
            });
        });
    };

    // Event listener for "Get Nutritional Info" button
    $("#submit").on("click", function (event) {
        event.preventDefault();

        foods = $("#food-input0").val().trim();
        console.log(foods);

        getFoodData(foods);

    });

    // Event listener for "clear" button
    $("#clear").on("click", function () {
        $("#food-results").empty();
        localStorage.removeItem("food-choice");
    });

    // Function to update "Search for Recipes Containing ___" with what is typed
    setInterval(function () {
        foods = $("#food-input0").val().trim();
        
        if (foods != undefined) {
            $("#searchBtn").text("Search for Recipes Containing " + foods);
        }
    }, 100);

    // Variable for recipe search API
    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";
    var searchQueryURL;
    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";

    // Event listener for "Search for Recipes Containing ___" button
    $("#searchBtn").on("click", function () {
        foods = $("#food-input0").val().trim();
        searchQueryURL =
            "https://api.edamam.com/search?q=" +
            foods +
            "&app_id=" +
            searchAPIId +
            "&app_key=" +
            searchAPIkey;

        // Recipe search API call
        $.ajax({
            url: searchQueryURL,
            method: "GET",
        }).then(function (response) {
            console.log("search response: ", response);
            console.log("foods: ", foods);

            // Put recipe search API results into local storage
            localStorage.setItem("food-choice", JSON.stringify(foods));
            localStorage.setItem("query", JSON.stringify(response));
            console.log(searchQueryURL);
            console.log(foodResponse);

            // Switch pages to recipes.html
            window.location.href = "recipes.html";
        });
    });
});




















