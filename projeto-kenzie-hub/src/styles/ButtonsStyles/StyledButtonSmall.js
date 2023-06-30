import { styled } from "styled-components"

export const StyledButtonSmall = styled.button`
    width: 90px;
    padding: 8px;

    background-color: var(--grey-3);
    color: var(--grey-0);
    border: none;
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;

    &:hover{
        background-color: var(--grey-2);
    }
`