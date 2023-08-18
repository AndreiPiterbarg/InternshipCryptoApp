import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image, Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const NewSplash = ({navigation}) => {
  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Animatable.Image
              animation="bounceIn"
              source={require('../../assets/images/favicon.png')} 
              style={styles.logo}
              resizeMode='strech'
              />
          </View>

          <Animatable.View 
              duration={1500}
              animation='fadeInUpBig' style={styles.footer}>
              <Text style={styles.title}>Let's Learn about the Crypto!!</Text>
              <Text style={styles.text}>Sign in with account</Text>
              <View style={styles.button}>
              <TouchableOpacity>
                  {/* <LinearGradient
                  colors={['#08d4c4','#01ab9d']}
                  style={styles.button  }
                  >
                      <Text>Get Started</Text>
                  </LinearGradient> */}
                  <Button style={styles.signIn} title='Get Started' color='#851584' onPress={() => navigation.navigate('SignIn')} />
                  {/* <MaterialIcons name='navigate-next' color='#fff' size={20}/> */}
              </TouchableOpacity>
              </View>

          </Animatable.View>
      </View>
  )
}

export default NewSplash


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        backgroundColor: '#fff',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    footer: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'blue',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 50,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });