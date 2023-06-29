import { styled } from "styled-components"

export const StyledSection = styled.section`
    width: 100%;
    padding: 25px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    .tech__header{
        width: 100%;
        max-width: 800px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tech__header button{
        padding: 0;
        border: none;
        background-color: transparent;
    }
    `