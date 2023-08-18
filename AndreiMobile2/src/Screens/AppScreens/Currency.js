import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const currencies = [
    { id: 'USD', name: 'United States Dollar', source: require('../../assets/images/dollar.png') },
    { id: 'EUR', name: 'Euro', source: require('../../assets/images/euro.png') },
    { id: 'JPY', name: 'Japanese Yen', source: require('../../assets/images/yen.png') },
    { id: 'GBP', name: 'British Pound Sterling', source: require('../../assets/images/pound.png') },
    { id: 'AUD', name: 'Australian Dollar', source: require('../../assets/images/adollar.png') },
    { id: 'CAD', name: 'Canadian Dollar', source: require('../../assets/images/cdollar.png') },
    { id: 'CHF', name: 'Swiss Franc', source: require('../../assets/images/franc.png') },
    { id: 'CNY', name: 'Chinese Yuan', source: require('../../assets/images/yuan.png') },
    { id: 'SEK', name: 'Swedish Krona', source: require('../../assets/images/krona.png') },
    // Add more currencies here
];

const Currency = () => {
    const navigation = useNavigation();
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency);
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleNextPress = () => {
        if (selectedCurrency) {
            navigation.navigate('FiatSetUp', {
                selectedCurrency: selectedCurrency,
                currencyImageSource: selectedCurrency.source,
            });
        }
    };

    const renderCurrencyItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.currencyItem, selectedCurrency === item.id && styles.selectedCurrencyItem]}
            onPress={() => handleCurrencySelect(item.id)}
        >
            <View style={styles.currencyIconContainer}>
                <Image source={item.source} style={styles.currencyIcon} />
            </View>
            <Text style={[styles.currencyText, selectedCurrency === item.id && styles.selectedCurrencyText]}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.titleBanner}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Select Currency</Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.subHeading}>Select a currency to verify your bank account for the crypto exchange:</Text>
                <FlatList
                    data={currencies}
                    renderItem={renderCurrencyItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.currencyList}
                />

                <View style={styles.nextButtonContainer}>
                    <TouchableOpacity
                        onPress={handleNextPress}
                        style={[styles.nextButton, (selectedCurrency && styles.activeNextButton)]}
                        disabled={!selectedCurrency}
                    >
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
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

    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        flex: 1,
    },
    currencyIconContainer: {
        marginRight: 10,
    },
    currencyIcon: {
        width: 24, // Adjust the width as needed
        height: 24, // Adjust the height as needed
    },
    contentContainer: {
        flex: 1,
    },
    currencyList: {
        padding: 16,
    },
    currencyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedCurrencyItem: {
        backgroundColor: 'grey',
    },
    currencyIconContainer: {
        marginRight: 10,
    },
    currencyText: {
        fontSize: 18,
    },
    selectedCurrencyText: {
        color: 'white',
    },
    subHeading: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
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
        backgroundColor: '#009387', // Turn green when active
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
    },
    disabledNextButton: {
        backgroundColor: '#ccc',
    },
});

export default Currency;
