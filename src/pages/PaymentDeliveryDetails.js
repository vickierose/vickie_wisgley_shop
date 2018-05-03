import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Header, List } from 'semantic-ui-react';

import './pagesCommon.scss';

const PaymentDeliveryDetails = () => (
  <div className="page">
    <Container className='greet'>
			<Header as='h2'>Оплата и доставка</Header>
			<p>В этом разделе сайта вы найдете всю интересующую вас информацию по вопросам оплаты и доставки заказа</p>
    </Container>

    <Container>
      <p>Доставка осуществляется во все города Украины следующими способами:</p>
      <List as="ul">
        <List.Item as='li' className='content'>Самовывоз в г.Львов</List.Item>
        <List.Item as='li' className='content'>Новая почта</List.Item>
        <List.Item as='li' className='content'>УкрПочта</List.Item>
      </List>
      <p>Стоимость доставки согласно тарифам компании-перевозчика.</p>
    </Container>

    <Container>
      <p>Оплата проводится следующими путями:</p>
      <List as="ul">
        <List.Item as='li' className='content'>Наличными при самовывозе</List.Item>
        <List.Item as='li' className='content'>На карту ПриватБанка</List.Item>
        <List.Item as='li' className='content'>Наложенным платежем</List.Item>
      </List>
      <p>При оплате на карту ваш заказ высылается только после получения 100% предоплаты.</p>
			<p>При оплате наложенным платежем стоимость этой услуги оплачивается согласно тарифам компании-перевозчика.</p>
			<p>При доставке УкрПочтой оплата проводится только на карту ПриватБанка.</p>
    </Container>

    <Container>
      <p>Если у вас возникли другие вопросы, обращайтесь <NavLink to='/contacts'>к автору работ.</NavLink></p>
    </Container>
  </div>
);

export default PaymentDeliveryDetails;