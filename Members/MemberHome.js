import React from 'react';
import { SafeAreaView,  Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../assets/jsx/index';
import Home from './Home';
import Deposit from './Deposit';
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
                    header: () => null,
                    tabBarIcon: ({ image, focused }) => {
                    
                        if (route.name === 'Home') {
                            return <Image source={require('../assets/images/icons/dashboard.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>
                            
                        } else if (route.name === 'Wallet') {
                            return <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>

                        } else if (route.name === 'Settings') {
                            return <Image source={require('../assets/images/icons/settings.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>

                        } else if (route.name === 'Profile') {
                            return <Image source={require('../assets/images/icons/contact.png')} resizeMode='contain' style={{width: 25, height: 30, }}></Image>
                        } 
                    }
                })
            }>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Wallet" component={Deposit} />
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
