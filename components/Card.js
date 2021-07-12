import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  width: 315px;
  height: 280px;
  border-radius: 14px;
  background: white;
  margin: 20px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  width: 170px;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  height: 80px;
  padding-left: 20px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #3c4560;
`;

const Subtitle = styled.Text`
  margin-top: 4px;
  font-size: 15px;
  font-weight: 600;
  color: #b8bece;
  text-transform: uppercase;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Card = porps => (
  <Container>
    <Cover>
      <Image source={require('../assets/background2.jpg')} />
      <Title>styled component</Title>
    </Cover>
    <Content>
      <Logo source={require('../assets/logo-react.png')} />
      <Wrapper>
        <Caption>react native</Caption>
        <Subtitle>5 de 12</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;
