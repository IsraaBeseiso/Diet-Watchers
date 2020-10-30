$(document).ready(function () {
    console.log('DOCUMENT READY!!!');
    var APIId = "4ddc0164";
    var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
    var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";
    var foods;
    var foodResponse;

    function getFoodData(item) {
        $("#food-results-0").empty();
        $("#food-results").empty();
        $("#food-results-1").empty();
        $("#food-results-2").empty();
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
                console.log(foodItem);
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

    $("#submit").on("click", function (event) {
        event.preventDefault();
        foods = $("#food-input0").val().trim();
        console.log(foods);
        getFoodData(foods);

    });

    $("#clear").on("click", function () {
        $("#food-results").empty();
        localStorage.removeItem("food-choice");
    });


    console.log(window);

    setInterval(function () {
        foods = $("#food-input0").val().trim();
        if (foods != undefined) {
            $("#searchBtn").text("Search for Recipes Containing " + foods);
        }
    }, 100);
    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";
    var searchQueryURL;
    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";
    console.log(searchQueryURL);

    $("#searchBtn").on("click", function () {
        foods = $("#food-input0").val().trim();
        searchQueryURL =
            "https://api.edamam.com/search?q=" +
            foods +
            "&app_id=" +
            searchAPIId +
            "&app_key=" +
            searchAPIkey;
        $.ajax({
            url: searchQueryURL,
            method: "GET",
        }).then(function (response) {
            console.log("search response: ", response);
            console.log("foods: ", foods);
            localStorage.setItem("food-choice", JSON.stringify(foods));
            //setting up local storage before the page change
            localStorage.setItem("query", JSON.stringify(response));
            console.log(searchQueryURL);
            console.log(foodResponse);
            window.location.href = "recipes.html";
        });
    });
});




















