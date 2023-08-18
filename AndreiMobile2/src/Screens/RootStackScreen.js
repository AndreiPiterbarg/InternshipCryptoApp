import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import SplashScreen1 from './Splashscreens/SplashScreen1'
import SplashScreen2 from './Splashscreens/SplashScreen2'
import LoginScrn from './LoginScreen/LoginScrn'
import NewSplash from './Splashscreens/NewSplash'
import SignInScreen from './LoginScreen/SignInScreen'
import SignUpScreen from './LoginScreen/SignUpScreen'
import EmailConfirmation from './LoginScreen/EmailConfirmation'
import HomeScreen from './AppScreens/HomeScreen'
import EmailVerified from './LoginScreen/EmailVerified'
import InfoScreens1 from './InfoScreens/InfoScreens1'
import InfoScreens2 from './InfoScreens/InfoScreens2'
import InfoScreens3 from './InfoScreens/InfoScreens3'
import PasswordScreen from './LoginScreen/PasswordScreen'
import PhoneScreen from './LoginScreen/PhoneScreen'
import PhoneVerification from './LoginScreen/PhoneVerification'
import PhoneConfirmed from './LoginScreen/PhoneConfirmed'
import WelcomeScreen from './AppScreens/WelcomeScreen'
import IdentityScreen from './IdentityScreens/IdentityScreen'
import IdentityDetailsScreen from './IdentityScreens/IdentityDetailsScreen'
import IdentityIDScreen from './IdentityScreens/IdentityIDScreen'
import IDVerified from './IdentityScreens/IDVerified'
import RatingScreen1 from './RatingScreen/RatingScreen1'
import Notes from './AppScreens/Notes'
import Appstore from './AppScreens/Appstore'
import Camera from './AppScreens/Camera'
import EmailApp from './AppScreens/EmailApp'
import Password from './AppScreens/Password'
import Phone from './AppScreens/Phone'
import Photos from './AppScreens/Photos'
import Search from './AppScreens/Search'
import Settings from './AppScreens/Settings'
import TextApp from './AppScreens/TextApp'
import Wallet from './AppScreens/Wallet'
import CryptoExchange from './AppScreens/CryptoExchange'
import CryptoQuestion from './AppScreens/CryptoQuestion'
import QuestionedCryptoExchange from './AppScreens/QuestionedCryptoExchange'
import ExchangeSim from './AppScreens/ExchangeSim'
import Bank from './AppScreens/Bank'
import ExchangeVerification from './AppScreens/ExchangeVerification'
import ExchangeConfirmed from './AppScreens/ExchangeConfirmed'
import Deposit from './AppScreens/Deposit'
import Currency from './AppScreens/Currency'
import FiatSetUp from './AppScreens/FiatSetUp'
import Success from './AppScreens/Success'
import TransferMoney from './AppScreens/TransferMoney'
import Exchange from './AppScreens/Exchange'




const Stack = createStackNavigator();
const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

const fadeConfig = ({ current }) => ({
    cardStyle: {
        opacity: current.progress, // Fade in based on the current progress of the screen
    },
});

const customScreenOptions = {
    gestureEnabled: false, // Disable swipe gesture to close the modal
    ...fadeConfig, // Apply the fade-in transition
};


const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator screenOptions={
        {
            headerShown: false,
        }
    }>
        <Stack.Screen name='Home' component={HomeScreen} />

        <Stack.Screen name='Exchange' component={Exchange} />

        <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
        <Stack.Screen
            name="SplashScreen2"
            component={SplashScreen2}
            options={{ animation: 'fade' }}
        />

        <Stack.Screen
            name="CryptoQuestion"
            component={CryptoQuestion}
            options={{ animation: 'fade' }}
        />

        <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ animation: 'slide_from_bottom' }} // Apply the custom fade-in transition for other screens
        />


        <Stack.Screen name='RatingScreen' component={RatingScreen1} />
        <Stack.Screen name='IDVerified' component={IDVerified} />
        <Stack.Screen name='IdentityDetailsScreen' component={IdentityDetailsScreen} />
        <Stack.Screen name='IdentityIDScreen' component={IdentityIDScreen} />
        <Stack.Screen name='IdentityScreen' component={IdentityScreen} />
        <Stack.Screen name='PhoneScreen' component={PhoneScreen} />

        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='PasswordScreen' component={PasswordScreen} />
        <Stack.Screen name='PhoneConfirmed' component={PhoneConfirmed} />
        <Stack.Screen name='FiatSetUp' component={FiatSetUp} />
        <Stack.Screen name='ExchangeConfirmed' component={ExchangeConfirmed} />
        <Stack.Screen name='ExchangeVerification' component={ExchangeVerification} />
        <Stack.Screen name='PhoneVerification' component={PhoneVerification} />
        <Stack.Screen name='InfoScreens1' component={InfoScreens1} />
        <Stack.Screen
            name="InfoScreens2"
            component={InfoScreens2}
            options={{ animation: 'fade' }}
        />
        <Stack.Screen
            name="InfoScreens3"
            component={InfoScreens3}
            options={{ animation: 'fade' }}
        />


        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='NewSplash' component={NewSplash} />
        <Stack.Screen name='EmailConfirmation' component={EmailConfirmation} />
        <Stack.Screen name='EmailVerified' component={EmailVerified} />



        <Stack.Screen name='LoginScreen' component={LoginScrn} />
        <Stack.Screen name='Notes' component={Notes} />
        <Stack.Screen name='Appstore' component={Appstore} />
        <Stack.Screen name='Camera' component={Camera} />
        <Stack.Screen name='EmailApp' component={EmailApp} />
        <Stack.Screen name='Password' component={Password} />
        <Stack.Screen name='Phone' component={Phone} />
        <Stack.Screen name='Photos' component={Photos} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='TextApp' component={TextApp} />
        <Stack.Screen name='Wallet' component={Wallet} />
        <Stack.Screen name='CryptoExchange' component={CryptoExchange} />
        <Stack.Screen name='QuestionedCryptoExchange' component={QuestionedCryptoExchange} />

        <Stack.Screen name='ExchangeSim' component={ExchangeSim} />
        <Stack.Screen name='Bank' component={Bank} />

        <Stack.Screen name='Currency' component={Currency} />

        <Stack.Screen name='Deposit' component={Deposit} />
        <Stack.Screen name='Success' component={Success} />
        <Stack.Screen name='TransferMoney' component={TransferMoney} />

    </RootStack.Navigator>
);

export default RootStackScreen;
