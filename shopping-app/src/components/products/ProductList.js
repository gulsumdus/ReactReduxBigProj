import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Badge, Table, Button } from "reactstrap";
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from 'alertifyjs';


class ProductList extends Component {

  componentDidMount() { //***********************Uygulama açıldığında çalışır***************** */
    this.props.actions.getProducts() //productları getirdik, aşağıdaki mapDispatchToProps(dispatch)v fonksiyonu sayesinde
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
   alertify.success(product.productName + "sepete eklendi")
   console.log(product.productName + "sepete eklendi");
  }

  render() {
    return (
      <div><h3>
        <Badge color="warning">Products </Badge>
        <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
      </h3>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Last Name</th>
              <th>Quantity Per Unit</th>
              <th>Units in Stock</th>
              <th>   </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(pro => (
              <tr key={pro.id}>
                <th scope="row">{pro.id}</th>
                <td>{pro.productName}</td>
                <td>{pro.unitPrice}</td>
                <td>{pro.quantityPerUnit}</td>
                <td>{pro.unitsInStock}</td>
                <td><Button color="success" onClick={() => this.addToCart(pro)}>Add to Cart</Button></td>
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
      getProducts: bindActionCreators(productActions.getProducts, dispatch),//fonksiyonu çağırdık
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}





function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducerIndex,
    products: state.productListReducerIndex//redux'tan gelen data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)//connecting store