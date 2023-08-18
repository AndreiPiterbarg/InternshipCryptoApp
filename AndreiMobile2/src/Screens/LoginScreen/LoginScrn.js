import React from 'react'
import { StyleSheet,View, Text, Image, Button, Alert } from 'react-native'

export default function LoginScrn() {
  return (
    <View style={styles.container}>
        <View style={styles.topContent}>
            <Image style={{marginBottom:20, marginTop:300}} source={require('../../assets/images/logo.png')} />
        </View>
        <View style={styles.botContent}>
            <Button style={styles.buttonSignup} title='Sign up' color="#f194ff" onPress={()=>Alert.alert('Simple Button Pressed')}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height:'100%'
    },
    topContent:{
        height:'80%',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },
    botContent:{
        height:'20%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },
    buttonSignup:{
        borderColor:"#f194ff",
        borderWidth:1,
    }
})
