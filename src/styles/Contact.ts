import styled from 'styled-components'

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1800px) {
    max-width: 1500px;
  }
`

export const ContentWrapper = styled.div`
  max-height: 60%;

  display: flex;
  flex-direction: column; 
`

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    color: var(--icon-grey);
  }
`

export const BackLink = styled.a`
  display: flex;
  align-items: center;

  padding: .5rem 0;

  cursor: pointer;

  svg {
    transition: all .1s ease-in-out;
    width: 50px;
  }

  path {
    fill: var(--icon-grey);
  }

  &:hover {
    svg {
      width: 71px;
    }

    path {
      width: 100%;
      fill: var(--icon-blue);
    }
  }
`

