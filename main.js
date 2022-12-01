import { API_KEY, BASE_URL, IMG_URL, language, randomMovie } from "/api.js";

var url = BASE_URL + randomMovie + API_KEY;
console.log(url);

$("#atualizaFilme").click(function () {
  // Solicitação GET.
  fetch(url)
    .then((response) => response.json())
    .then((output) => {
      console.log(output);
      $(".randomize-content").html(`
        <div class="movie-div">
        <img src="${IMG_URL + output.poster_path}" class="movie-image"></img>
        </div>
        <div class="movie-tittle-div">
        <h1 class="movie-tittle">${output.original_title}</h1>
        <p>${output.overview}</p><br>
        <span></span><br>
        <span></span><br>
        <span></span><br>
        </div>
`);
    })
    .catch((error) => console.log(error));
});
