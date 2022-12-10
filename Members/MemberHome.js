import React from 'react';
import { SafeAreaView,  Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../assets/jsx/index';
import Home from './Home';
import Wallet from './Wallet';
import Profile from './Profile';
import Settings from './Settings';



//Declare Bottom Tab As Tab
const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator();

/*
* Member Auth Home Screen Or Home Page For Members
*/
function MemberHome({navigation}) {



    return (
        <SafeAreaView style={styles.appContainer}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ image, focused }) => {
                    
                        if (route.name === 'Home') {
                            return <Image source={require('../assets/images/icons/home.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>
                            
                        } else if (route.name === 'Wallet') {
                            return <Image source={require('../assets/images/icons/wallet.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>

                        } else if (route.name === 'Settings') {
                            return <Image source={require('../assets/images/icons/settings.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>

                        } else if (route.name === 'Profile') {
                            return <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>
                        } 
                    }
                })
            }>
                <Tab.Screen name="Home" options={{header: () => null}} component={Home} />
                <Tab.Screen name="Wallet" component={Wallet} />
                <Tab.Screen name="Settings" component={Settings} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>

        </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default MemberHome;
