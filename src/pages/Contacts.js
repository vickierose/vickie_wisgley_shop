import React, { Component } from 'react'

import {Container, Header, List} from 'semantic-ui-react';
import './pagesCommon.scss';

const contactsData = [
  {type: 'social', link: 'https://www.facebook.com/profile.php?id=100003813316639', iconName: 'facebook square', content: 'Victorija Chernyshuk'},
  {type: 'social', link: 'https://www.instagram.com/vickie_wisgley/', iconName: 'instagram', content: '@vickie_wisgley'},
  {type: 'email', link: 'mailto:vickierose.ch@gmail.com?subject=feedback', iconName: 'mail', content: 'vickierose.ch@gmail.com'},
  {type: 'phone', link: '', iconName: 'mobile', content: '0631980691'},
  {type: 'phone', link: '', iconName: 'mobile', content: '0674295038'},
]
export default class Contacts extends Component {
  constructor(props){
    super(props);
    this.getContactsList = this.getContactsList.bind(this);
  }

  getContactsList(){
    return contactsData.map((contact, i) => {
      let indicator = contact.type === 'social' || contact.type === 'email';
      let preparedContent = indicator ? <a href={contact.link}>{contact.content}</a> : contact.content;
      
      return (
        <List.Item key={i}>
          <List.Icon color="black" name={contact.iconName} />
          <List.Content>{preparedContent}</List.Content>
        </List.Item>
      )
    })
  }
  render () { 
    return (
      <div className="page">
        <Container text className='greet'>
          <Header as='h2'>Контакты</Header>
          <p>
            В этом разделе вы найдете контактные данные автора,
            по которым вы сможете обратиться к ней с интересующими вас вопросами, 
            в частности касательно заказа индивидуальных работ
          </p>
        </Container>
        <Container text>
          <List size='big'>
            {this.getContactsList()}
          </List>
        </Container>
      </div>
    );
  }
}
