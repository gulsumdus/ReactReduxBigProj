import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink
} from 'reactstrap';
import { connect } from "react-redux"
class CartSummary extends Component {

    renderEmpty() {
        return (
            <NavItem>
                <NavLink >Empty Cart</NavLink>
            </NavItem>
        );

    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>

                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }



            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps)(CartSummary)