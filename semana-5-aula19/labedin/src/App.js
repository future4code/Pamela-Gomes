import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './components/img/eu.jpg';
import Emailfoto from './components/img/gmail.png';
import Prof from './components/img/índice.png';
import Local from './components/img/local.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Pamela Rane" 
          descricao="Oi, eu sou Pamela Rane. Estou fazer uma mudança radical de carreira sou estudante na Labenu."
        />
        
      
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      
      </div>

        <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://png.pngtree.com/png-clipart/20200727/original/pngtree-pizza-logo-or-label-pizzeria-food-concept-vector-png-image_5305137.jpg" 
          nome="Pizza Food" 
          descricao="O melhor para você!" 
        />
        
        <CardGrande 
          imagem={Prof} 
          nome="Google" 
          descricao="eita sonho bom." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
