import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Wrapper } from './styles';

function Advice() {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch('https://api.adviceslip.com/advice');
        const data = await resp.json();
        setAdvices(data.slip.advice);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const newAdvice = () => {
    (async () => {
      try {
        const resp = await fetch('https://api.adviceslip.com/advice');
        const data = await resp.json();
        setAdvices(data.slip.advice);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  let history = useHistory();

  return (
    <Container>
      <button onClick={() => history.push('/')}>
        <h3>Wise</h3>
        <h2>Goat</h2>
      </button>

      <Wrapper>
        <div>
          <h1>{advices}</h1>
          <span>-Goat</span>
        </div>

        <button onClick={newAdvice}>New Advice</button>
      </Wrapper>
    </Container>
  );
}

export default Advice;
