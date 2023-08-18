import React from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function SplashScreen2() {

  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image style={{ alignItems: 'center', bottom: 44, }} source={require('../../assets/images/logo.png')} />
      <TouchableWithoutFeedback onPress={navigateToNextScreen} style={styles.invisibleButton}>
        <View style={styles.invisibleButton} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bff2f1',

  },
  logo: {
  },
  topContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  invisibleButton: {
    ...StyleSheet.absoluteFillObject, // Fill the whole screen
    backgroundColor: 'transparent', // Make the button invisible
  },
});