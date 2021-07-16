import React from 'react';
import styled from 'styled-components';

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-radius: 10px;
  padding: 12px 10px 12px;
  margin: 0 8px
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
`;

export default Logo;
