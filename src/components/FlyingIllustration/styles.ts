import styled, { css } from 'styled-components'

export const Container = styled.div`
  overflow: hidden;

  position: relative;

  width: var(--illustration-width);
  height: calc(var(--illustration-width) * 181 / 228);
  /* aspect-ratio: 228 / 181; */

  animation: appear .4s forwards ease-in;

  @keyframes appear {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
`

export const IllustrationSvg = styled.svg`
  position: absolute;

  z-index: 1;
  bottom: 0;
  right: 0;

  width: 200%;
  height: 200%;
`

export const FirstLayer = styled.g`
  animation: slide 15s linear infinite;

  @keyframes slide {
      from {
          transform: translateX(0%);
      }
      to {
          transform: translateX(50%);
      }
  }
`

export const SecondLayer = styled.g`
  animation: slide 5s linear infinite;

  filter: blur(.1px);

  @keyframes slide {
      from {
          transform: translateX(0%);
      }
      to {
          transform: translateX(50%);
      }
  }
`

export const ThirdLayer = styled.g`
  animation: slide 3s linear infinite;

  filter: blur(.5px);

  @keyframes slide {
      from {
          transform: translateX(0%);
      }
      to {
          transform: translateX(50%);
      }
  }
`

export const FourthLayer = styled.g`
  animation: slide 1s linear infinite;

  filter: blur(1px);

  @keyframes slide {
      from {
          transform: translateX(0%);
      }
      to {
          transform: translateX(50%);
      }
  }
`

export const Human = styled.g`
    animation: flying 10s ease-in-out infinite;

    cursor: help;

    transform-origin: center;

    @keyframes flying {
        from {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(-7px, 6px);
        }
        50% {
            transform: translate(2px, -5px);
        }
        75% {
            transform: translate(5px, -3px);
        }
        to {
            transform: translate(0, 0);
        }
    }
`

interface HoverMessageProps {
    hasLeftHuman: boolean
}

export const HoverMessage = styled.span<HoverMessageProps>`
    position: absolute;

    background: rgba(0, 0, 0, .5);
    padding: .5rem 1rem;

    border-radius: 10px;
    text-align: center;

    width: 50%;

    z-index: 3;
    bottom: 0;
    
    left: 50%; 
    transform: translateX(-70%);

    color: white;

    span {
        margin-left: .5rem;
    }

    opacity: 0;

    animation: slide-in .1s forwards ease-in-out;

    @keyframes slide-in { 
        to {
            opacity: 1;
            transform: translateX(-50%);
        }
    }

    ${props => props.hasLeftHuman && css`
        transform: translateX(-50%);
        opacity: 1;

        animation: slide-out .1s forwards ease-in-out;

        @keyframes slide-out { 
            to {
                opacity: 0;
                transform: translateX(-30%);
            }
        }
    `}
`
