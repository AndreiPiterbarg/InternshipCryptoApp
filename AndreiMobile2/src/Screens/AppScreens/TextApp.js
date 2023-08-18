import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TextApp = () => {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack(); // Navigate back to the previous screen (HomeScreen)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Text app should be able to receive simulated text messages to mirror 2FA and other needed examples. It should also facilitate chats between other members on the platform.
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

export default TextApp;