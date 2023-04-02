


function getQuote() { 
// affirmations/insipration quotes section
let affirmation_url = "https://type.fit/api/quotes";
let randNum = Math.floor(Math.random() * 1500);
  
fetch(affirmation_url, {headers: {
      "Content-Type": "application/json"}})

.then(function(response) {
return response.json();
})
.then(function(json) {
$(".insQ").html(`<h5>${json[randNum].text}</h5>`);
$(".insA").html(`<h5>- ${json[randNum].author}</h5>`);
 
  // Is working, eventually shift to modifying a div (big text quote) with a button that generates
});
  
}

getQuote();

$(".refreshQ").click(function() {
console.log("clicked!")
getQuote();
});


// anime recommedation section
// $(".search").click(function() {
// let userQuery = $(".searchbar").val();  
// $(".content").empty();
// getAnime(userQuery);
// $(".content").show();
// });

// getAnime("Code Geass");

function getAnime(userSearch) { 
let jikan_url = `https://api.jikan.moe/v4/anime?q=${userSearch}&sfw?score=8`;

fetch(jikan_url) 
.then(function(response) {
return response.json();
})
  
.then(function(json) {
console.log(json.data[0]);


// $(".main").append(`<img src=${json.data[0].images.original.url}>`
let img = "ani_image";
let imgT = "boxy";
let pt = "text";
let ts = "testStuff"

for (let i = 0; i < 6; i++) {
$(".content").append(`
<div class=${imgT}> 
<div>
<img class="${img}" src="${json.data[i].images.jpg.large_image_url}">
<h3 class=${ts}> ${json.data[i].title}
</h3>
<h4 > Ranking (Overall): #${json.data[i].rank}
</h4>
<h4 > Score: ${json.data[i].score} / 10
</h4>
<h4 > Popularity (Overall): #${json.data[i].popularity}
</h4>
</div>
<details class="testingthis">
<summary>Anime Synopsis</summary>
<p class="${pt}">${json.data[i].synopsis}</p>
</details> 
</div>
`)
}
  
});

}

$(".search").click(function() {
let userQuery = $(".searchbar").val();  
$(".content").empty();
getAnime(userQuery);
$(".content").show();
});

getAnime("Code Geass");

  

// .then(function(json) {
// console.log(json.affirmation[0]);
// });

