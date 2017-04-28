import React from 'react'

import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import * as TodoActions from '../actions'

const App = ({ todos, actions}) => (
  <div>
    <p> App </p>
  </div>
)

const mapStateToProps = state => {
  return { todos: state }
}

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(TodoActions, dispatch) }
)

export default connect(
  { mapStateToProps
  , mapDispatchToProps
  }
)(App)
