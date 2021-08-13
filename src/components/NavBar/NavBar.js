import React from 'react';
import '../../assets/fonts/font.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
 import './NavBar.css';
 import { Link } from 'react-router-dom';
 import DialexaBVG from '../../assets/BVGLogo.svg';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar className="nav" expand="lg" fixed="top">
                <Container className="cont">
                    <div className="boxes">
                    <Navbar.Brand className="brand">
                        <Link to="/game"><img className="logo" alt="DialexaBVG" src={DialexaBVG}></img></Link>
                    </Navbar.Brand>
                    </div>
                    <Nav class="row justify-content-center align-self-center">
                        <Link className="link"to="/game">Play</Link>
                        <Nav.Link className="disabled">Leaderboard</Nav.Link>
                        <Nav.Link className="disabled">Explore</Nav.Link>
                        <Nav.Link className="disabled">About</Nav.Link>
                    </Nav>
                    <div className="boxes">
                        <Nav.Link className="name">
                            Welcome Back, Summer!
                        </Nav.Link>
                    </div>
                </Container>
            </Navbar>

        );
    }
}

export default NavBar;