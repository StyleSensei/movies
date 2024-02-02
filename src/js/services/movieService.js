export async function logMovies() {
  const response = await fetch(
    'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
  );
  const movies = await response.json();
  movies.forEach(movie => {
    if(movie.name === "Star Wars"){
      movie.imageUrl = "https://se.originalfilmart.com/cdn/shop/products/star_wars_1977_style_c_printers_proof_original_film_art_5000x.webp?v=1680027227"
    }
    if(movie.name === "Alien") {
      movie.imageUrl = "https://se.originalfilmart.com/cdn/shop/products/alien_1979_german_a1_original_film_art_5000x.jpg?v=1613719562"
    }
  });
  return movies;
}
