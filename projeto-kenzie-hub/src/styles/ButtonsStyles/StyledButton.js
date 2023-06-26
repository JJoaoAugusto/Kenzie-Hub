import { styled } from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    padding: 15px;

    background-color: var(--grey-1);
    color: var(--grey-0);
    border: none;
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;
    
    &:hover{
        background-color: var(--grey-2);
    }
`