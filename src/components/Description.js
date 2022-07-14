import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Description() {
  return (
    <Container>
        <Presentazione>
            <p>Ciao! Sono Riccardo Ionut Racos.</p>
            <h1 style={{ fontSize: '90px' }}>Un genio.</h1>
        </Presentazione>
        <div>
            <Linea />
            <Descrizione>Creo prodotti digitali inclusivi e accessibili, con esperienza di lavoro con startup e prodotti aziendali. Credo nell'utilizzo del design del prodotto come strumento per elevare l'interazione umana con la tecnologia su scala scalabile.</Descrizione>
        </div>
        <Cerchio1 />
        <Cerchio2/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
`;

const Presentazione = styled.div`
    margin: 5rem 10rem;
`

const Linea = styled.div`
    width: 40px;
    height: 3px;
    background-color: black;
    margin-bottom: 15px;
`

const Descrizione = styled.p`
    max-width: 25rem;
    margin-right: 10rem;
    font-family: 'Manrope', sans-serif;
    font-size: 20px;
`

const Cerchio1Animation = keyframes`
    0% { left: 50%; right: 50%; top: 30%; }
    20% { left: 80%; top: 70%; }
    40% { left: 10%; top: 65%; }
    60% { left: 30%; top: 20%; }
    80% { left: 60%; top: 70%; }
    100% { left: 50%; right: 50%; top: 30%; }
`

const Cerchio2Animation = keyframes`
    0% { left: 20%; right: 50%; top: 10%; }
    20% { left: 20%; right: 50%; top: 10%; }
    40% { left: 50%; top: 5%; }
    60% { left: 60%; top: 30%; }
    80% { left: 5%; top: 20%; }
    100% { left: 20%; right: 50%; top: 10%; }
`

const Cerchio1 = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    right: 50%;
    background-color: #8a06bf;
    filter: blur(200px);
    opacity: 75%;
    z-index: -1;

    animation-name: ${Cerchio1Animation};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
`

const Cerchio2 = styled.div`
    position: absolute;
    width: 550px;
    height: 550px;
    border-radius: 30% 40% 25% 50%;
    background-color: #8a06bf;
    filter: blur(200px);
    opacity: 55%;
    z-index: -1;

    animation-name: ${Cerchio2Animation};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
`