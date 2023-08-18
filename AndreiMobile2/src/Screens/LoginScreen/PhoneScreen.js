import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Image, ScrollView } from 'react-native'
import { Alert } from 'react-native-web'
import { Picker } from '@react-native-picker/picker'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';

const PhoneScreen = ({ navigation }) => {

    const [checkBox, setCheckBox] = React.useState(false)
    const [selectedCountry, setSelectedCountry] = React.useState('')
    const [showCountry, setShowCountry] = React.useState(false)
    const [myNumber, setMyNumber] = useState('');

    let data = [{ id: 1, name: 'Afghanistan', img: require('../../assets/images/afg.png'), code: '+93' },
    { id: 1, name: 'Argentina', img: require('../../assets/images/arg.png'), code: '+54' },
    { id: 1, name: 'Australia', img: require('../../assets/images/aus.png'), code: '+61' },
    { id: 1, name: 'Bangladesh', img: require('../../assets/images/bng.png'), code: '+880' },
    { id: 1, name: 'Brazil', img: require('../../assets/images/bzl.png'), code: '+55' },
    { id: 1, name: 'China', img: require('../../assets/images/chn.png'), code: '+86' },
    { id: 1, name: 'Finland', img: require('../../assets/images/fin.png'), code: '+3358' },
    { id: 1, name: 'India', img: require('../../assets/images/ind.png'), code: '+91' },
    { id: 1, name: 'Japan', img: require('../../assets/images/jpn.png'), code: '+81' },
    { id: 1, name: 'Nepal', img: require('../../assets/images/nep.png'), code: '+977' },
    { id: 1, name: 'Nigeria', img: require('../../assets/images/nig.png'), code: '+234' },
    { id: 1, name: 'South Korea', img: require('../../assets/images/skor.png'), code: '+82' }

    ]

    const showCountryFunction = () => {
        setShowCountry(!showCountry)
    }
    const textInputChange = (val) => {
        setMyNumber(val);
    }
    const onSelected = (val) => {
        setShowCountry(false)
        setSelectedCountry(val)
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.botContent}>

                {/* Feather Icon */}
                <Feather
                    onPress={() => navigation.navigate('EmailVerified')}
                    name="arrow-left"
                    size={50}
                    color="#0BA09C"

                />
                <Text style={{ color: '#0ba09c', fontSize: 20, fontWeight: '800', marginTop: 10, }}>Sign Up</Text>

                <View style={{ width: 50, height: 50 }} />
            </View>
            <View style={styles.phoneContent}>
                <Text style={{ color: '#0ba09c', fontSize: 15, lineHeight: 20, fontWeight: '700', marginTop: 100, padding: 10 }}>Phone Number:</Text>
                <TouchableOpacity>
                    <View style={styles.phoneData}>
                        <Fontawesome
                            style={{ width: '10%', alignItems: 'center' }}
                            name='caret-down'
                            size={20}
                            onPress={() => showCountryFunction()}
                        >
                        </Fontawesome>
                        <Image style={{ width: 30, height: 30, borderRadius: 50 }} source={selectedCountry.img} />
                        <Text style={{ width: '15%', marginHorizontal: 10 }}>{selectedCountry ? selectedCountry.code : '+'}</Text>


                        <TextInput
                            style={[styles.TextInput, { padding: 10, width: '75%' }]}
                            placeholder='Enter Phone Number'
                            keyboardType='numeric'
                            onChangeText={(text) => textInputChange(text)} // Use the textInputChange function to update the state
                            value={myNumber} // Use the myNumber state variable as the value
                            maxLength={10} // setting limit of input
                            returnKeyType="done"
                            blurOnSubmit={true}
                        />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <ScrollView style={styles.scrollCountry}>
                            {showCountry && (<View>
                                {data.map((val, i) => {
                                    return (
                                        <TouchableOpacity style={styles.countryList} onPress={() => onSelected(val)}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image style={styles.countryImage} source={val.img} />
                                                <Text>{val.name}</Text>
                                            </View>
                                            <Text style={{}}>{val.code}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>)}

                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View>
                    {selectedCountry ? <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                        <Pressable onPress={() => setCheckBox(!checkBox)}>
                            {checkBox ?

                                <Animatable.View
                                    animation='bounceIn'
                                    duration={1500}
                                >
                                    <Feather
                                        name='check-square'
                                        size={20}
                                    />
                                </Animatable.View> :
                                <Feather
                                    name='square'
                                    size={20}
                                />
                            }
                        </Pressable>
                        <Text style={{ fontWeight: '700' }}>I accept the <Text style={{ color: '#0ba09c' }}>Terms & Conditions</Text> and I have read the <Text style={{ color: '#0ba09c' }}>Cryptoplayground Dislaimers.</Text></Text>
                    </View> : <View>
                        <Text style={{ fontSize: 10, fontWeight: '700', lineHeight: 22, textAlign: 'center' }}>Choose your country of residence and fill in your phone number</Text>
                    </View>}

                </View>
                <Pressable style={[styles.nextBtn, { marginTop: 10 }]} onPress={() => navigation.navigate('PhoneVerification')}>
                    <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Send Verification Code</Text>
                </Pressable>


            </View>
        </View>
    )
}

export default PhoneScreen
const styles = StyleSheet.create({
    phoneContent: {
        flex: 4,
    },
    phoneData: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#0ba09c',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center'
    },
    scrollCountry: {
        height: 420
    },
    countryList: {
        marginTop: 10,
        position: 'relative',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 5,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        borderRadius: 20
    },
    countryImage: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginRight: 10
    },
    nextBtn: {
        backgroundColor: '#0ba09c',
        borderRadius: 10,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botContent: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 10,
        justifyContent: 'space-around',
    },
})