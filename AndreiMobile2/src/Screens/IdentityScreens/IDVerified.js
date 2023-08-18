import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather';
const IDVerified = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <View style={styles.topContent}>
                <Animatable.View
                    animation='bounceIn'
                    duration={3500}
                >
                    <Feather
                        style={styles.emailCheckIcon}
                        name="check-circle"
                        color='#0BA09C'
                        size={100}
                    />
                </Animatable.View>
                <Text style={styles.infoFonts}>Document and Selfie submitted!</Text>
                <Text style={styles.infoVerifiedFonts}>We will notify you once your verification is complete.</Text>
            </View>
            <View style={styles.botContent}>
                <Pressable style={styles.buttonStyles} onPress={() => navigation.navigate('RatingScreen')}>
                    <Text style={styles.linkText}>Tap here to Continue</Text>
                </Pressable>
            </View>


        </View>
    )
}

export default IDVerified
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D1EEEB'
    },
    topContent: {
        flex: 5,
        alignItems: 'center'
    },
    infoFonts: {
        marginTop: 20,
        fontSize: 15,
        color: '#0BA09C'
    },
    emailCheckIcon: {
        marginTop: 50
    },
    infoVerifiedFonts: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        color: '#0ba09c'
    },
    botContent: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#',
    },
    linkText: {
        marginTop: 20,
        color: '#0ba09c',
        fontWeight: '700',
        fontSize: 15,
    }
})