import { styled } from "styled-components"

export const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header__nav{
        position: fixed;
        width: 100%;
        padding: 0 10px;

        display: flex;
        justify-content: center;

        background-color: var(--grey-4);
        border-bottom: 2px solid var(--grey-3);

    }

    .nav__container{
        width: 100%;
        max-width: 800px;
        padding: 25px 0px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header__content{
        width: 100%;
        padding: 150px 10px 50px 10px;

        display: flex;
        justify-content: center;

        border-bottom: 2px solid var(--grey-3);
    }

    .content__container{
        width: 100%;
        max-width: 800px;
        gap: 15px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`