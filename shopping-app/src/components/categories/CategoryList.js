import { current } from '@reduxjs/toolkit'
import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import { ListGroupItem, ListGroup } from "reactstrap"
import { Badge } from "reactstrap"



class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories() //categorileri getirdik, aşağıdaki mapDispatchToProps(dispatch)v fonksiyonu sayesinde
  }
  selectCategory = category => {
    this.props.actions.changeCategory(category)
  }

  render() {
    return (
      <div>
        <Badge color="warning">Categories </Badge>
        <ListGroup> 
          {this.props.categories.map(cat => (
            <ListGroupItem active={cat.id === this.props.currentCategory.id} onClick={() => this.selectCategory(cat)} key={cat.id}>
              {cat.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>Secili Kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducerIndex,
    categories: state.categoryListReducerIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),//fonksiyonu çağırdık
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)//connecting store
