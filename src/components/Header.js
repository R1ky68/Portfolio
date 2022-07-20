import React, { useState } from 'react'
import styled from "styled-components"
import pdf from '../documents/curriculum_vitae.pdf'

export default function Header() {

  const [show_menu, setShowMenu] = useState(false)

  return (
    <Navbar>
      { window.innerWidth > 500 ? 
        <>
          <NavbarElement style={{ fontSize: "30px" }}>R.</NavbarElement>
          <div style={{ display: "flex" }}>
              <NavbarElement>Blog</NavbarElement>
              <a style={{ textDecoration: 'none' }} href={pdf}><NavbarElement>Scarica il mio CV</NavbarElement></a>
          </div>
          <Menu onClick={() => { setShowMenu(!show_menu); console.log("cliccato") }}>
            <NavbarElement>Menu</NavbarElement>
            <div>
              <Burger />
              <Burger style={{ marginTop: '3.5px' }}/>
              <Burger style={{ marginTop: '4px' }}/>
            </div>
          </Menu>
        </>
        :
        <>
          <NavbarElement style={{ fontSize: "30px" }}>R.</NavbarElement>
          <Menu>
            <NavbarElement>Menu</NavbarElement>
            <div>
              <Burger />
              <Burger style={{ marginTop: '3.5px' }}/>
              <Burger style={{ marginTop: '4px' }}/>
            </div>
          </Menu>
        </>
      }
      <ToggleMenu style={{ display: show_menu ? 'block' : 'none' }}>
      </ToggleMenu>
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

const ToggleMenu = styled.div`
  position: absolute;
  background-color: black;
  opacity: 10%;
  width: 100%;
  height: 50px;
  margin-top: 7.3rem;
`