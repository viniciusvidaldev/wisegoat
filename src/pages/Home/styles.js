import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  aside {
    margin-left: 9rem;

    @media screen and (max-width: 1020px) {
      margin-left: 4rem;
    }
    
    img {
      width: 500px;
      height: 500px;

      @media screen and (max-width: 880px) {
        width: 300px;
        height: 300px;
      }
    }
  }
`;

export const Main = styled.div`
  h1 {
    color: var(--purple);
    font-size: 8rem;
  }

  h2 {
    color: var(--bege);
    font-size: 3.5rem;
  }
  
  button {
    border: 0;
    background: var(--purple);
    color: white;
    padding: 1rem 2rem;
    border-radius: 13px;
    margin-top: 5rem;
    
    font-size: 1.5rem;
    font-weight: bold;

    width: 300px;
    height: 60px;
  }

  @media screen and (max-width: 880px) {
    h1 {
    color: var(--purple);
    font-size: 7rem;
  }

  h2 {
    color: var(--bege);
    font-size: 3rem;
  }
  
  button {
    border: 0;
    background: var(--purple);
    color: white;
    padding: .8rem 1.8rem;
    border-radius: 13px;
    margin-top: 4rem;
    
    font-size: 1.2rem;
    font-weight: bold;

    width: 250px;
    height: 60px;
  }
  }
`;