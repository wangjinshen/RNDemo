import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'; 
export default class Friend extends Component {
    render() {
        return (
            <View >
                <Text 
                    onPress={() => Actions.one()} >
                    Friend
                </Text>
            </View>
        )
    }
}
