var foodResponse = JSON.parse(localStorage.getItem("query"));
var foodChoice = JSON.parse(localStorage.getItem("food-choice"));

populateCards(foodResponse);

function populateCards(foodThing) {
    $("#recipeHead").html("Your Recipes Containing: " + foodChoice);
    console.log("hello");
    for (i = 0; i < 10; i++) {
        var recTitle = foodThing.hits[i].recipe.label;
        var recImg = foodThing.hits[i].recipe.image;
        var recURL = foodThing.hits[i].recipe.url;
        console.log(recTitle);
        console.log(recImg);
        console.log(recURL);
        $("#card-" + i);
        $("#recipeTitle-" + i).text(recTitle);
        $("#recipeURL-" + i)
            .html(recURL)
            .attr("href", recURL);
        $("#recipeImg-" + i).attr("src", recImg);
    }
}