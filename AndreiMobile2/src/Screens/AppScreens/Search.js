import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack(); // Navigate back to the previous screen (HomeScreen)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Web app should launch to a home page which shows affiliate advertising and key news. Links should redirect to real world resources where appropriate such as Partner apps/websites.
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

export default Search;