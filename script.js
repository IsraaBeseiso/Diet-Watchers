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

    //edamam search api call

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
    console.log("hello");
    $("#recipeHead").html("Your Recipes containing " + foodChoice);
    console.log("hello");
    for (i = 0; i < 8; i++) {
      var recTitle = response.hits[i].recipe.label;
      var recImg = response.hits[i].recipe.image;
      var recDiet = response.hits[i].recipe.dietLabels;
      var recHealth = response.hits[i].recipe.healthLabels;
      var recURL = response.hits[i].recipe.url;
      console.log(recTitle);
      console.log(recImg);
      console.log(recDiet);
      console.log(recHealth);
      console.log(recURL);

      $("#card").html;
      $("#recipeImg").html("src", "recImg");
      $("#recipeTitle").html(recTitle);
      //$(this, ".recipe-diet").html(recDiet);
      //$(this, ".recipe-health").html(recHealth);
      $("#recipeURL").html("recURL");

      $("#card").append("#card");
    }
  }
});
