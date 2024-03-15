import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Lato", sans-serif;
        text-decoration: none;
    }

    body {
        background-color: #ebf6ff;
    }

    #root {
        height: 100vh;
    }
    
    ul, li {
        list-style: none;
    }
`;
