import React, { Component } from 'react';
import { Container, Grid, Image, Header, Label, Button } from 'semantic-ui-react';
import './pagesCommon.scss';
import './ShopItemDetails.scss';

class ShopItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { data } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Column width={6}>
          <Image src={data.imageUrl} size='large'/>
          </Grid.Column>
          <Grid.Column width={10} verticalAlign="middle">
            <Header as='h2'>{data.name}</Header>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="price-buy-button-wrapper">
              <Label tag size="big">{`${data.price} ${data.currency}`}</Label>
              <Button size="large">Купить</Button>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ShopItemDetails;