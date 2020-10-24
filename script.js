var APIId = "4ddc0164";
var APIId2 = "da37f968";
var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
var APIKey2 = "1a50ccc453bab3abc3eb37333f1a8b3e";
var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";
var nutURL = "https://api.edamam.com/api/nutrition-data?";
var queryURL = dbURL + "ingr=red%20apple&app_id=" + APIId + "&app_key=" + APIKey;
var query2URL = nutURL + "ingr=one%20large%20apple&app_id=" + APIId2 +"&app_key=" + APIKey2;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});
$.ajax({
    url: query2URL,
    method: "GET"
}).then(function(response){
    console.log(response);
});