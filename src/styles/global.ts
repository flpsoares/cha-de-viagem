import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
    color: white;
  }

  html {
    background: #191622;
    color: white;
    font-family: 'Comic Neue', cursive;
  }
`
