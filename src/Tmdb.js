const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const APT_BASE = 'https://api.themoviedb.org/3';
/*
- originais da netflix
recomendados
em alta (top rated)
ação
comdia
terror
romance
documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch ('${API_BASE}${endpoit}');
    const json = await req.json();
    return json;
}   

export default {
    getHomeList: async () =>{
        return[
            {
                  slug: 'originals',
                  title: 'Originais do Netflix',
                  itens: await basicFetch ('/discover/tv?whith_network=213&language=pt-BR&api_key=${API_KEY}')
                },
              {
                  slug: 'trending',
                  title: 'Recomendado para você',
                  itens: await basicFetch ('/trending/all/week?language=pt-BR&api_key=${API_KEY}')
                },
             {
                  slug: 'topretade',
                  title: 'Em alta',
                  itens: await basicFetch ('/movie/top_retade?language=pt-BR&api_key=${API_KEY}')
                },
             {
                  slug: 'Action',
                  title: 'Ação',
                  itens: await basicFetch ('/discover/movie?whith_genres=28&language=pt-BR&api_key=${API_KEY}')
                },
             {
                  slug: 'comedy',
                  title: 'Comédia',
                  itens: await basicFetch ('/discover/movie?whith_genres=35&language=pt-BR&api_key=${API_KEY}')
                },
             {
                  slug: 'horror',
                  title: 'Terror',
                  itens: await basicFetch ('/discover/movie?whith_genres=27&language=pt-BR&api_key=${API_KEY}')
                },
             {
                  slug: 'romance',
                  title: 'Romance',
                  itens: await basicFetch ('/discover/movie?whith_genres=10749&language=pt-BR&api_key=${API_KEY}')
                },
             {
                  slug: 'documentary',
                  title: 'Documentário',
                  itens: await basicFetch ('/discover/movie?whith_genres=99&language=pt-BR&api_key=${API_KEY}')
                },
        ];
    },
    getMovieInfo: async (movieId, type) =>{
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch('/movie/${movieId}?language=pt-BR&api_key=${API_KEY}');
                break;
                case 'tv':
                    info = await basicFetch('/tv/${movieId}?language=pt-BR&api_key=${API_KEY}');
                break;
                default: 
                  info = null;
                break;  
            }
        }

        return info;
        
    }
}
    
         
       


             
