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
        <Menu>
          <NavbarElement>Menu</NavbarElement>
          <div>
            <Burger />
            <Burger style={{ marginTop: '3.5px' }}/>
            <Burger style={{ marginTop: '4px' }}/>
          </div>
        </Menu>
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

const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const NavbarElement = styled.a`
  margin: auto 1rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
`

const Burger = styled.div`
  width: 20px;
  height: 3px;
  background-color: black;
`