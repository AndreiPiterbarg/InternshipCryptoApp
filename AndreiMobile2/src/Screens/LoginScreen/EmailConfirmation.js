import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const EmailConfirmation = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Animatable.View
                    animation='bounceIn'
                    duration={3500}
                >
                    <MaterialCommunityIcons
                        style={styles.emailCheckIcon}
                        name="email-send-outline"
                        color='#0BA09C'
                        size={100}
                    />
                </Animatable.View>
                <Text style={styles.infoFonts}>Check your email for a confirmation link to continue</Text>
            </View>
            <View style={styles.botContent}>
                <Pressable style={styles.buttonStyles} onPress={() => navigation.navigate('EmailVerified')}>
                    <Text style={styles.buttonText}>Open Mail</Text>
                </Pressable>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Resend</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
export default EmailConfirmation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    topContent: {
        flex: 3,
        alignItems: 'center'
    },
    infoFonts: {
        marginTop: 20,
        fontSize: 15,
        color: '#0BA09C'
    },
    emailCheckIcon: {
        marginTop: 100
    },
    botContent: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    buttonStyles: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#0ba09c',
        paddingVertical: 12,
        paddingHorizontal: 32,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    linkText: {
        marginTop: 20,
        color: '#0ba09c',
        fontWeight: '700',
        fontSize: 15,
    }
})