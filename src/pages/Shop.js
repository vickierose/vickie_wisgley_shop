import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import { Container, Header, Card, Label } from 'semantic-ui-react';
import ShopItem from '../elements/ShopItem';
import ShopItemDetails from './ShopItemDetails';

import './pagesCommon.scss';
import './Shop.scss';

export default class Shop extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredShoppingItems: []
    }

    this.getShopItems = this.getShopItems.bind(this);
    this.getCategoriesList = this.getCategoriesList.bind(this);
    this.onCategoryClick= this.onCategoryClick.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  componentDidMount() {
    this.props.getShoppingItems();
    this.props.getAllCategories();
  }

  getShopItems() {
    if (this.state && this.state.filteredShoppingItems.length){
      return this.state.filteredShoppingItems.map(item => (
        <ShopItem item={item} key={item.id} match={this.props.match}/>
      ))
    } else if (this.props.shop && this.props.shop.data) {
      return this.props.shop.data.map(item => (
        <ShopItem item={item} key={item.id} match={this.props.match}/>
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

  get ShopLanding() {
    return (
      <React.Fragment>
        <Container className='greet'>
          <Header as='h2'>Магазин</Header>
          <p>Приветствуем в нашем магазинчике!</p>
          <p>Здесь вы можете найти различные чудесинки ручной работы: 
            украшения, посуду, фигурки и прочие замечательные вещи, 
            которые будут прекрасным подарком вам и вашим близким.</p>
          <p>Осматривайтесь и выбирайте!</p>
        </Container>

        <Container className="invisible-container">
          <Label.Group>
            {this.getCategoriesList()}
          </Label.Group>
        </Container>

        <Container className="invisible-container">
          <Card.Group doubling stackable centered itemsPerRow={4}>
            {this.getShopItems()}
          </Card.Group>
        </Container>
      </React.Fragment>
    )
  }

  getSpecificItemData(id) {
    return this.props.shop.data.filter(item => item.id === id)[0];
  }

  filterItems(categories, items) {
    if(!categories.length) {
      this.setState({filteredShoppingItems: items});
      return items
    }
    const filtered = items.filter(item => categories.indexOf(item.category) !== -1);
    this.setState({filteredShoppingItems: filtered});
    return filtered;
  }

  onCategoryClick(category) {
    if (this.props.categories.selected.indexOf(category) === -1) {
      this.props.selectCategory(category);
    } else {
      this.props.unselectCategory(category);
    }
    setTimeout(() => {
      this.filterItems(this.props.categories.selected, this.props.shop.data)
    }, 0)
  }

  render() {
    return (
      <div className="page">
        <Route path={`${this.props.match.url}/:itemId`} render={({match}) => <ShopItemDetails data={this.getSpecificItemData(match.params.itemId)}/>}/>
        <Route exact path={this.props.match.url} render={() => this.ShopLanding} />
      </div> 
    );
  }
};