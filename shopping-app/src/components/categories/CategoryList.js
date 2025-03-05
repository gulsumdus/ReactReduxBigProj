import { current } from '@reduxjs/toolkit'
import React, { Component } from 'react'
import {connect} from "react-redux"

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <h5>Secili Kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {currentCategory:state.changeCategoryReducer}
}


export default connect(mapStateToProps)(CategoryList)
