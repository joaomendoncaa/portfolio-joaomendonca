import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  position: relative;

  width: 45.3125rem;
  height: 34.625rem;

  &:hover {
    &:after {
        content: 'this is me flying to fill this portfolio with awesome projects';

        position: absolute;

        text-align: center;

        z-index: 1;
        bottom: 10px;
        
        width: 100%;
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
