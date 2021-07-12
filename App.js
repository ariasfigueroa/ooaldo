import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #b8bece;
  margin-top: 50px;
  margin-left: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: black;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Title>welcome</Title>
          <Name>aldo</Name>
          <Avatar source={require('./assets/avatar.jpg')} />
          <Subtitle>continue learning</Subtitle>
        </TitleBar>
        <Card
          title="styled componentes"
          caption="react native"
          subtitle="5 of 12 sections"
          image={require('./assets/background2.jpg')}
          logo={require('./assets/logo-react.png')}
        />
      </Container>
    );
  }
}
