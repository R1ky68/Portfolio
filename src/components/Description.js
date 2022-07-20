import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Typewriter from 'typewriter-effect';

export default function Description() {

    const [CasiStudio, setCasiStudio] = useState(true)
    const [UI, setUI] = useState(false)
    const [Modelli3D, setModelli3D] = useState(false)

    const TypeWriter = ({ contenuto, velocità }) => {
        const [contenutoMostrato, setContenutoMostrato] = useState("");
        const [index, setIndex] = useState(0);
      
        useEffect(() => {
          /*Crea un nuovo setInterval e salva il suo ID*/
          const animKey = setInterval(() => {
            setIndex((index) => {
              /*Questa funzione imposterà l'index a index+1 se ci sarà altro contenuto altrimenti distruggerà l'animazione*/
            
                if (index >= contenuto.length - 1) {
                    clearInterval(animKey);
                    return index;
                }
                return index + 1;
            });
          }, velocità);
        }, []);
      
        useEffect(() => {
          setContenutoMostrato((contenutoMostrato) => contenutoMostrato + contenuto[index]) 
        }, [index])
      
        return <Titolo>{contenutoMostrato}</Titolo>;
    };

    const titolo = `Un developer`;

  return (
    <>
        <Container>
            <Presentazione>
                <div style={{ display: "flex" }}>
                    <Linea />
                    <Saluto>Ciao! Sono Riccardo Ionut Racos.</Saluto>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TypeWriter contenuto={titolo} velocità={100} />
                </div>
            </Presentazione>
            <div>
                <Linea />
                <Descrizione>Creo prodotti digitali inclusivi e accessibili, con esperienza di lavoro con startup e prodotti aziendali. Credo nell'utilizzo del design del prodotto come strumento per elevare l'interazione umana con la tecnologia su scala scalabile.</Descrizione>
            </div>
            <Cerchio1 />
            <Cerchio2/>
        </Container>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "100px" }}>
            <ContainerOpzioni>
                <Opzione style={{ fontWeight: CasiStudio ? 'bold' : 'lighter' }} onClick={() => {setCasiStudio(true); setUI(false); setModelli3D(false)} }>Casi studio</Opzione>
                <Opzione style={{ fontWeight: UI ? 'bold' : 'lighter' }} onClick={() => {setUI(true); setCasiStudio(false); setModelli3D(false)} }>UI ed Ixd</Opzione>
                <Opzione style={{ fontWeight: Modelli3D ? 'bold' : 'lighter' }} onClick={() => {setModelli3D(true); setUI(false); setCasiStudio(false)} }>Modelli 3D</Opzione>
            </ContainerOpzioni>
            <LineaOpzione />
        </div>
        <span style={{ position: 'relative', margin: '60px 50%' }} className="material-symbols-outlined">expand_more</span>
    </>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5rem;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Presentazione = styled.div`

`

const Linea = styled.div`
    width: 40px;
    height: 3px;
    background-color: black;
    margin: auto 10px auto 0px;

    @media (max-width: 500px) {
        display: none;
    }
`

const Saluto = styled.p`
    @media (max-width: 500px) {
        font-size: 14px;
    }
`

const Titolo = styled.h1`
    font-size: 90px;

    @media (max-width: 500px) {
        font-size: 60px;
    }
`

const Descrizione = styled.p`
    margin-top: 20px;
    max-width: 25rem;
    font-family: 'Manrope', sans-serif;
    font-size: 20px;

    @media (max-width: 500px) {
        font-size: 18px;
        text-align: center;
    }
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

const Cerchio = css`
    position: absolute;
    border-radius: 40%;
    background-color: #8a06bf;
    filter: blur(100px);
    opacity: 55%;
    z-index: -1;
    animation-duration: 2.7s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;

    @media (max-width: 500px) {
        display: none;
    }
`

const Cerchio1 = styled.div`
    ${Cerchio}
    width: 200px;
    height: 200px;
    animation-name: ${Cerchio1Animation};
`

const Cerchio2 = styled.div`
    ${Cerchio}
    width: 550px;
    height: 550px;
    animation-name: ${Cerchio2Animation};
`

const ContainerOpzioni = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5rem;
`

const Opzione = styled.a`
    font-family: 'Manrope', sans-serif;
    font-weight: lighter;
    cursor: pointer;
`

const LineaOpzione = styled.div`
    margin: 10px;
    width: 50rem;
    height: 0.5px;
    background-color: black;
`

const LineaCarattere = (props) => (
    <div style={{  opacity: props.show ? '100%' : '0%', height: '4rem', width: '2px', background: 'black', margin: '1rem' }}></div>
)