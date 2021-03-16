import styled, { css } from 'styled-components'

interface ButtonProps {
  height: "small" | "big";
}

export const Button = styled.button<ButtonProps>`
  margin-top: 5rem;

  background: transparent;

  border: 0.5px solid var(--blue-dark);
  border-radius: 5px;

  width: max-content;

  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 300;

  padding: ${props => (props.height === 'big') ? '1rem 2rem': '0rem 2rem'};

  transition: .1s ease-out;

  &:hover {
    background: var(--blue-dark);
    color: white;
  }
`