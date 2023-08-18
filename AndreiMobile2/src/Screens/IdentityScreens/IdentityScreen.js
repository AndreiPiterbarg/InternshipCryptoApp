import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
const IdentityScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', color: '#0ba09c', fontSize: 20, fontWeight: '800', marginTop: 80, }}>Verify Your Identity</Text>



            <Feather

                onPress={() => navigation.navigate('WelcomeScreen')}
                name="arrow-left"
                size={50}
                color="#0BA09C"
                alignItems="left"
                paddingHorizontal={20}
                position="relative"
                bottom={35}

            />





            <View style={styles.topContent}>
                <Text style={styles.topText}>To help protect you from fraud and identity theft, and comply with federal regulations, we need some information</Text>
            </View>
            <View style={styles.midContent}>
                <Text style={{ color: '#0ba09c', fontSize: 20, fontWeight: '800', }}>INFORMATION REQUIRED</Text>
                <View style={{ flexDirection: 'row', marginVertical: 20, alignItems: 'center' }}>
                    <FontAwesome
                        name='user-circle'
                        size={25}
                        color='#0ba09c' />
                    <Text style={styles.listDetails}>LEGAL NAME</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 20, alignItems: 'center' }}>
                    <FontAwesome
                        name='id-card-o'
                        size={25}
                        color='#0ba09c' />
                    <Text style={styles.listDetails}>ID</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 20, alignItems: 'center' }}>
                    <FontAwesome
                        name='camera'
                        size={25}
                        color='#0ba09c' />
                    <Text style={styles.listDetails}>PHOTO</Text>
                </View>
            </View>
            <View style={styles.botContent}>
                <Pressable style={[styles.nextBtn, { marginTop: 10 }]} onPress={() => navigation.navigate('IdentityDetailsScreen')}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Continue</Text>
                </Pressable>
                <Pressable style={[styles.nextBtn, { marginTop: 10, backgroundColor: '#fff', borderColor: '#0ba09c', borderWidth: 1 }]} onPress={() => navigation.navigate('RatingScreen')}>
                    <Text style={{ color: '#0ba09c', fontWeight: '900', fontSize: 15 }}>Skip</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default IdentityScreen
const styles = StyleSheet.create({
    topContent: {
        flex: 1,
        marginVertical: 100
    },
    topText: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        fontWeight: '500',
        color: '#0ba09c',
        position: "relative",
        bottom: 50,
    },
    midContent: {
        flex: 1,
        paddingHorizontal: 50,
        position: "relaative",
        bottom: 50,
    },
    midText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        color: '#0ba09c',
        position: "relative",
        bottom: 50,

    },
    listDetails: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        marginLeft: 20,
        color: '#0ba09c',

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
        alignItems: 'center',
    }

})