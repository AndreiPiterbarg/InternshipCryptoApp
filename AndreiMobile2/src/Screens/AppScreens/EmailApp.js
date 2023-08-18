import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Email = () => {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack(); // Navigate back to the previous screen (HomeScreen)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Email app should be able to simulate 2FA email, phishing emails, platform notification, affiliate information and communication between platform users.Notes should be used to store personal notes on the journey and also to
                show the danger of recording the seed key in notes.
            </Text>
            <Button title="Back" onPress={handleBackButton} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Email;