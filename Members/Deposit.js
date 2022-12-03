import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Deposit({ navigation }) {

    
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
        <SafeAreaView style={styles.appContainer}>

            

            <ImageBackground style={{maxHeight: 150,}} source={require('../assets/images/cta-bg.jpg')}>

            <View style={styles.header}>
                <Text style={styles.greetText}>Welcome Back, {"\n"}{username}</Text>

                <Pressable onPress={profilePageHandler} style={{flex: 1, alignContent: 'flex-end', justifyContent: 'flex-end', }}>
                    <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.favicon} />
                </Pressable>
            </View>

            <View style={styles.fixToText }>
                <Text style={styles.textWallet}>Wallet Balance:  </Text>
                <Text style={styles.textAmount}>{bal} </Text>

                <Pressable onPress={depositPageHandler} style={styles.smallBtn}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '800', textAlign: 'center' }}>  Top Up </Text>
                </Pressable>
            </View>

            </ImageBackground>

        </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Deposit;
