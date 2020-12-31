import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import { Container ,Row,Panel,Column,Galery,Section,Description} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Galery> 
            <img src={tshirtImage} alt="T-Shirt"/>
          </Galery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo /> 

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Sem garantia</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre Garantia</a>
    </Section>
  )
}

const Info = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore? Illo aut quae eveniet explicabo doloremque deserunt dolorem numquam architecto, dicta, odit magnam iure quas. Ea sequi ab vero nulla.Illo aut quae eveniet explicabo doloremque deserunt dolorem numquam architecto, dicta, odit magnam iure quas. Ea sequi ab vero nulla.
        <br/>
        <br/>
        Itens inclusos: <br />
        - 1x LED  <br />
        - 1x LED  <br />
        - 1x LED  <br />
        - 1x LED  <br />
        - 1x LED  <br />

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cupiditate, excepturi necessitatibus quae perferendis itaque, veniam eveniet quisquam tempora voluptatum quasi molestiae reprehenderit veritatis aspernatur. Ex assumenda doloribus temporibus dolor!
      </p>
    </Description>
  )
}

export default Product;
