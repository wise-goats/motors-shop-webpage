import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

:root{
    --font-family-title: 'Lexend', sans-serif;
    --font-family-text: 'Inter', sans-serif;

    --brand-1: #4529E6;
    --brand-2: #5126EA;
    --brand-3:#B0A6F0;
    --brand-4: #EDEAFD;

    --grey-0: #0B0D0D;
    --grey-1: #212529;
    --grey-2: #495057;
    --grey-3: #868E96;
    --grey-4: #ADB5BD;
    --grey-5: #CED4DA;
    --grey-6: #DEE2E6;
    --grey-7: #E9ECEF;
    --grey-8: #F1F3F5;
    --grey-9: #F8F9FA;
    --grey-10: #FDFDFD;
    --white-fixed: #FFFFFF;

    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;

    --success-1: #18794E;
    --success-2: #CCEBD7;
    --success-3: #DDF3E4;

    --random-1: #E34D8C;
    --random-2: #E34D8C;
    --random-3: #7D2A4D;
    --random-4: #7000FF;
    --random-5: #6200E3;
    --random-6: #36007D;
    --random-7: #349974;
    --random-8: #2A7D5F;
    --random-9: #153D2E;
    --random-10: #6100FF;
    --random-11: #5700E3;
    --random-12: #30007D;
    
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Lexend', sans-serif;
}
p, label, caption, span, ::placeholder, input {
    font-family: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

body::-webkit-scrollbar {
    width: 10px;
}
body::-webkit-scrollbar-track {
    background: var(--grey-0);
    border: 2px solid var(--grey-0);
}
body::-webkit-scrollbar-thumb {
    background-color: var(--sky-2);
    border-radius: 20px;
    border: 2px solid var(--grey-0);
}

button{
    cursor: pointer;
    border: none;
    background: transparent;
}

ul,ol{
    margin: 0;
    padding: 0;
    list-style: none;
}

li{
    list-style: none;
}
  .container{
  margin: 0 auto;
  width: 100%;
  max-width:1440px;
  padding: 0 2rem;
 
}

//Reset
html, body, div, span, h1, h2, h3, h4, p, a, em, img, small, strong, ol, ul, li, 
fieldset, button, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
figure, figcaption, footer, header, menu, nav, section, audio, video, input, select, option{
    margin: 0;
    border: 0;
    padding: 0;
    font-size: 100%;

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


.container{
    max-width: 1600px;
}
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`;
