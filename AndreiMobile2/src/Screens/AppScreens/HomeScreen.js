import React, { useState, useRef } from 'react';
import { View, Image, Text, Pressable, TextInput, StyleSheet, Animated, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = () => {

    const [showSearchBar, setShowSearchBar] = useState(false);
    const searchBoxHeight = useRef(new Animated.Value(0));
    const navigation = useNavigation();

    const handleImagePress = (buttonName) => {
        switch (buttonName) {
            case 'Notes':
            case 'Appstore':
            case 'Crypto Exchange':
                navigation.navigate('CryptoExchange');
                break;
            case 'Camera':
                navigation.navigate('TextApp');
                break;
            case 'Text':
                navigation.navigate('TextApp');
                break;
            case 'Mail':
                navigation.navigate('EmailApp');
                break;
            case 'Password':
            case 'Phone':
            case 'Photos':
            case 'Search':
            case 'Settings':

            case 'Wallet':
                navigation.navigate('Wallet');
                break;
            case 'SearchBar':
                setShowSearchBar(!showSearchBar);
                Animated.timing(searchBoxHeight, {
                    toValue: showSearchBar ? 0 : 100,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
                break;
            default:
                break;
        }
    };

    const imagesData = [
        { name: 'Notes', source: require('../../assets/images/Notes.png') },
        { name: 'Phone', source: require('../../assets/images/Phone.png') },
        { name: 'Appstore', source: require('../../assets/images/AppStore.png') },
        { name: 'Wallet', source: require('../../assets/images/Wallet.png') },
        { name: 'Text', source: require('../../assets/images/Text.png') },
        { name: 'Settings', source: require('../../assets/images/Settings.png') },
        { name: 'Password', source: require('../../assets/images/Password.png') },
        { name: 'Search', source: require('../../assets/images/Search.png') },
        { name: 'Crypto Exchange', source: require('../../assets/images/CryptoExchange.png') },
    ];

    const bottomImagesData = [
        { name: 'Camera', source: require('../../assets/images/Camera.png') },
        { name: 'Photos', source: require('../../assets/images/Photos.png') },
        { name: 'Mail', source: require('../../assets/images/Mail.png') },
    ];

    const imagesWithText = ['Notes', 'Phone', 'Appstore', 'Wallet', 'Text', 'Settings', 'Password', 'Search', 'Crypto Exchange'];


    const renderImage = (data) => {
        const showText = imagesWithText.includes(data.name);

        return (

            <View style={styles.imageWrapper} key={data.name}>
                <Pressable onPress={() => handleImagePress(data.name)}>
                    <Image style={styles.image} source={data.source} />
                </Pressable>
                {showText && <Text style={[styles.imageText, styles.HomeText]}>{data.name}</Text>}
            </View>
        );
    };

    return (
        <ImageBackground source={require('../../assets/images/HomeWallpaper.png')} style={styles.container}>
            <View style={styles.homeScreen}>
                {imagesData.map((data) => renderImage(data))}
            </View>


            <View style={styles.bottomCentered}>


                <View style={styles.bottomCentered}>
                    <Image
                        style={styles.iosBottomRect}
                        source={require('../../assets/images/IOSBottomRect.png')}
                    />

                    <View style={styles.homeScreenBottom}>
                        {bottomImagesData.map((data) => renderImage(data))}
                    </View>
                </View>

                <View style={styles.searchCentered}>
                    <Pressable onPress={() => handleImagePress('SearchBar')}>
                        {/* Add the following line to render the SearchIOS.png image */}
                        <Image
                            style={styles.searchIcon} // Adjust the style as needed
                            source={require('../../assets/images/SearchIOS.png')}
                        />
                    </Pressable>
                </View>

                {showSearchBar && (
                    <Animated.View style={[styles.searchBarContainer, { height: searchBoxHeight.current }]}>
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Search..."
                            placeholderTextColor="#FFFFFF"
                        />
                    </Animated.View>
                )}
            </View>
        </ImageBackground>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infoButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    homeScreen: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 94,
        paddingHorizontal: 15,
    },
    bottomCentered: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    homeScreenBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
    },
    imageWrapper: {
        marginBottom: 15,
        width: '22.5%',
        alignItems: 'center',
    },
    iosBottomRect: {
        alignItems: 'center',
    },
    image: {
        width: 58,
        height: 58,
    },
    imageText: {
        marginTop: 5,
        color: '#000000',
    },
    searchCentered: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 120,
    },
    searchBarContainer: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchBar: {
        width: '80%',
        height: 40,
        color: '#FFFFFF',
        fontSize: 16,
    },
    HomeText: {
        fontSize: 11,
        color: '#FFFFFF',
        textAlign: 'center',
        margin: 10,
    },

});

export default HomeScreen;

