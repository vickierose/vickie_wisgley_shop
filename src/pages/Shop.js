import React, { Component } from 'react'
import { Container, Header, Card, Label } from 'semantic-ui-react';
import ShopItem from '../elements/ShopItem';

import './pagesCommon.scss';
import './Shop.scss';
export default class Shop extends Component {
  constructor(props){
    super(props);

    this.getShopItems = this.getShopItems.bind(this);
    this.getCategoriesList = this.getCategoriesList.bind(this);
    this.onCategoryClick= this.onCategoryClick.bind(this);
  }
  componentDidMount() {
    this.props.getShoppingItems();
    this.props.getAllCategories();
  }

  getShopItems() {
    if (this.props.shop && this.props.shop.data){
      return this.props.shop.data.map(item => (
        <ShopItem item={item} key={item.id}/>
      ))
    }
  }
  getCategoriesList() {
    if(this.props.categories && this.props.categories.all) {
      return this.props.categories.all.map(item => (
        this.props.categories.selected.indexOf(item) !== -1
          ? <Label className="category-label category-label-selected" key={item} onClick={() => this.onCategoryClick(item)}>{item}</Label>
          : <Label className="category-label" key={item} onClick={() => this.onCategoryClick(item)}>{item}</Label>
      ))
    }
  }

  onCategoryClick(category) {
    if (this.props.categories.selected.indexOf(category) === -1) {
      this.props.selectCategory(category);
    } else {
      this.props.unselectCategory(category);
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
          <Label.Group>
            {this.getCategoriesList()}
          </Label.Group>
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