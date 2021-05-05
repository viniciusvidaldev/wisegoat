import styled from 'styled-components';

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

    @media screen and (max-width: 630px) {
      margin-left: 0;
      margin-top: 3rem;
    }

    img {
      width: 500px;
      height: 500px;

      @media screen and (max-width: 880px) {
        width: 300px;
        height: 300px;
      }

      @media screen and (max-width: 630px) {
        width: 200px;
        height: 200px;
      }

      @media screen and (max-width: 350px) {
        width: 150px;
        height: 150px;
      }
    }
  }

  @media screen and (max-width: 630px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5rem;
  }

  @media screen and (max-height: 700px) {
    margin-top: 3rem;
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

    transition: all 0.2 ease-in-out;

    &:hover {
      opacity: 0.9;
      transform: scale(1.03);
    }
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
      padding: 0.8rem 1.8rem;
      border-radius: 13px;
      margin-top: 4rem;

      font-size: 1.2rem;
      font-weight: bold;

      width: 250px;
      height: 60px;
    }

    @media screen and (max-width: 350px) {
      button {
        margin-top: 1rem;
      }
    }
  }
`;
