import { styled } from "styled-components"

export const StyledSelect = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: none;

    select{
        padding: 15px;
        background-color: var(--grey-2);
        color: var(--grey-0);
        border: none;
        border-radius: 4px;
    }   
`