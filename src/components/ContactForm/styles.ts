import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`

export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface CancelButtonProps {
  isSendingMessage: boolean;
} 

export const CancelButton = styled.button<CancelButtonProps>`
  width: 30%;
  padding: 1rem 0;

  border: 1px solid var(--icon-grey);
  border-radius: 5px;
  
  background: none;

  color: var(--icon-grey);
  font-family: 'Rubik', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;

  transition: all .1s ease-in-out;

  &:hover {
    background: rgba(255, 0, 0, .1);

    color: red;

    border: 1px solid red;
  }

  ${props => props.isSendingMessage && css`
    pointer-events: none;
    animation: vanish-cancel-button .1s forwards ease-out;
    
    @keyframes vanish-cancel-button {
      to {
        opacity: 0;
      }
    }
  `}
`
export const SubmitButton = styled.button`
  width: 65%;
  padding: 1rem 0;

  border: 1px solid var(--blue-dark);
  border-radius: 5px;
  
  background: none;

  color: var(--blue-dark);
  font-family: 'Rubik', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;

  transition: all .05s ease-out;

  &:hover {
    background: rgba(0, 255, 0, .1);

    color: green;

    border: 1px solid green;
  }
`

export const HorizontalBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    width: 47.5%;
  }
`

export const InputBlock = styled.div`
  margin-bottom: 2rem;
`

export const InputTitle = styled.h2`
  font-size: 1.1rem;
  color: var(--title-primary);
  margin-bottom: 1rem;
  font-weight: 500;
`

export const Introduction = styled.p`
  width: 100%;
  margin: 2rem 0 2rem 0;
  color: var(--text-secondary);
`

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    max-width: 60%;
    margin: 1rem 0 2rem 0;
  }
`

export const SuccessSvg = styled.svg`
  margin: 4rem 0 1rem 0;

  circle {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: success-dash 2s ease-in-out forwards;
  }

  @keyframes success-dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  path {
    transform-origin: center center;
    opacity: 0;
    transform: scale(0);

    animation: success-pop-in .4s ease-in-out forwards;
  }

  @keyframes success-pop-in {
    from {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const MessageSentTitle = styled.h1`
  font-size: 1.75rem;
`

export const GoBackButton = styled.button`
  margin: 2rem 0;

  background: transparent;

  cursor: pointer;

  border: 0.5px solid var(--blue-dark);
  border-radius: 5px;

  width: max-content;

  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 300;

  padding: 1rem 3rem;

  transition: .1s ease-out;

  &:hover {
    background: var(--blue-dark);
    color: white;
  }
`
