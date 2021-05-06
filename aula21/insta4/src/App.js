import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Pamela'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://imagens-revista.vivadecora.com.br/uploads/2018/01/cadeira-rosa-para-decora%C3%A7%C3%A3o-de-quarto-gamer-feminino-Foto-Sweet-Magic.jpg'}
        />
        <Post
        nomeUsuario={'Ana'}
        fotoUsuario={'https://picsum.photos/50/52'}
        fotoPost={'https://i.pinimg.com/originals/5c/1c/af/5c1cafe0f68aceeb6135c5c591546e44.png'}
        />
        <Post
        nomeUsuario={'Klaus'}
        fotoUsuario={'https://picsum.photos/50/55'}
        fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>
    );
    /* novoPost; {
      
    } */
  }
}

export default App;
