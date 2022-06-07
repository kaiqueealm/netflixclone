import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
  console.log(item);

  let firstDate = new Date(item.first_air_date); //pego uma data jogo dentro do date do javascript
  let genres = [];
  for(let i in item.genres){
    genres.push( item.genres[i].name ); // jogo dentro de wait
  }
  
  let description = item.overview;
  if (description.length > 200) //se for description.length maior do que 200 caracters description = a description.subtring e eu concateno com 3 pontinhos
  {
    description = description.substring(0, 150)+'...';
  }


  return (
    <section className='featured' style={{
      backgroundSize: 'cover', // fazer que aperesa o maximo possivel da imagem
      backgroundPosition: 'center', 
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      
    }}>
      <div className="featured--vertical">
          <div className="featured--horizontal">
                <div className="featured--name">
                  {item.original_name}
                </div>
                <div className="featured--info">
                <div className="featured--points">
                  {item.vote_average} pontos
                </div>
                <div className="featured--year">
                  {firstDate.getFullYear()}
                </div>
                <div className="featured--seasons">
                  {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                </div>
                </div>
                <div className="featured--description">
                  {description}
                </div>
                <div className="featured--buttons">
                  <a href={`/watch/${item.id}`} className="featured--watchbutton">▶ Assistir</a>
                  <a href=''className="featured--mylistbutton">  + Minha Lista</a>
                </div>
                <div  className="featured--genres">
                  <strong>Gêneros:</strong> {genres.join(', ')}
              </div>
          </div>
      </div><a href=""></a>
    </section>
  );
}


//{item.number_of_seasons}temporadas{item.number_of_seasons !== 1} diferente de um aparece o caso contrario nao aparesa nada 
//<div>{item.original_name}</div>

///{`list/add${item.id}`}
