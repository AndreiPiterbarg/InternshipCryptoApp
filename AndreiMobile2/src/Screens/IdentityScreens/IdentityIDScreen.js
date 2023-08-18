import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import { } from 'react-native-web'
import Feather from 'react-native-vector-icons/Feather';
const IdentityIDScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DFDFFA' }}>
            {/* Feather Icon */}
            <Feather
                onPress={() => navigation.navigate('IdentityDetailsScreen')}
                name="arrow-left"
                size={50}
                color="#0BA09C"

            />
            <Text style={{ textAlign: 'center', color: '#0ba09c', fontSize: 20, fontWeight: '800', marginTop: 10, }}>Sign Up</Text>

            <View style={styles.topContent}>
                <Text style={styles.topText}><Text style={{ fontWeight: '800' }}>France</Text> has been set automatically as the issuing country of your documents.<Text style={{ fontWeight: '800', textDecorationLine: 'underline' }}>Change country.</Text></Text>
            </View>
            <View style={styles.midContent}>
                <Pressable style={styles.idButton}>
                    <Text style={styles.idTitle}>Passport</Text>
                </Pressable>
                <Pressable style={styles.idButton}>
                    <Text style={styles.idTitle}>Driver's License</Text>
                </Pressable>
                <Pressable style={styles.idButton}>
                    <Text style={styles.idTitle}>ID Card</Text>
                </Pressable>
            </View>
            <View style={styles.botContent}>
                <Text style={styles.infoText}>Enter your full legal name as shown on your ID</Text>
                <Pressable style={[styles.nextBtn, { marginTop: 10 }]} onPress={() => navigation.navigate('IDVerified')}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Continue</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default IdentityIDScreen
const styles = StyleSheet.create({
    topContent: {
        flex: 2,
        padding: 25,
    },
    topText: {
        marginTop: 100,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#0ba09c'
    },
    midContent: {
        flex: 3,
        padding: 20
    },
    idButton: {
        borderWidth: 1,
        borderColor: '#0ba09c',
        padding: 15,
        borderRadius: 10,
        marginVertical: 15
    },
    idTitle: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#0ba09c'
    },
    botContent: {
        flex: 1, paddingHorizontal: 20
    },
    infoText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        textAlign: 'center',
        color: '#0ba09c'
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