import React from 'react';
import {Card, Image, Button, Label, ButtonContent} from 'semantic-ui-react';
import Nav from './NavHelper';
import './ShopItem.scss';

const ShopItem = ({item, match, addItemToCart}) => {
  return (
    <Card className='shop-item'>
      <Card.Content as={Nav} to={`${match.url}/${item.id}`}>
        <Image src={item.imageUrl} className="shop-item-picture"/>
        <Card.Header as='h3'>{item.name}</Card.Header>
      </Card.Content>
      <Button animated='vertical' as='div' attached="bottom" className="price-tag-btn" onClick={() => {addItemToCart(item)}}>
        <Button.Content visible>{`${item.price} ${item.currency}`}</Button.Content>
        <Button.Content hidden>Купить</Button.Content>
      </Button>
    </Card>
  )
};

export default ShopItem;
