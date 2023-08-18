import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { } from 'react-native-web'
import Feather from 'react-native-vector-icons/Feather';

const IdentityDetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', color: '#0ba09c', fontSize: 20, fontWeight: '800', marginTop: 80, }}>Verify Your Identity</Text>



            <Feather

                onPress={() => navigation.navigate('IdentityScreen')}
                name="arrow-left"
                size={50}
                color="#0BA09C"
                alignItems="left"
                paddingHorizontal={20}
                position="relative"
                bottom={35}

            />
            <View style={styles.topContent}>
                <Text style={styles.detailTitle}>Legal Name</Text>
                <TextInput style={[styles.detailInput, { paddingHorizontal: 10 }]} />
            </View>
            <View style={styles.botContent}>
                <Text style={styles.infoText}>Enter your full legal name as shown on your ID</Text>
                <Pressable style={[styles.nextBtn, { marginTop: 10 }]} onPress={() => navigation.navigate('IdentityIDScreen')}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Continue</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default IdentityDetailsScreen
const styles = StyleSheet.create({
    topContent: {
        flex: 5,
        marginTop: 50
        , padding: 20
    },
    detailTitle: {
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 20,
        color: '#0ba09c'
    },
    detailInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#0ba09c',
        height: 42,
        marginTop: 10,
        borderRadius: 10
    },
    botContent: {
        flex: 1
        , padding: 20
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