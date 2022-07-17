import React from 'react'
import styled from 'styled-components'

export default function Projects() {
  return (
    <Container>
        <Card title='Merendels' type='Stagista' img='https://images.unsplash.com/photo-1546621083-17f1e50980e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' />
        <Card title='Google' type='Full-stack developer' img='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' />
        <Card title='Netflix' type='Manager' img='https://images.unsplash.com/photo-1541506618330-7c369fc759b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80' />
        <Card title='Microsoft' type='Software Engineer' img='https://images.unsplash.com/photo-1634891392987-e91db6bf9557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHRlY2h8ZW58MHwxfDB8d2hpdGV8&auto=format&fit=crop&w=900&q=60' />
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto;
    justify-content: space-evenly;

    @media (max-width: 800px) {
        grid-template-columns: auto;
    }

`

const Card = (props) => (
    <div style={{ marginTop: "40px" }}>
        <Image src={props.img} />
        <div>
            <h1>{props.title}</h1>
            <p>{props.type}</p>
        </div>
    </div>
)

const Image = styled.img`
    width: 20rem;

    @media (max-width: 800px) {
        width: 25rem;
    }
`