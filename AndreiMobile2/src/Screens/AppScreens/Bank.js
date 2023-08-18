import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BankPage = () => {
    const route = useRoute();
    const chosenBank = route.params?.chosenBank;
    const bankIcon = route.params?.bankIcon;
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleNextPress = () => {
        // Replace 'NextPage' with the name of the next screen you want to navigate to
        navigation.navigate('Deposit');
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleBanner}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Bank Information</Text>
            </View>
            <View style={styles.bankIconContainer}>
                <Image source={bankIcon} style={styles.bankIcon} />
            </View>
            <Text style={styles.subheading}>You chose: {chosenBank}</Text>
            <Text style={styles.infoText}>You would normally enter your bank information here, but since this is a simulation, you don't need to provide real data.</Text>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
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
    bankIconContainer: {
        flexDirection: 'row', // Align icon to the left of the bank information
        justifyContent: 'center', // Center the icon horizontally
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    bankIcon: {
        width: 150, // Increase icon size
        height: 150, // Increase icon size
    },
    subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,

    },
    infoText: {
        fontSize: 18,

        paddingHorizontal: 10,
    },
    nextButton: {
        backgroundColor: '#009387',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BankPage;