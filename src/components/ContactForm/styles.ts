import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CancelButton = styled.button`
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
  font-size: 1rem;
  color: var(--title-primary);
  margin-bottom: 1rem;
  font-weight: 500;
`

export const Introduction = styled.p`
  width: 100%;
  margin: 2rem 0 2rem 0;
  color: var(--text-secondary);
`