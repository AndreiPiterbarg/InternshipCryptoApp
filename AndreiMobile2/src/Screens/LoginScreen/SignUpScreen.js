import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false

            })
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text_title}>Sign Up</Text>

            <View style={styles.header}>
                <Text style={styles.text_header}>By submitting your email, you confirm you've read this <TouchableOpacity><Text style={styles.text_header_privacy}>Privacy policy</Text></TouchableOpacity></Text>
            </View>
            <Animatable.View style={styles.footer}
                animation='fadeInUpBig'
            >
                <Text style={styles.text_footer}>Email Address</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={20} />
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => { textInputChange(val) }}
                    />
                    {data.check_textInputChange ?
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        /> : null}
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={20} />
                    <TextInput
                        placeholder='Username'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => { check_textInputChange(val) }}
                    />
                    {data.check_textInputChange ?
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        /> : null}
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 25 }]}
                        onPress={() => navigation.navigate('EmailConfirmation')}
                    >
                        <Text style={styles.textSign}>Continue</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: 15
    },
    text_title: {
        textAlign: "center",
        marginTop: 70,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,

    },
    text_header_privacy: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'

    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#009387'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});