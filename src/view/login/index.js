import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; 

export default class Login extends Component {
  render() {
    return (
        <View >
            <Text 
                onPress={() => Actions.two()} >
                login
            </Text>
        </View>
    )
}
}
