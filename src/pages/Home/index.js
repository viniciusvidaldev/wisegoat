import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Main } from './styles';

import bodezinho from '../../assets/bodezinho.png';

function Home() {
  let history = useHistory();

  return (
    <Container>
      <Main>
        <h2>Wise</h2>
        <h1>Goat</h1>
        <button onClick={() => history.push('./advice')}>Pedir conselho</button>
      </Main>

      <aside>
        <img src={bodezinho} alt="bodezinho" />
      </aside>
    </Container>
  );
}

export default Home;
