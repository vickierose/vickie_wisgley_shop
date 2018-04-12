import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react';
export default class Shop extends Component {
  constructor(props){
    super(props);
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
      </div>
    );
  }
};