import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {NotificationIcon} from './components/Icons';
import Logo from './components/Logo';

const TitleBar = styled.View`
  width: 100%;
  margin-top: 10px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
  text-transform: uppercase;
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
  margin-top: 20px;
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
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Title>welcome</Title>
            <Name>aldo</Name>
            <NotificationIcon style={styles.iconStyle} />
            <Avatar source={require('./assets/avatar.jpg')} />
          </TitleBar>
          <ScrollView
            style={styles.scrollViewLogosStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Logo
              image={require('./assets/logo-framerx.png')}
              text="Framer X"
            />
            <Logo image={require('./assets/logo-figma.png')} text="Figma" />
          </ScrollView>
          <Subtitle>continue learning</Subtitle>
          <ScrollView
            style={styles.scrollViewCardStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Card
              title="styled componentes"
              caption="react native"
              subtitle="5 of 12 sections"
              image={require('./assets/background1.jpg')}
              logo={require('./assets/logo-react.png')}
            />
            <Card
              title="styled componentes"
              caption="react native"
              subtitle="5 of 12 sections"
              image={require('./assets/background2.jpg')}
              logo={require('./assets/logo-react.png')}
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    top: 5,
    right: 20,
  },
  scrollViewLogosStyle: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 12,
    paddingTop: 30,
  },
  scrollViewCardStyle: {
    paddingBottom: 30,
  },
});
