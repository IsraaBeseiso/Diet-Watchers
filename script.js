$(document).ready(function () {
  console.log("DOCUMENT READY!!!");

  $.ajax({
    url:
      "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Stack%20Overflow",
    method: "get",
  }).then(function (response) {
    console.log(response);
  });

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
    $("#searchBtn").html("Search for Recipes containing " + foods + "Chicken");

    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";
    var searchQueryURL =
      "https://api.edamam.com/search?q=" +
      foods +
      "&?q=chicken&app_id=" +
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
    });
  });

  var response = JSON.parse(localStorage.getItem("query"));
  var foodChoice = JSON.parse(localStorage.getItem("food-choice"));

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
