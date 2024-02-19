import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 1px solid ${(props) => props.theme['blue-500']};
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    
    color: ${(props) => props.theme['gray-100']};
  }

  body {
    background: ${(props) => props.theme['gray-600']};
  }
`
