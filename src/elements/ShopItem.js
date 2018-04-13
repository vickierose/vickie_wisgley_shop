import React from 'react';
import {Card, Image, Button, Label} from 'semantic-ui-react';
import './ShopItem.scss';

const ShopItem = ({item}) => {
  return (
    <Card className='shop-item'>
      <Image src={item.imageUrl} className="shop-item-picture"/>
      <Card.Content>
        <Card.Header as='h3'>{item.name}</Card.Header>
        <Card.Content extra>
          <Button as='div' fluid className="price-tag-btn">{`${item.price} ${item.currency}`}</Button>
        </Card.Content>
      </Card.Content>
    </Card>
  )
};

export default ShopItem;
