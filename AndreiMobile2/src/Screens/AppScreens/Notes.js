import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notes = ({ route }) => {
    const { imageRef } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.notesText}>
                Notes should be used to store personal notes on the journey and also to
                show the danger of recording the seed key in notes.
            </Text>
            <Button title="Back" onPress={() => navigation.goBack()} />
            {imageRef && (
                <View style={styles.zoomedImageContainer}>
                    <View style={styles.zoomedImageBackground} />
                    <Image
                        style={styles.zoomedImage}
                        source={imageRef.props.source}
                        resizeMode="contain"
                    />
                </View>
            )}
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
    notesText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Notes;
