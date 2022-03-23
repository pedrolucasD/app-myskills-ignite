import React from 'react';
import { View, Text } from 'react-native';

export function Home() {
  return (
    // short syntax fragment <></>
    <>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text> React Native </Text>
        <Text> Ignite Cara </Text>
      </View>
    </>
  )
}