import { styled } from "styled-components";

export const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header__nav{
        position: fixed;
        width: 100%;
        padding: 25px 0;

        display: flex;
        justify-content: center;

        background-color: var(--grey-4);
        border-bottom: 2px solid var(--grey-3);

    }

    .nav__container{
        width: 100%;
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__container button{
        width: 90px;
    }

    .nav__container button:hover{
        background-color: var(--grey-2);
    }

    .header__content{
        width: 100%;
        padding: 150px 0 50px 0;

        display: flex;
        justify-content: center;

        border-bottom: 2px solid var(--grey-3);
    }

    .content__container{
        width: 100%;
        max-width: 800px;

        display: flex;
        justify-content: space-between;
    }
`