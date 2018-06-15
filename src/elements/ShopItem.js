import React from 'react';
import {Card, Image, Button, Label} from 'semantic-ui-react';
import Nav from './NavHelper';
import './ShopItem.scss';

const ShopItem = ({item, match}) => {
  return (
    <Card as={Nav} to={`${match.url}/${item.id}`} className='shop-item'>
      <Image src={item.imageUrl} className="shop-item-picture"/>
      <Card.Content>
        <Card.Header as='h3'>{item.name}</Card.Header>
      </Card.Content>
      <Button as='div' attached="bottom" className="price-tag-btn">{`${item.price} ${item.currency}`}</Button>
    </Card>
  )
};

export default ShopItem;
