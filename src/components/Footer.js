import React from 'react'
import styled from "styled-components"

export default function Footer() {
  return (
    <Container>
      <Nome>Riccardo Ionut Racos</Nome>
      <div>
        <ContainerLogo>
          <Ionicon name="logo-linkedin" link='https://www.linkedin.com/in/riccardo-racos-7130281a0/' />
          <Ionicon name="logo-facebook" link='https://www.facebook.com/riccardo.racos/' />
          <Ionicon name="logo-instagram" link='https://www.instagram.com/riiccaaardo.off/' />
        </ContainerLogo>
        <p>Copyright 2022. Tutti i Diritti Riservati</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #202124;
    color: white;
    padding: 2rem;
    margin-top: 5rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }
`

const Nome = styled.h1`
  font-size: 30px;
`

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
`

const Ionicon = (props) => (
  <a href={props.link} style={{ color: 'inherit' }}><ion-icon name={props.name} style={{ width: '1.8rem', height: '1.8rem', margin: '10px', cursor: 'pointer' }}></ion-icon></a>
)