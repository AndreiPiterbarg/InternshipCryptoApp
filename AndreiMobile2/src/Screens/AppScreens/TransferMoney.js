import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TransferMoney = () => {
    const route = useRoute();

    const [amount, setAmount] = useState('');
    const numericAmount = parseFloat(amount);
    const { enteredMoney } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Entered Money: {enteredMoney} USD</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TransferMoney;
