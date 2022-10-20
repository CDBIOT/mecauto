
import styled, { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background: #1212;
    
}
body p{
    font-size: 0.8em;
}

`
export default global;