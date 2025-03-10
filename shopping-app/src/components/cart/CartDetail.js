import React, { Component } from 'react'
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Badge, Table, Button } from "reactstrap";
import alertify from 'alertifyjs';


class CartDetail extends Component {
    RemoveFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + "removed from cart")
    }
    render() {
        return (
            <div>
                <h1>Cart Detail</h1>
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>   </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(item => (
                            <tr key={item.product.id}>
                                <th scope="row">{item.product.id}</th>
                                <td>{item.product.productName}</td>
                                <td>{item.product.unitPrice}</td>
                                <td>{item.quantity}</td>
                                <td><Button color="danger" onClick={() => this.RemoveFromCart(item.product)}>Remove From Cart</Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)