import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuestionedCryptoExchange = ({ navigation }) => {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleNextPress = () => {
        if (!buttonPressed) {
            navigation.navigate('ExchangeSim'); // Replace 'NextPage' with the name of your next page component
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>CryptoExchange</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ExchangeSim')} style={styles.questionButton}>
                    <Icon name="question-circle" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Icon name="lock" size={40} color="#2ecc71" />
                    <Text style={styles.infoText}>Secure & Private</Text>
                    <Text style={styles.infoDescription}>
                        Encryption is used to verify transactions: advanced coding is involved in storing and transmitting cryptocurrency data.
                        The aim of encryption is to provide security and safety.
                    </Text>
                </View>

                <View style={styles.infoItem}>
                    <Icon name="shield" size={40} color="#3498db" />
                    <Text style={styles.infoText}>Regulations</Text>
                    <Text style={styles.infoDescription}>
                        Established crypto exchanges must follow regulatory guidelines and requirements which help prevent fraudulent activity.
                        Ensuring your investments are protected.
                    </Text>
                </View>

                <View style={styles.infoItem}>
                    <Icon name="credit-card" size={40} color="#9b59b6" />
                    <Text style={styles.infoText}>Protection Programs</Text>
                    <Text style={styles.infoDescription}>
                        Some crypto exchanges provide insurance covers for users in case of hacks or security breaches.
                        This insurance helps to safeguard your assets.
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => handleNextPress()} style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    nextButton: {
        backgroundColor: '#009387',
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderRadius: 25,
        margin: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
    nextButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    topBar: {
        backgroundColor: '#009387',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 60,
        paddingBottom: 30,
    },
    backButton: {
        marginRight: 10,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    questionButton: {
        marginLeft: 10,
    },
    infoContainer: {
        marginTop: 60,
        alignItems: 'center',
    },
    infoItem: {
        marginBottom: 40,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333',
    },
    infoDescription: {
        textAlign: 'center',
        color: '#666',
        marginHorizontal: 20,
    },
});

export default QuestionedCryptoExchange;
