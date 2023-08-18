import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Deposit = () => {
    const navigation = useNavigation();
    const [fiatSelected, setFiatSelected] = useState(false);
    const [cryptoSelected, setCryptoSelected] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    const handleFiatDeposit = () => {
        // Handle fiat deposit logic here
        console.log('Fiat Deposit selected');
        setFiatSelected(true);
        setCryptoSelected(false);
        setShowBanner(false);
    };

    const handleCryptoDeposit = () => {
        // Handle crypto deposit logic here
        console.log('Crypto Deposit selected');
        setFiatSelected(false);
        setCryptoSelected(true);
        setShowBanner(true);
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleNextPress = () => {
        if (cryptoSelected) {
            setShowBanner(true);
        } else {
            setShowBanner(false);
            // Replace 'Currency' with the name of the next screen you want to navigate to
            navigation.navigate('Currency');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.titleBanner}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Bank Information</Text>
            </View>

            <ScrollView contentContainerStyle={styles.middleContainer}>
                <TouchableOpacity onPress={handleFiatDeposit} style={[styles.buttonContainer, fiatSelected && styles.selectedButton]}>
                    <View style={styles.buttonContent}>
                        <Icon name="money" size={50} color={fiatSelected ? 'white' : 'green'} />
                        <View style={styles.buttonTextContainer}>
                            <Text style={[styles.buttonTitle, fiatSelected && styles.selectedButtonText]}>Fiat Deposit</Text>
                            <Text style={styles.buttonDescription && fiatSelected && styles.selectedButtonText}>Deposit using traditional currencies</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCryptoDeposit} style={[styles.buttonContainer, cryptoSelected && styles.selectedButton]}>
                    <View style={styles.buttonContent}>
                        <Icon name="bitcoin" size={50} color={cryptoSelected ? 'white' : 'orange'} />
                        <View style={styles.buttonTextContainer}>
                            <Text style={[styles.buttonTitle, cryptoSelected && styles.selectedButtonText]}>Crypto Deposit</Text>
                            <Text style={styles.buttonDescription && cryptoSelected && styles.selectedButtonText}>Deposit using cryptocurrencies</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            {showBanner && (
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>You are setting up a crypto exchange, so you shouldn't have any crypto. Please select Fiat Deposit.</Text>
                </View>
            )}

            <View style={styles.nextButtonContainer}>
                <TouchableOpacity
                    onPress={handleNextPress}
                    style={[styles.nextButton, (fiatSelected || cryptoSelected) && styles.activeNextButton]}
                    disabled={!fiatSelected && !cryptoSelected}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    middleContainer: {
        flexGrow: 1,
        paddingVertical: 100,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedButton: {
        backgroundColor: 'grey',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonTextContainer: {
        marginLeft: 16,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    selectedButtonText: {
        color: 'white',
    },
    buttonDescription: {
        fontSize: 14,
        color: '#666',
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
    banner: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        backgroundColor: '#f44336',
        paddingVertical: 10,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Deposit;
