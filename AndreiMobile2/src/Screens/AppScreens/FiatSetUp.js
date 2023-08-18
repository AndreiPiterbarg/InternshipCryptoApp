import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export let enteredMoney = 0; // Initialize enteredMoney variable
const FiatSetUp = () => {
    const route = useRoute();
    const selectedCurrency = route.params?.selectedCurrency;
    const currencyImageSource = route.params?.currencyImageSource;
    const navigation = useNavigation();
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [amount, setAmount] = useState('');

    const handleAgreeTermsToggle = () => {
        setAgreeTerms(!agreeTerms);
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleNextPress = () => {
        if (!agreeTerms) {
            Alert.alert('Please agree to the Terms & Conditions before proceeding.');
            return;
        }

        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount <= 0 || numericAmount > 250000) {
            Alert.alert('Invalid amount. Please enter a valid amount between 0 and 250,000.');
            return;
        }

        // Navigate to the next screen
        navigation.navigate('ExchangeVerification', { enteredMoney: numericAmount }); // Pass numericAmount as parameter
    };
    const amountInputRef = useRef(null);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.titleBanner}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Set Up Fiat Wallet</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>What to Expect:</Text>
                <View style={styles.bulletPoint}>
                    <Icon name="check-circle" size={18} color="#009387" />
                    <Text style={styles.bulletText}>Send money to your crypto account</Text>
                </View>
                <View style={styles.bulletPoint}>
                    <Icon name="check-circle" size={18} color="#009387" />
                    <Text style={styles.bulletText}>Allow some time for authentication</Text>
                </View>
                <View style={styles.bulletPoint}>
                    <Icon name="check-circle" size={18} color="#009387" />
                    <Text style={styles.bulletText}>Maximum amount: $250,000</Text>
                </View>
                <View style={styles.bulletPoint}>
                    <Icon name="check-circle" size={18} color="#009387" />
                    <Text style={styles.bulletText}>Amount will be added to your crypto wallet</Text>
                </View>
            </View>



            <View style={styles.amountContainer}>
                <TextInput
                    placeholder="Enter amount (max: 250,000)"
                    style={styles.amountInput}
                    keyboardType="numeric"
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                    maxLength={8}
                    returnKeyType="done"
                    ref={amountInputRef} // Assign the ref to the TextInput
                    onSubmitEditing={() => {
                        // Manually trigger the "Next" button press
                        if (agreeTerms) {
                            handleNextPress();
                        } else {
                            amountInputRef.current.blur(); // Dismiss the keyboard
                        }
                    }}
                />
            </View>

            <Text style={styles.instructionsText}>Please read and agree to the Terms & Conditions:</Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={handleAgreeTermsToggle}>
                <Icon
                    name={agreeTerms ? 'check-square' : 'square'}
                    size={20}
                    color={agreeTerms ? '#009387' : '#ccc'}
                />
                <Text style={styles.checkboxLabel}>I understand and agree to the Terms & Conditions.</Text>
            </TouchableOpacity>

            <View style={styles.nextButtonContainer}>
                <TouchableOpacity
                    onPress={handleNextPress}
                    style={[styles.nextButton, (agreeTerms && styles.activeNextButton)]}
                    disabled={!agreeTerms}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
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
    infoContainer: {
        padding: 20,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 8,
        elevation: 3,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    bulletPoint: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    bulletText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#666',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    currencyImage: {
        width: 100,
        height: 100,
    },
    currencyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 20,
    },
    amountInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    instructionsText: {
        fontSize: 16,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
        paddingHorizontal: 10,
    },
    nextButtonContainer: {
        justifyContent: 'flex-end',
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    nextButton: {
        backgroundColor: '#ccc',
        alignSelf: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 8,
    },
    activeNextButton: {
        backgroundColor: '#009387',
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FiatSetUp;


