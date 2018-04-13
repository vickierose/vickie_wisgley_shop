import React, { Component } from 'react'
import { Container, Header, Card } from 'semantic-ui-react';
import ShopItem from '../elements/ShopItem';
export default class Shop extends Component {
  constructor(props){
    super(props);

    this.getShopItems = this.getShopItems.bind(this);
  }
  componentWillMount() {
    this.props.getShoppingItems();
  }

  getShopItems(){
    if (this.props.shop && this.props.shop.data){
      return this.props.shop.data.map(item => (
        <ShopItem item={item} key={item.id}/>
      ))
    }
  }

  render() {
    return (
      <div className="page">
        <Container text className='greet'>
          <Header as='h2'>Магазин</Header>
          <p>Приветствуем в нашем магазинчике!</p>
          <p>Здесь вы можете найти различные чудесинки ручной работы: 
            украшения, посуду, фигурки и прочие замечательные вещи, 
            которые будут прекрасным подарком вам и вашим близким.</p>
          <p>Осматривайтесь и выбирайте!</p>
        </Container>

        <Container text className="invisible-container">
          <Card.Group itemsPerRow={3} stackable>
            {this.getShopItems()}
          </Card.Group>
        </Container>
      </div>
    );
  }
};