import { createHtml } from "../createHtml";

export async function logMovies() {
    const response = await fetch(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
    );
    const movies = await response.json();
  
    createHtml(movies);
  }