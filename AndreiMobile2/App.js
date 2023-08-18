import React, { useState, useEffect } from 'react';

/* Import basic components from react native */
import {
  ActionSheetIOS,
  ActivityIndicator,
  Button,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/Screens/RootStackScreen'


const App = () => {
  return (
    <>
      <NavigationContainer>{< RootStackScreen />}</NavigationContainer>
    </>

  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  result: {
    fontSize: 64,
    textAlign: "center"
  }
});

export default App;


//create our Photo component.
function Photo({ data }) {
  return (
    <View>
      {/*If the data prop is not undefined, display the image*/}
      {data ? (
        <Image
          style={{
            width: 350,
            height: 400,
          }}
          source={{
            uri: data,
          }}
        />
      ) : (
        <Text>No Image</Text>
      )}
    </View>
  );
}




