import styled, { createGlobalStyle } from 'styled-components';
// import BGImage from './images/trent-haaland.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    //// background-image: url();
    // background: radial-gradient(circle, rgba(238,174,202,1) 10%, rgba(148,187,233,1) 100%);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    // background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
    // background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    // background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    // background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
    // background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
    // background: linear-gradient(to right, #74ebd5, #9face6);

    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: black;
  }
  .score {
    color: black;
    font-size: 2rem;
    margin-down: 0.5px;
  }
  h1 {
    font-family: Fascinate Inline;
    background: -webkit-linear-gradient(120deg, #74ebd5, #9face6);
    // background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    ////  background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: bold;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    //// filter: drop-shadow(2px 2px #0085a3);
    // filter: drop-shadow(3px 3px black);
    text-shadow: 1px 1px 2px #74ebd5, 0 0 1em blue, 0 0 0.2em blue;
    color: black;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(to right, #74ebd5, #9face6);
    // background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    //// background: linear-gradient(180deg, #ffffff, #ffcc91);
    //// border: 2px solid #d38558;
    border: 2px solid black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }

  `;
