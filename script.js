<<<<<<< HEAD
$(document).ready(function () {
  console.log("DOCUMENT READY!!!");

  var APIId = "4ddc0164";
  var APIId2 = "da37f968";
  var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
  var APIKey2 = "1a50ccc453bab3abc3eb37333f1a8b3e";
  var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";
  var nutURL = "https://api.edamam.com/api/nutrition-data?";

  //constructing the queryURL for food database and nutritiondata
  var queryURL =
    dbURL + "ingr=red+apple&app_id=" + APIId + "&app_key=" + APIKey;
  var query2URL =
    nutURL +
    "ingr=one%20large%20apple&app_id=" +
    APIId2 +
    "&app_key=" +
    APIKey2;

  //calling and printing the food data
  function getFoodData(foods) {
    var getUrl = `${dbURL}ingr=${foods}&app_id=${APIId}&app_key=${APIKey}`;
    $.ajax({
      url: getUrl,
      method: "GET",
    }).then(function (response) {
      console.log("RESPONSE", response);
      $("#food-results").append("<h2>Food Results</h2>");

      response.parsed.forEach(function (foodItem) {
        $("#food-results").append("<h4>Food</h4>");
        $("#food-results").append(`<p>${foodItem.food.label}</p>`);
        $("#food-results").append("<h4>Category</h4>");
        $("#food-results").append(`<p>${foodItem.food.category}</p>`);
        $("#food-results").append(
          `<img src=${foodItem.food.image} alt=${foodItem.food.label}/>`
        );
      });
    });
  }
  //submit button, setting value of foods
  $("#recipe-form").submit(function (event) {
    event.preventDefault();
    var foods = $("#food-input").val();
    localStorage.setItem("food-choice", JSON.stringify(foods));
    getFoodData(foods);

    //EDAMAM SEARCH API CALL

    //constructing the searchQueryURL
    $("#searchBtn").html("Search for Recipes containing " + foods);

    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";
    var searchQueryURL =
      "https://api.edamam.com/search?q=" +
      foods +
      "&app_id=" +
      searchAPIId +
      "&app_key=" +
      searchAPIkey;
    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";

    searchQueryURL =
      "https://api.edamam.com/search?q=" +
      foods +
      "&app_id=" +
      searchAPIId +
      "&app_key=" +
      searchAPIkey;
    console.log(searchQueryURL);

    //calling the search query

    $.ajax({
      url: searchQueryURL,
      method: "get",
    }).then(function (response) {
      console.log(response);
      console.log(foods);

      //setting up local storage before the page change
      localStorage.setItem("query", JSON.stringify(response));
=======
$(document).ready(function(){
var APIId = "4ddc0164";
var APIId2 = "da37f968";
var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
var APIKey2 = "1a50ccc453bab3abc3eb37333f1a8b3e";
var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";
var ndetURL = "https://api.edamam.com/api/nutrition-details?"
var nutURL = "https://api.edamam.com/api/nutrition-data?";
var queryURL = dbURL + "ingr=red%20apple&app_id=" + APIId + "&app_key=" + APIKey;
var query2URL = nutURL + "ingr=one%20large%20apple&app_id=" + APIId2 + "&app_key=" + APIKey2;
var query3URL = ndetURL + "app_id=" + APIId2 + "&app_key=" + APIKey2;
var object = {
    "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
    "prep": "1. Have your butcher bone and butterfly the ham and score the fat in a diamond pattern. ...",
    "yield": "About 15 servings",
    "ingr": [
        "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
        "7 cloves garlic, minced",
        "1 tablespoon caraway seeds, crushed",
        "4 teaspoons salt",
        "Freshly ground pepper to taste",
        "1 teaspoon olive oil",
        "1 medium onion, peeled and chopped",
        "3 cups sourdough rye bread, cut into 1/2-inch cubes",
        "1 1/4 cups coarsely chopped pitted prunes",
        "1 1/4 cups coarsely chopped dried apricots",
        "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
        "2 teaspoons chopped fresh rosemary",
        "1 egg, lightly beaten",
        "1 cup chicken broth, homemade or low-sodium canned"
    ]
}
$.ajax({
    url: query3URL,
    method: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(object),
    beforeSend: function (x) {
        if (x && x.overrideMimeType) {
            x.overrideMimeType("application/j-son;charset=UTF-8");
        }
    },
}).then(function (response) {
    console.log(response);
});
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
$.ajax({
    url: query2URL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});




    console.log('DOCUMENT READY!!!');
    var APIId = "4ddc0164";
    var APIId2 = "da37f968";
    var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
    var APIKey2 = "1a50ccc453bab3abc3eb37333f1a8b3e";
    var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";
    var nutURL = "https://api.edamam.com/api/nutrition-data?";
    var queryURL = dbURL + "ingr=red+apple&app_id=" + APIId + "&app_key=" + APIKey;

    var query2URL = nutURL + "ingr=one%20large%20apple&app_id=" + APIId2 + "&app_key=" + APIKey2;
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
>>>>>>> f1ece4358a0b5355660a6113665ad3d0d5ce8b41
    });
    $("#addIng").on("click", function () {
        var texts = $("<textarea>").addClass("form-control row").attr("type", "text").insertAfter("#food-input"+(foodCount.length - 1));
        texts.attr("id", "food-input" + foodCount.length);
        foodCount.push(foodCount.length);
    })

    $("#clear").on("click",function(){
        $("#food-results").empty();
    })

<<<<<<< HEAD
  $("#searchBtn").on("click", function () {
    console.log(response);
  });

  if (window.location.pathname == "/project/recipes.html") {
    populateCards(response);
  }

  function populateCards(response) {
    $("#recipeHead").html("Your Recipes Containing: " + foodChoice);
    console.log("hello");

    var cardDeck = [
      "#card-0",
      "#card-1",
      "#card-2",
      "#card-3",
      "#card-4",
      "#card-5",
      "#card-6",
      "#card-7",
      "#card-8",
      "#card-9",
    ];

    for (i = 0; i < 10; i++) {
      var recTitle = response.hits[i].recipe.label;
      var recImg = response.hits[i].recipe.image;
      var recURL = response.hits[i].recipe.url;
      console.log(recTitle);
      console.log(recImg);
      console.log(recURL);
      console.log(cardDeck);

      $(cardDeck[i]);
      $("#recipeTitle-" + [i]).text(recTitle);
      $("#recipeURL-" + [i])
        .html(recURL)
        .attr("href", recURL);
      $("#recipeImg-" + [i]).attr("src", recImg);
    }
  }
});
=======

                $('#food-results').append(`<img src=${foodItem.food.image} alt=${foodItem.food.label}/>`);
            })
            

        });
    };
    
    $("#recipe-form").submit(function(event){
        event.preventDefault();
        var foods = $("#food-input").val();

        getFoodData(foods);
    }); 


})
>>>>>>> f1ece4358a0b5355660a6113665ad3d0d5ce8b41
