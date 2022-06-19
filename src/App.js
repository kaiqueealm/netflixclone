import React, { useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import useTheme from './components/hooks/movieList';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null)//para que utiliza useState interagir variavel do progama com o formulario
  const [blackHeader, setBlackHeader] = useState(false)






  useEffect(()=>{
    const loadAll = async () => {
      // "pegando":Unknowm w a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()* (originals[0].items.results.length - 1)); // pega o math que e filme e multiplicar pela quantidade de filme que tenho na minha lista para gerar um numero aleatorio
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else{
        setBlackHeader (false)
      }
    }
      

    window.addEventListener('scroll', scrollListener);

    return() => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    
    <div className='page'>

      <Header black={blackHeader}/>

    {featuredData &&
      <FeaturedMovie item={featuredData} />
    }


      <section className='lists'>
        {movieList.map((item, key)=> (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito por Kaique Almeida <br />
        Direitod de imagens para Netiflix <br />
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className='loading '> 
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" />
        </div>
      }
    </div>


  );




}


// <div className='loading '>  para carregar mais rapido a pagina