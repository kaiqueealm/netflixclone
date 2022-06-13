import React, { useState } from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AddIcon from '@material-ui/icons/Add';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);
   

    const handBottomtArrow = () => {

      }

    const handLefetArrow = () => {  //quando ele clicar ira executar o botao da esquerda
      let x = scrollX + Math.round(window.innerWidth /2); /* vai pegar metade da tela que ira rolar mais o quando eu quero manda para o lado no botao entao se o meu x for maior do que zero que dizer que chegeui no limetepassou de 0 ele volta para zero */
      if(x > 0){
        x = 0;
      }
      setScrollX(x);
    }

    const handRightArrow = () => {  //quando ele clicar ira executar o botao da direita
      let x = scrollX - Math.round(window.innerWidth /2); 
      let listW = items.results.length * 150; //items.results.length  isso e total de filmes
      if ((window.innerWidth - listW) > x){ 
        x = (window.innerWidth - listW) - 60; //60 e o pading resteante

      }
      setScrollX(x);

      

    }



  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--bottom" onClick={handBottomtArrow}> 
        <AddIcon style={{fontSize: 50}}/>
      </div>  
      <div className="movieRow--left" onClick={handLefetArrow}> 
        <NavigateBeforeIcon style={{fontSize: 50}}/>
      </div>
      <div className="movieRow--right" onClick={handRightArrow}>
      <NavigateNextIcon style={{fontSize: 50}}/>
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX, /* pego o total vezes 150 e vai ser aplicado a todos */
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div key={key} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


//<div className="movieRow--bottom" onClick={handBottomtArrow}> 
//<AddIcon style={{fontSize: 50}}/>
//</div>  

//const handBottomtArrow = () => {
      
//}

// const localStorageAddIcon = localStorage.useState('AddIcon')