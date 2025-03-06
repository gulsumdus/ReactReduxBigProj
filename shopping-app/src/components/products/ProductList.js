import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Badge } from "reactstrap";
import * as productActions from "../../redux/actions/productActions"

class ProductList extends Component {

  componentDidMount() { //***********************Uygulama açıldığında çalışır***************** */
    this.props.actions.getProducts() //productları getirdik, aşağıdaki mapDispatchToProps(dispatch)v fonksiyonu sayesinde
  }

  render() {
    return (
      <div><h3>
        <Badge color="warning">Products </Badge>
        <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
      </h3>

       
      
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),//fonksiyonu çağırdık
    }
  }
}





function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducerIndex,
    products:state.productListReducerIndex//redux'tan gelen data
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)//connecting store