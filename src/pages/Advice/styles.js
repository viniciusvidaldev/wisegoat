import styled from 'styled-components';

export const Container = styled.div`
  button {
    position: absolute;

    border: 0;
    background: 0;

    margin: 2rem 0 0 2rem;

    h2 {
      color: var(--purple);
      font-size: 3rem;

      width: fit-content;
    }

    h3 {
      color: var(--bege);
      font-size: 2rem;

      width: fit-content;
    }

    @media screen and (max-height: 700px) {
      h2 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1rem;
      }
    }
  }
`;

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 21rem;
    height: 22rem;
    padding: 1.5rem;

    @media screen and (max-height: 700px) {
        margin-top: 3.5rem;
        height: 22rem;
        width: 20rem;
    }

    @media screen and (max-height: 700px){
      height: 25rem;
    }

    background: rgba(186, 161, 147, 0.2);

    color: var(--purple);

    span {
      margin-top: 0.5rem;
      display: flex;
      justify-content: flex-end;

      color: rgba(186, 161, 147);
    }
  }

  button {
    margin: 0;
    margin-top: 2rem;
    width: 16rem;
    height: 3rem;

    position: static;

    border: 0;
    background: var(--purple);
    color: #fff;
    border-radius: 10px;

    font-weight: bold;
    font-size: 0.8rem;

    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.9;
      transform: scale(1.03);
    }
  }
`;
