$(document).ready(function(){
    console.log('DOCUMENT READY!!!');
    var APIId = "4ddc0164";
    var APIId2 = "da37f968";
    var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
    var APIKey2 = "1a50ccc453bab3abc3eb37333f1a8b3e";
    var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";
    var nutURL = "https://api.edamam.com/api/nutrition-data?";
    var queryURL = dbURL + "ingr=red+apple&app_id=" + APIId + "&app_key=" + APIKey;
    var query2URL = nutURL + "ingr=one%20large%20apple&app_id=" + APIId2 +"&app_key=" + APIKey2;
    
    function getFoodData(foods) {
        var getUrl = `${dbURL}ingr=${foods}&app_id=${APIId}&app_key=${APIKey}`;
    
        $.ajax({
            url: getUrl,
            method: "GET"
        }).then(function(response){
            console.log('RESPONSE', response);
            $('#food-results').append('<h2>Food Results</h2>');

            response.parsed.forEach(function(foodItem) {
                $('#food-results').append('<h4>Food</h4>');
                $('#food-results').append(`<p>${foodItem.food.label}</p>`);
                $('#food-results').append('<h4>Category</h4>');
                $('#food-results').append(`<p>${foodItem.food.category}</p>`);

                $('#food-results').append(`<img src=${foodItem.food.image} alt=${foodItem.food.label}/>`);
                $('#food-results').append(`<h4>${foodItem.food.nutritionalValue}</h4>`);
            })

        });
    };

   

    
    $("#recipe-form").submit(function(event){
        event.preventDefault();
        var foods = $("#food-input").val();
        console.log(foods);
        getFoodData(foods);
    
    }); 

    // $.ajax({
    //     url: query2URL,
    //     method: "GET"
    // }).then(function(response){
    //     console.log(response);
    // });
})

