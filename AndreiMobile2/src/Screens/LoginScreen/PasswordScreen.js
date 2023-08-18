import React from 'react'
import { View,Text,TextInput, StyleSheet, Pressable} from 'react-native'
import CheckBox from 'expo-checkbox'

const PasswordScreen = ({navigation}) => {
    const [isSelected, setSelection] = React.useState(false)
  return (
    <View style={{flex:1, padding:20}}>
        <View style={{marginTop:50, flex:1, padding:20}}>
            <Text style={styles.titleInput} >Email Address</Text>
            <Text style={styles.emailText}>example@address.com</Text>
        </View>
        <View style={{ flex:1}}>
            <Text style={styles.titleInput}>Password</Text>
            <TextInput style={styles.passInput} placeholder='password'/>
        </View>
        <View style={{ flex:1}}>
            <Text style={styles.titleInput}>Confirm Password</Text>
            <TextInput style={styles.passInput} placeholder='password'/>
        </View>
        <View style={{flex:1}}>
            <Text>I accept the <Text style={{fontWeight:'700', color:'#0BA09C'}}>Terms and Conditions</Text> and I have read the <Text style={{fontWeight:'700', color:'#0BA09C'}}>CryptoPlayground Disclaimer.</Text></Text>
        </View>
        <View style={{flex:1}}>
            {/* <CheckBox disabled={false} value={isSelected} onValueChange={setSelection} /> */}
            <Pressable style={styles.nextBtn} onPress={()=>navigation.navigate('PhoneScreen')}>
                <Text style={{color:'white', fontWeight:'900', fontSize:15}}>Continue</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default PasswordScreen
const styles = StyleSheet.create({
    titleInput:{
        fontSize:15,
        fontWeight:'500',
        lineHeight: 20,
        color:'#0BA09C'
    },
    emailText:{
        fontSize:15,
        fontWeight:'400',
        lineHeight:20,
        color:'#828282',
        marginTop:20

    },
    passInput:{
        marginTop:10,
        borderWidth:1,
        width: '100%',
        borderColor:'#0BA09C',
        height: 50,
        borderRadius: 10,
        padding:10
    },
    nextBtn:{
        backgroundColor:'#0ba09c',
        borderRadius:10,
        width:'100%',
        height:60,
        justifyContent:'center',
        alignItems:'center'
    }
})