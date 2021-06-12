import styled from 'styled-components/macro'

export const Container = styled.div`
`

export const Text = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(.5rem + 1vw);
    font-weight: bold;
    margin: 0;
    margin-top: 1rem;
`

export const PopButton = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 2rem;
`   
export const InnerButton = styled.a`
    border: none;
    background: transparent;
    font-size: calc(.5rem + 3.5vw);
    cursor: pointer;

    svg {
        color: green;
    }
`