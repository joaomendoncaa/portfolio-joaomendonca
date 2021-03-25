import styled, { css } from 'styled-components'

export const Main = styled.div`
  height: 100vh;

  max-width: 90%;

  margin: 0 auto;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {}
  @media (min-width: 900px) {
    max-width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
    max-width: 1100px;
  }
  @media (min-width: 1800px) {
    max-width: 1200px;
  }
`

interface ContentWrapperProps {
  isLeavingLanding: boolean;
  animationMilliseconds: number;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${props => props.isLeavingLanding && css`
    animation: vanish ${props.animationMilliseconds}ms forwards ease-in-out;

    @keyframes vanish {
      to {
        opacity: 0;
        transform: scale(0.95);
      }
    }
  `}

  max-height: 60%;

  display: flex;
  flex-direction: column; 

  @media (min-width: 600px) {}
  @media (min-width: 900px) {
    max-height: 100%;
    max-width: 50%;
  }
  @media (min-width: 1200px) {}
  @media (min-width: 1800px) {}

  > span { 
    font-size: 1rem;
    font-weight:  400;
    color: var(--text-primary);
  }

  > h1, > h2 { 
    font-size: 2rem;
    font-weight: 700;

    @media (min-width: 600px) {
      font-size: 2rem;
    }
    @media (min-width: 900px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1800px) {
      font-size: 3.75rem;
    }
  }

  >h1 { 
    color: var(--title-primary);
  }

  > h2 { 
    color: var(--title-secondary);
  }

  > p {
    margin-top: 2rem;
    color: var(--text-secondary);

    max-width: 500px;
  }
`

export const ContactPageLink = styled.button`
  margin: 4rem 0 7rem 0;

  background: transparent;

  cursor: pointer;

  border: 0.5px solid var(--blue-dark);
  border-radius: 5px;

  width: max-content;

  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 300;

  padding: 1rem 2rem;

  transition: .1s ease-out;

  &:hover {
    background: var(--blue-dark);
    color: white;
  }
`