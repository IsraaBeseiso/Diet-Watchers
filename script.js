$(document).ready(function () {
    console.log('DOCUMENT READY!!!');
    var APIId = "4ddc0164";
    var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
    var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";
    var foodCount = [0];
    function getFoodData(foods) {
        $("#food-results").empty();
        var getUrl = `${dbURL}ingr=${foods}&app_id=${APIId}&app_key=${APIKey}`;
        $.ajax({
            url: getUrl,
            method: "GET"
        }).then(function (response) {
            console.log('RESPONSE', response);
            $('#food-results').append('<h2>Food Results</h2>');
            response.parsed.forEach(function (foodItem) {
                if (foodItem.food.image != null) {
                    $('#food-results').append(`<img src=${foodItem.food.image} alt=${foodItem.food.label}/>`);
                }
                $('#food-results').append('<h4>Food</h4>');
                $('#food-results').append(`<p>${foodItem.food.label}</p>`);
                $('#food-results').append('<h4>Category</h4>');
                $('#food-results').append(`<p>${foodItem.food.category}</p>`);
                console.log(foodItem);
                $('#food-results').append('<h4>Carbs</h4>');
                $('#food-results').append(`<p>${foodItem.food.nutrients.CHOCDF}</p>`);
                $('#food-results').append('<h4>Energy</h4>');
                $('#food-results').append(`<p>${foodItem.food.nutrients.ENERC_KCAL}</p>`);
                $('#food-results').append('<h4>Fat</h4>');
                $('#food-results').append(`<p>${foodItem.food.nutrients.FAT}</p>`);
                $('#food-results').append('<h4>Fiber</h4>');
                $('#food-results').append(`<p>${foodItem.food.nutrients.FIBTG}</p>`);
                $('#food-results').append('<h4>Protein</h4>');
                $('#food-results').append(`<p>${foodItem.food.nutrients.PROCNT}</p>`);
            });
        });
    };
    $("#submit").on("click", function (event) {
        event.preventDefault();
        for (var i = 0; i < foodCount.length; i++) {
            var foods = $("#food-input" + foodCount[i]).val();
            console.log(foods);
            getFoodData(foods);
        }
    });
    $("#addIng").on("click", function () {
        var texts = $("<textarea>").addClass("form-control row").attr("type", "text").insertAfter("#food-input" + (foodCount.length - 1));
        var texts = $("<input>").addClass("form-control row").attr("type", "text").insertAfter("#food-input" + (foodCount.length - 1));
        texts.attr("id", "food-input" + foodCount.length);
        foodCount.push(foodCount.length);
    })

    $("#clear").on("click", function () {
        $("#food-results").empty();
    })
});
    // $.ajax({
    //     url: query2URL,
    //     method: "GET"