import { styled } from "styled-components";

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: none;

    input{
        background-color: var(--grey-2);
        padding: 15px;
        border: 1px solid transparent;
        border-radius: 4px;
        color: var(--grey-0);
    }

    input:focus{
        border: 1px solid var(--grey-0);
        border-radius: 4px;
    }
`