import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Modal, TextInput } from 'react-native';
import ChaseIcon from '../../assets/images/chase.png';
import Visa from '../../assets/images/visa.png';
import PayPal from '../../assets/images/paypal.png';
import Citi from '../../assets/images/citi.png';
import Hsbc from '../../assets/images/hsbc.png';
import AmericanExpress from '../../assets/images/american-express.png';
import { useNavigation } from '@react-navigation/native';

const ExchangeSim = () => {
    const navigation = useNavigation();
    const [selectedBank, setSelectedBank] = useState(null); // Add this state to store the selected bank

    const [banks, setBanks] = useState([
        { id: 1, name: 'Chase Bank', icon: ChaseIcon },
        { id: 2, name: 'Visa', icon: Visa },
        { id: 3, name: 'PayPal', icon: PayPal },
        { id: 4, name: 'Citi', icon: Citi },
        { id: 5, name: 'HSBC', icon: Hsbc },
        { id: 6, name: 'American Express', icon: AmericanExpress },
        // Add more banks as needed
    ]);


    const [filteredBanks, setFilteredBanks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            setFilteredBanks([]);
            return;
        }

        const filtered = banks.filter(bank => bank.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredBanks(filtered);
    };



    const renderBankItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => setSelectedBank(item)} // Update the selected bank
            style={[
                styles.bankButton,
                selectedBank?.id === item.id ? styles.selectedBank : null // Apply selected style if the bank is selected
            ]}
        >
            <View style={styles.bankIconContainer}>
                <Image source={item.icon} style={styles.bankIcon} />
            </View>
            <Text style={styles.bankName}>{item.name}</Text>
        </TouchableOpacity>
    );







    const handleNextPress = () => {
        if (selectedBank) {
            navigation.navigate('Bank', { chosenBank: selectedBank.name, bankIcon: selectedBank.icon });
        } else {
            // Handle the case where no bank is selected
            Alert.alert('Please select a bank before proceeding.');
        }
    };





    return (
        <View style={styles.container}>
            <View style={styles.titleBanner}>
                <Text style={styles.title}>Select Your Bank</Text>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search banks..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Image source={require('../../assets/images/search1.png')} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={filteredBanks.length > 0 ? filteredBanks : banks}
                renderItem={renderBankItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
            <TouchableOpacity
                style={[styles.nextButton, selectedBank ? styles.nextButtonActive : null]}
                onPress={handleNextPress} // Move the handleNextPress to the button press
                disabled={!selectedBank} // Disable the button if no bank is selected
            >
                <Text style={styles.nextButtonText}>Next Page</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 8,
        marginTop: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 10,
        fontSize: 16,
    },

    titleBanner: {
        backgroundColor: '#009387',
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        paddingVertical: 30,
    },
    listContainer: {
        paddingBottom: 16,
    },
    bankButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    searchButton: {
        padding: 10,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    selectedBank: {
        backgroundColor: '#D3D3D3',
    },
    bankIconContainer: {
        marginRight: 20,
    },
    bankIcon: {
        width: 40,
        height: 40,
    },
    bankName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    nextButton: {
        backgroundColor: '#ccc',
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 30,
    },
    nextButtonActive: {
        backgroundColor: '#009387',
    },
    nextButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ExchangeSim;
