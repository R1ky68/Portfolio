import React from 'react'
import styled from "styled-components"

export default function Header() {
  return (
    <Navbar>
        <NavbarElement style={{ fontSize: "30px" }}>R.</NavbarElement>
        <div style={{ display: "flex" }}>
            <NavbarElement>Blog</NavbarElement>
            <NavbarElement>Scarica il mio CV</NavbarElement>
        </div>
        <NavbarElement>Menu</NavbarElement>
    </Navbar>
  )
}

const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid black;
`;

const NavbarElement = styled.p`
    margin: auto 1rem;
`