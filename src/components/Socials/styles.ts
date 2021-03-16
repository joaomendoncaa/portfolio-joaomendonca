import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: auto;

  &:after {
    content: '';
    position: absolute;
    background: var(--icon-grey);
    height: 2px;
    border-radius: 2px;
    width: 200px;

    z-index: 1;

    top: calc(50% - 1px);

    left: -220px;
    right: 0;
  }
`

export const SocialLink = styled.a`
  padding: 0 .5rem;

  outline: none;

  transform-origin: center center;

  svg { 
    pointer-events: none;
    transition: .2s ease-out;
  }

  &:hover {
    svg { 
      transform: translateY(-5px);
      path {
        fill: var(--blue-dark); 
      }
    }
  }
`

export const DirectionText = styled.p`
  margin-left: 1rem;

  color: var(--text-secondary);

  span {
    margin-left: .3rem;
    color: var(--text-secondary);
  }

  strong {
    font-weight: 400;
    color: var(--text-primary);
    margin-left: .3rem;
  }
`