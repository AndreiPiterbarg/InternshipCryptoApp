import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d&locale=en';
const API_KEY = 'YOUR_API_KEY';

const CryptoTracker = () => {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        fetchCryptos();
    }, []);

    const fetchCryptos = async () => {
        try {
            const response = await fetch(`${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CMC_PRO_API_KEY': API_KEY,
                },
            });
            const data = await response.json();
            setCryptos(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cryptos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cryptoItem}>
                        <Text style={styles.cryptoName}>{item.name}</Text>
                        <Text style={styles.cryptoPrice}>Price: ${item.current_price}</Text>
                        {/* Add more information you want to display */}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    cryptoItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    cryptoName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cryptoPrice: {
        fontSize: 16,
    },
});

export default CryptoTracker;
