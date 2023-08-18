import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { } from 'react-native-web'

const PhoneVerification = ({ navigation }) => {
    const [verification, setVerification] = React.useState(false)
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ flex: 1, fontWeight: '700', fontSize: 10, lineHeight: 22, textAlign: 'center', color: '#828282', marginTop: 20 }}>A verification code has been sent to +33 7 58 39 0023</Text>
            <View style={styles.phnVerify}>
                <Text style={styles.phnVerifyText}>Verification Code (SMS)</Text>
                <View style={styles.phnVerifyDigit}>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.phnDigit]}
                            keyboardType='numeric'
                            maxLength={1}
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                        <TextInput
                            style={[styles.phnDigit]}
                            keyboardType='numeric'
                            maxLength={1}
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                        <TextInput
                            style={[styles.phnDigit]}
                            keyboardType='numeric'
                            maxLength={1}
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                    </View>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.phnDigit]}
                            keyboardType='numeric'
                            maxLength={1}
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                        <TextInput
                            style={[styles.phnDigit]}
                            keyboardType='numeric'
                            maxLength={1}
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                        <TextInput
                            style={[styles.phnDigit]}
                            keyboardType='numeric'
                            maxLength={1}
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Pressable style={styles.nextBtn} onPress={() => navigation.navigate('PhoneScreen')}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Resend</Text>
                </Pressable>
                <Pressable style={[styles.nextBtn, { marginTop: 10 }]} onPress={() => navigation.navigate('PhoneConfirmed')}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Continue</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default PhoneVerification
const styles = StyleSheet.create({
    phnVerify: {
        flex: 3,
    },
    phnVerifyDigit: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'row',
    },
    phnVerifyText: {
        padding: 5,
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 20,
        color: '#0ba09c'

    },
    phnDigit: {
        borderWidth: 2,
        borderColor: '#0ba09c',
        width: 45,
        height: 45,
        borderRadius: 10,
        marginHorizontal: 5

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