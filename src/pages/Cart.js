import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Item, Input, Icon} from 'semantic-ui-react';
import {removeItem} from '../actions/cart';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {  };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeCartModal()
  }
  get cartItemsList() {
    const cartData = this.props.cart;
    if(cartData.length) {
      return cartData.map(item => (
        <Item key={item.id}>
          <Item.Image size='tiny' src={item.imageUrl} />
          <Item.Content>
            <Item.Header>{item.name}</Item.Header>
            <Item.Description>
              <div> Цена: {`${item.price} ${item.currency}`}</div>
              <div>Кол-во: <Input size='mini' defaultValue={1} type='number'/></div>
            </Item.Description>
          </Item.Content>
          <Button onClick={() => {this.props.removeItem(item.id)}}><Icon name='delete'/></Button>
        </Item>
        )
      )
    }
  }
  render() {
    return (
      <Modal dimmer='inverted' open={this.props.cartOpened} onClose={this.closeModal}>
        <Modal.Header>Корзина</Modal.Header>
        <Modal.Content>
          <Item.Group divided>
            {this.cartItemsList}
          </Item.Group>
        </Modal.Content>
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

const mapStateToProps = state => ({cart: state.cart});

const mapDispatchToProps = dispatch => ({
  removeItem (id){
    return dispatch(removeItem(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);