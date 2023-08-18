import React from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen1() {
  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    navigation.navigate('SplashScreen2');
  };

  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topContent}>
          <Image style={{ marginBottom: 20, marginTop: 300 }} source={require('../../assets/images/logo.png')} />
          <Image style={{ width: '100%', resizeMode: 'cover' }} source={require('../../assets/images/bg1.png')} />
        </View>
        <View style={styles.botContent}>
          <Image style={{ width: '100%' }} source={require('../../assets/images/coins.png')} />
        </View>
        {/* Invisible button to navigate to SplashScreen2 */}
        <TouchableWithoutFeedback onPress={navigateToNextScreen} style={styles.invisibleButton}>
          <View style={styles.invisibleButton} />
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

