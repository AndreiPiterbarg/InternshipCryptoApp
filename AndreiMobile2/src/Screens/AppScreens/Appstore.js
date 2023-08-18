import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Appstore = () => {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack(); // Navigate back to the previous screen (HomeScreen)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                App Store should help simulate searching for key apps to demonstrate the process of downloading resources. Partner apps can be hosted here to redirect to actual downloads.
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

export default Appstore;