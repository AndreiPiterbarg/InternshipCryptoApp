import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = ({ navigation }) => {
    const [checkBox, setCheckBox] = React.useState(false)
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topContent}>
                <Image style={{}} source={require('../../assets/images/signup-img.png')} />
                <Text style={[styles.topText, { marginTop: 20 }]}>Welcome to our</Text>
                <Text style={styles.topText}>CryptoPlayground!</Text>
                <Text style={styles.botText}>Would you like us to send you exclusive offers and new updates?</Text>

            </View>
            <View style={styles.midContent}>
                <Pressable style={styles.checkBox} onPress={() => setCheckBox(!checkBox)}>
                    {checkBox ?

                        <Animatable.View
                            animation='bounceIn'
                            duration={1500}
                        >
                            <Feather
                                name='check-square'
                                size={20}
                            />
                        </Animatable.View> :
                        <Feather
                            name='square'
                            size={20}
                        />
                    }
                </Pressable>
                <View>
                    <Text style={styles.midText}>Yes, I’d like to receive exclusive offers and updates from </Text>
                    <Text style={[styles.midText, { textAlign: 'left' }]}>Cryptoplayground</Text>
                </View>
            </View>
            <View style={styles.botContent}>
                <Pressable style={[styles.nextBtn, { marginTop: 10 }]} onPress={() => navigation.navigate('IdentityScreen')}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Continue</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default WelcomeScreen
const styles = StyleSheet.create({
    topContent: {
        flex: 4,
        alignItems: 'center',
        marginTop: 20

    },
    topText: {
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 30,
        textAlign: 'center',
        color: '#0ba09c'

    },
    botText: {
        marginTop: 30,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'center',
        color: '#0ba09c'

    },
    midContent: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    midText: {
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 15,
        color: '#828282',
        marginLeft: 10

    },
    botContent: {
        flex: 1,
        padding: 20
    },
    nextBtn: {
        backgroundColor: '#0ba09c',
        borderRadius: 10,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})