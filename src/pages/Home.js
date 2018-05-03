import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './pagesCommon.scss';

 const Home = () => (
   <div className="page">
    <Container className='greet'>
      <Header as='h3'>Добро пожаловать <br/> в хенд-мейд студию</Header>
			<Header as='h2'>Vickie Wisgley!</Header>
			<p>Здесь вы можете приобрести чудесные вещи ручной работы из наличия или же заказать уникальное изделие по собственным идеям. </p>
			<p>Располагайтесь и чувствуйте себя как дома!</p>
    </Container>
   </div>
 );

 export default Home;