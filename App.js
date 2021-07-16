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
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>continue learning</Subtitle>
          <ScrollView
            style={styles.scrollViewCardStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                caption={card.caption}
                subtitle={card.subtitle}
                image={card.image}
                logo={card.logo}
              />
            ))}
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
    paddingRight: 12,
    paddingTop: 30,
  },
  scrollViewCardStyle: {
    paddingBottom: 30,
  },
});

const logos = [
  {
    image: require('./assets/logo-framerx.png'),
    text: 'Famer X',
  },
  {
    image: require('./assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('./assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('./assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    subtitle: 'React Native',
    caption: '1 - 4 sections',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
  },
  {
    title: 'Figma for Designers',
    subtitle: 'Figma',
    caption: '1 - 8 sections',
    image: require('./assets/background12.jpg'),
    logo: require('./assets/logo-figma.png'),
  },
  {
    title: 'Studio for Designers',
    subtitle: 'Invision Studio',
    caption: '1 - 10 sections',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-studio.png'),
  },
  {
    title: 'Sketch for Designers',
    subtitle: 'Sketch',
    caption: '1 - 12 sections',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-sketch.png'),
  },
];
