import styled, {keyframes} from 'styled-components/macro'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: calc(.5rem + 1vw);
    font-weight: bold;
`
export const ContactText = styled.div`
    margin-right: 1rem;

    @media screen and (max-width: 650px){
        margin-right: 0;
    }
`

export const FormContainer = styled.div`
    height: 100%;
    display: flex;
`

export const Form = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
`

export const InputContainer = styled.div`
    margin-top: .5vw;

    input {
        width: calc(8rem + 20vw);
        border: none;
        border-bottom: 2px solid black;

        &::placeholder {
            font-weight: bold;
        }

        &:focus {
            outline: none;
        }
    }
`

export const Error = styled.div`
    position: absolute;
    top: 1rem;
    left: 0;
    color: red;
`

export const SendButton = styled.button `
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: calc(.5rem + 1vw);
    font-weight: bold;
    width: calc(1.5rem + 1vw);
    height: calc(1.5rem + 1vw);
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoaderAnimation = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`

export const Loader = styled.div`
    
svg {
        animation-name: ${LoaderAnimation} .5s inifinite;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }
`