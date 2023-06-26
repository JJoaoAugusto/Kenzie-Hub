import { styled } from "styled-components"

export const StyledCreateModal = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.3);

    .modal__container {
        position: relative;
        display: flex;
        flex-direction: column;

        width: 100%;
        max-width: 400px;
        margin: 10px;
        gap: 15px;

        background-color: var(--grey-3);
        color: var(--grey-0);
        border-radius: 0px 0px 4px 4px;
    }

    .modal__header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        padding: 15px 20px;

        background-color: var(--grey-2);
        border-radius: 4px 4px 0px 0px;
    }

    .modal__header button{
        font-size: 16px;
        font-weight: 600;
        padding: 0;

        color: var(--grey-1);
        border: none;
        background-color: transparent;
    }

    .modal__content{
        display: flex;
        flex-direction: column;

        gap: 15px;
        padding: 0px 20px 20px 20px;

    }

    .modal__content button{
        margin: 15px 0px;
    }
    
`