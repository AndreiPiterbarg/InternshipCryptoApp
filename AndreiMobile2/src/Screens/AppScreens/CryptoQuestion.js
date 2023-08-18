import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';

const CryptoQuestion = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate('QuestionedCryptoExchange')} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="white" />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>More Info</Text>
                </View>
            </View>

            <Text style={styles.subTitle}>Simulate Initial Crypto Deposit</Text>
            <View style={styles.iconCompleted}>
                <View style={styles.step}>
                    <Icon name="lock" size={30} color="#2ecc71" />
                    <View style={styles.stepTextContainer}>
                        <Text style={styles.stepDescription}>Link your bank account</Text>
                        <Text style={styles.stepAdditionalText}>We will simulate linking your bank account to a secure. Please do not put your real information</Text>
                    </View>
                </View>
                <Dash dashColor={'#57B9BB'} style={styles.dash} />
                <View style={styles.step}>
                    <Icon name="shield" size={30} color="#3498db" />
                    <View style={styles.stepTextContainer}>
                        <Text style={styles.stepDescription}>Initiate a deposit</Text>
                        <Text style={styles.stepAdditionalText}>We will then simulate sending money to a bank account so that it can be added to your crypto account.</Text>
                    </View>
                </View>
                <Dash dashColor={'#57B9BB'} style={styles.dash} />
                <View style={styles.step}>
                    <Icon name="credit-card" size={30} color="#9b59b6" />
                    <View style={styles.stepTextContainer}>
                        <Text style={styles.stepDescription}>Deposit settled</Text>
                        <Text style={styles.stepAdditionalText}>Once the deposit has been sent it will be approved (typically in a few buisness days)</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topBar: {
        backgroundColor: '#009387', // Set background color to '#009387'
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 60,
        paddingBottom: 30,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    subTitle: {
        textAlign: "center",
        fontSize: 18,
        color: '#333',
        marginTop: 20,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    stepTextContainer: {
        marginLeft: 10,
    },
    stepDescription: {
        color: '#333',
        fontWeight: 'bold',
    },
    stepAdditionalText: {
        color: '#888',
        fontStyle: 'italic',
    },
    iconCompleted: {
        flexDirection: 'column',
        height: 200,
        padding: 20,
        marginTop: 50,
    },
    dash: {
        width: 1,
        height: 80,
        top: 0,
        left: 30,
        flexDirection: 'column',
    },
});

export default CryptoQuestion;
