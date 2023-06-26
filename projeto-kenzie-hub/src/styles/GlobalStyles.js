import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
    }

    body, html{
        width: 100%;
        height: 100vh;
    }

    body{
        background-color: var(--grey-4);
        font-family: 'Inter', sans-serif;
        color: var(--grey-0);
    }

    ul, ol{
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: var(--color-grey-0);
    }

    .bkColor__grey-1{
        background-color: var(--grey-1);
    }

    .bkColor__grey-2{
        background-color: var(--grey-2);
    }   

    .bkColor__grey-3{
        background-color: var(--grey-3);
    }

    .bkColor__primary{
        background-color: var(--color-primary);
    }
    .bkColor__primary:hover{
        background-color: var(--color-primary-focus);
    }

    .bkColor__primary-negative{
        background-color: var(--color-primary-negative);
    }
    .bkColor__primary-negative:hover{
        background-color: var(--grey-1);
    }

    .kenzieHub__logo{
        width: 145px;
        height: 20px;
    }
`