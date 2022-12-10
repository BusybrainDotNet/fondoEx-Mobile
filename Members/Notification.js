import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Notification({ navigation }) {

    
   /*
    * Define Page Navigations
    */  
    const homePageHandler = () => {
        navigation.navigate('MemberHome');
    }
    const depositPageHandler = () => {
        navigation.navigate('Deposit');
    }
    const profilePageHandler = () => {
        navigation.navigate('Profile');
    }
    const settingsPageHandler = () => {
        navigation.navigate('Settings');
    }



    /*
    * Define User Details
    */  
    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');



    return (
        <>
            <SafeAreaView style={styles.appContainer}>

                <ScrollView style={styles.appContainer}>
                    <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.favicon} />
                    
                    <View style={styles.fixToText }>
                    
                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Notification;
