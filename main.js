import { API_KEY, BASE_URL, IMG_URL, language } from "/api.js";

// Solicitação GET.
fetch(API_KEY, {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
})
  // Tratamento do sucesso
  .then((response) => response.json()) // converter para json
  .then((json) => console.log(json)) //imprimir dados no console
  .catch((err) => console.log("Erro de solicitação", err)); // lidar com os erros por catch
