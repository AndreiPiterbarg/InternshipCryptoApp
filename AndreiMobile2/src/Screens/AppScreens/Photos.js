import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Photos = () => {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack(); // Navigate back to the previous screen (HomeScreen)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Picture app should be used to store photos taken in virtual environment for 2FA purposes and screen shots. Will be used to show the danger of storing seed key in photos with simulated hacks.
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

export default Photos;