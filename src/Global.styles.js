import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

*{
    font-family: 'Ubuntu', sans-serif;
}

body{
    margin: 0;
    padding: 0;
}
h1,h2,h3{
    margin: 0;
}
`;
