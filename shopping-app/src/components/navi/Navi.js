import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  
    NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props} expand="lg" style={{ backgroundColor: 'light-grey', borderStyle: 'outset'}} >
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                       <CartSummary/>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Navbar>
            </div>
        );
    }
}

export default Navi;