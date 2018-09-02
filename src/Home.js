import React from 'react';
import { Container, Header, View, DeckSwiper, Card, CardItem, Text, Left, Body, Icon } from 'native-base';

export default class  extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => this.props.navigation.navigate('Details')}>Home Screen</Text>
      </View>
    );
  }
}