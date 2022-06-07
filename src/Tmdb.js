const API_KEY = '9109ed0e3e177727363da7537deeb4d3';
const API_BASE = 'https://api.themoviedb.org/3'; // usar essa url para os melhores filmes da netflix

/* o que vai precisar pegar

- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comdedia
- terror
- romance
- documentarios
9109ed0e3e177727363da7537deeb4d3
38c007f23d5b66f36b9c3cf8d8452a4b
*/

// funçao auxiliar vai dar um Fetch na url que eu quero pegar vai pegar o jason de resultado e retorna esse json

const basicFetch = async (endpoint) => {
const req = await fetch(`${API_BASE}${endpoint}`);
const json = await req.json();
return json;
}

export default {
  // criar uma função que ela vai pegar todas essa listas que agentee pega cada colocar no seu lugar e retorna para minha aplicação
  getHomeList: async () => {
    return[  // parebteses quadrado arrei
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) //wait
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) //wait
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) //wait
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) //wait
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) //arrei
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) //wait
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) //wait
      },
      {
        slug: 'documentary',
        title: 'Documentarios',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) //wait
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId){
      switch(type){
        case 'movie':
            info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        default:
          info = null;
        break;
      }
    }

    return info;
  }
}