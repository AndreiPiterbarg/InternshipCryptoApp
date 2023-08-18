import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const InfoScreens1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Image style={styles.img} source={require('../../assets/images/pana.png')} />
                <View style={[{ marginTop: 20 }]}>
                    <Text style={styles.header_text}>
                        Easy-to-navigate learning
                    </Text>
                    <Text style={styles.header_text}>
                        journeys
                    </Text>
                </View>

                <View style={[{ marginTop: 20 }]}>

                    <Text style={styles.info_text}>
                        Learn Crypto  as a Level1 Explorer,
                    </Text>
                    <Text style={styles.info_text}> Level2 Investor or Level3 Wealth Creator.
                    </Text>
                    <Text style={styles.info_text}>
                        Earn badges and rewards along the way
                    </Text>
                </View>
            </View>
            <View style={styles.midContent}>
                <Text style={[{ fontSize: 50, color: 'red' }]}>-</Text>
                <Text style={[{ fontSize: 50, color: 'grey' }]}>-</Text>
                <Text style={[{ fontSize: 50, color: 'grey' }]}>-</Text>
            </View>
            <View style={styles.botContent}>
                {/* Feather Icon */}
                <Feather
                    onPress={() => navigation.navigate('EmailVerified')}
                    name="arrow-left"
                    size={50}
                    color="#0BA09C"
                />
                {/* Next Button */}
                <Pressable style={styles.btnNext} onPress={() => navigation.navigate('InfoScreens2')}>
                    <Text style={styles.infoBtn}>Next</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default InfoScreens1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topContent: {
        flex: 4,
    },
    img: {
        marginTop: 50,
        width: '100%'
    },
    header_text: {
        fontSize: 30,
        bottom: -10,
        fontWeight: '700',
        textAlign: 'center'

    },
    info_text: {
        fontWeight: '400',
        fontSize: 15,
        textAlign: 'center',
        color: '#808080',
        bottom: -10,
    },
    midContent: {
        flex: 0.5,
        bottom: -50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    botContent: {
        flex: 1,
        bottom: -20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 50,
    },
    btnNext: {
        backgroundColor: '#0ba09c',
        borderRadius: 10,
        width: 125,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})