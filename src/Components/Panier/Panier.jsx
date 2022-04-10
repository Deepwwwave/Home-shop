import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

export default class Panier extends Component {

  render() {
    return (
      <>
        <FontAwesomeIcon icon={faShoppingBasket} />
        <p>{this.props.children}</p>
      </>
    )
  }
}
