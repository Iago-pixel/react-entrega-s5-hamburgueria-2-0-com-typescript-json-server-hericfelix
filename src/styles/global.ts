import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --primary: #27AE60;
    --secondary: #EB5757;
    --grey-600: #333333;
    --grey-300: #828282;
    --grey-100: #E0E0E0;
    --grey-0:#F5F5F5;
    --negative:#E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Inter', sans-serif;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul, figure {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

h1 {
  font-size: 26px;
  font-weight: bold;
}

h2 {
  font-size: 22px;
  font-weight: bold;
}

h3 {
  font-size: 18px;
  font-weight: bold;
}
::-webkit-scrollbar {
        width: 7px; 
        height: 10px;         
    }
  
    ::-webkit-scrollbar-thumb {
        background-color: var(--grey-100);  
        border-radius: 20px;      
    }

`;
