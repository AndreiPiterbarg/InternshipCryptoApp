import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExchangeVerification = () => {
    const navigation = useNavigation();
    const [verificationCode, setVerificationCode] = useState('');

    const handleBackPress = () => {
        navigation.goBack();
    };
    const [amount, setAmount] = useState('');
    const numericAmount = parseFloat(amount);
    const handleContinuePress = () => {
        if (verificationCode.length === 6) {
            navigation.navigate('ExchangeConfirmed', { enteredMoney: numericAmount });
        } else {
            alert('Please enter a valid verification code.');
        }
    };

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.titleBanner}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Bank Information</Text>
            </View>
            <Text style={{ flex: 1, fontWeight: '700', fontSize: 10, lineHeight: 22, textAlign: 'center', color: '#828282', marginTop: 20 }}>A verification code has been sent to +33 7 58 39 0023. 2-Factor-Authentication is needed to ensure security and safety</Text>
            <View style={styles.phnVerify}>
                <Text style={styles.phnVerifyText}>Verification Code (SMS)</Text>
                <View style={styles.phnVerifyDigit}>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                        {[...Array(3)].map((_, index) => (
                            <TextInput
                                key={index}
                                style={[styles.phnDigit]}
                                keyboardType="numeric"
                                maxLength={1}
                                value={verificationCode[index] || ''}
                                onChangeText={(value) => setVerificationCode(prevCode => updateCode(prevCode, index, value))}
                            />
                        ))}
                    </View>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                        {[...Array(3)].map((_, index) => (
                            <TextInput
                                key={index + 3}
                                style={[styles.phnDigit]}
                                keyboardType="numeric"
                                maxLength={1}
                                value={verificationCode[index + 3] || ''}
                                onChangeText={(value) => setVerificationCode(prevCode => updateCode(prevCode, index + 3, value))}
                            />
                        ))}
                    </View>
                </View>

                <Pressable style={[styles.nextBtn, { marginTop: 10 }]} onPress={() => navigation.navigate('ExchangeConfirmed', { enteredMoney: numericAmount })}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Continue</Text>
                </Pressable>
            </View>
        </View>
    )
}
const updateCode = (code, index, value) => {
    const newCode = code.split('');
    newCode[index] = value;
    return newCode.join('');
};


export default ExchangeVerification
const styles = StyleSheet.create({
    phnVerify: {
        flex: 3,
    },
    titleBanner: {
        backgroundColor: '#009387',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 60,
        paddingBottom: 30,
    },
    backButton: {
        marginRight: 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        flex: 1,
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