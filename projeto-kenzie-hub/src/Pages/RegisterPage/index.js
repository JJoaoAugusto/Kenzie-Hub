import { styled } from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header__register{
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30px;
    }

    .header__register button:hover{
        background-color: var(--grey-2);
    }

    .form__header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 10px 0;
    }
`