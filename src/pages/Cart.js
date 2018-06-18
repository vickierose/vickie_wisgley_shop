import React, { Component } from 'react';
import {Modal, Button} from 'semantic-ui-react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal () {
    this.props.closeCartModal()
  }

  render() {
    return (
      <Modal dimmer='inverted' open={this.props.cartOpened} onClose={this.closeModal}>
        <Modal.Header>Корзина</Modal.Header>
        <Modal.Content></Modal.Content>
        <Modal.Actions>
          <Button
            content='Продолжить покупки'
            onClick={this.closeModal}
          />
          <Button
            content='Оформить заказ'
            onClick={this.closeModal}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Cart;