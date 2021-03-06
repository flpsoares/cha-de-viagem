import styled, { css } from 'styled-components'

interface DoarProps {
  opacity: number
}

interface ContainerProps {
  url: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => css`url(${props.url}.jpeg)`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (max-width: 540px) {
    background-size: cover;
  }
`

export const Title = styled.span`
  z-index: 2;
  max-width: 800px;
  text-align: center;
  font-size: 22px;
  margin-top: 20px;
`

export const Link = styled.a`
  color: white;
  z-index: 2;
  font-weight: 600;
  font-size: 22px;
  margin-top: 12px;
`

export const Button = styled.button`
  z-index: 2;

  border: 3px solid white;
  border-radius: 4px;
  padding: 4px 14px;
  font-size: 22px;

  margin: 20px 0;

  transition: background 0.2s;

  &:hover {
    background: #191622;
    border: 3px solid #191622;
  }
`

export const Doar = styled.h1<DoarProps>`
  z-index: 2;
  transition: opacity 1s;
  font-size: 28px;
  color: white;
  opacity: ${(props) => props.opacity};
`
