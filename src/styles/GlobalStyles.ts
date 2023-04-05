import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600&display=swap');


//Reset
html, body, div, span, h1, h2, h3, h4, p, a, em, img, small, strong, ol, ul, li, 
fieldset, button, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
figure, figcaption, footer, header, menu, nav, section, audio, video, input, select, option{
    margin: 0;
    border: 0;
    padding: 0;
    font-size: 100%;
    font-family: 'Nunito', sans-serif;
    color: var(--grey-4);

    text-decoration: none;
    display: block;
    box-sizing: border-box;
    line-height: 1;
    list-style: none;
    border: 0;
}
html,body{
    width: 100vw;
    height: 100vh;
}

`;
