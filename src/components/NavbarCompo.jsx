import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { navLinks } from "../data/index.js"
import { useState, useEffect } from "react"
useState

const NavbarCompo = () => {

      const [changeColor, setChangeColor] = useState(false);
      const changeBackgroundColor = () =>{
        if(window.scrollY > 10) {
          setChangeColor(true)
        } else {
          setChangeColor(false)
        }
      }

      useEffect(() => {
        changeBackgroundColor()
        window.addEventListener("scroll", changeBackgroundColor)
      })
  return (
    <div>
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="font">PORTF<span>OLIO</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link)=> {
                return (
                    <div className="nav-link" key={link.id} >
                      <NavLink to={link.path}   className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""   } end>{link.text}</NavLink></div>
                )
            })}
     
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarCompo