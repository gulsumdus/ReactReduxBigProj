import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import CartDetail from "../cart/CartDetail";
import alertify from 'alertify.js';

class CartSummary extends Component {

    RemoveFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + "removed from cart")
    }

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
                    Your Cart
                </DropdownToggle>
                <DropdownMenu end>
                    {this.props.cart.map(item => (
                        <DropdownItem key={item.product.id}>
                            <Badge color="danger" onClick={() => this.props.actions.RemoveFromCart(item.product)} >-</Badge>
                            {item.product.productName}
                            <Badge color="success" >{item.quantity}</Badge>
                        </DropdownItem>

                    ))}
                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"}>View Cart</Link></DropdownItem>
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

function mapDispatchToProps(dispatch) {

    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),//fonksiyonu çağırdık

        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducerIndex
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)