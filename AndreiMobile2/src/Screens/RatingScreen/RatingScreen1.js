import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const RatingScreen1 = ({ navigation }) => {
    const [data, setData] = useState([
        { id: 1, title: '1 - No Knowledge at all', checkBox: false },
        { id: 2, title: '2 - Aware of the concepts but curious to discover more Crypto concepts', checkBox: false },
        { id: 3, title: '3 - Basic knowledge and beginner level hands-on experience ', checkBox: false },
        { id: 4, title: '4 - Very knowledgeable', checkBox: false }
    ]);

    const changeCheckBox = (item) => {
        const updatedData = data.map((dataItem) =>
            dataItem.id === item.id ? { ...dataItem, checkBox: !dataItem.checkBox } : dataItem
        );
        setData(updatedData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.headingText}>Rate your Crypto knowledge on a scale of 1 - 5</Text>
            </View>
            <View style={styles.midContent}>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionContainer}
                        onPress={() => changeCheckBox(item)}
                    >
                        {item.checkBox ? (
                            <Feather name='check-circle' size={20} color='#0ba09c' />
                        ) : (
                            <Feather name='circle' size={20} color='#0ba09c' />
                        )}
                        <Text style={styles.optionText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.botContent}>
                <Text style={styles.infoText}>Update anytime from profile settings</Text>
                <View style={styles.buttonsContainer}>
                    <Pressable style={styles.nextBtn} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.btnText}>Skip</Text>
                    </Pressable>
                    <Pressable style={styles.nextBtn} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.btnText}>Continue</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 20,
        fontWeight: '800',
        color: '#0ba09c',
        marginTop: 30,
    },
    topContent: {
        flex: 1,
    },
    midContent: {
        flex: 2,
        width: '100%',
    },
    optionContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    optionText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        color: '#0ba09c',
        marginTop: 20,
        marginLeft: 20,
    },
    botContent: {
        flex: 1,
    },
    infoText: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18,
        marginTop: 80,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    nextBtn: {
        backgroundColor: '#0ba09c',
        borderRadius: 10,
        width: '40%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 15,
    },
});

export default RatingScreen1;
