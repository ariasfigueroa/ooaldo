import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>ooaldo</Text>
      </Container>
    );
  }
}
