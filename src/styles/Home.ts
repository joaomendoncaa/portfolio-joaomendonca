import styled from 'styled-components'

export const Main = styled.div`
  height: 100vh;

  max-width: 500px;

  margin: 0 auto;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {}
  @media (min-width: 900px) {
    max-width: 750px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
    max-width: 1100px;
  }
  @media (min-width: 1800px) {
    padding: 0 2.5rem;
    max-width: 1500px;
  }
`

export const ContentWrapper = styled.div`
  height: 34.625rem;

  display: flex;
  flex-direction: column;

  > span { 
    font-size: 1rem;
    font-weight:  400;
    color: var(--text-primary);
  }

  > h1, > h2 { 
    font-size: 4rem;
    font-weight: 700;
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