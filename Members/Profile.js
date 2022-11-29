import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Profile({ navigation }) {

    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


    const depositPageHandler = () => {
        navigation.navigate('Deposit');
    }
    const memberHomeHandler = () => {
        navigation.navigate('MemberHome');
    }


    return (
        <SafeAreaView style={styles.appContainer}>

            <ImageBackground style={{ maxHeight: 150, }} source={require('../assets/images/cta-bg.jpg')}>

                <View style={styles.header}>
                    <Text style={styles.greetText}>{username}'s Profile</Text>
                    <Pressable onPress={Profile} style={{ flex: 1, alignContent: 'flex-end', justifyContent: 'flex-end', }}>
                        <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.favicon} />
                    </Pressable>
                </View>

                <View style={styles.fixToText}>
                    <Text style={styles.textWallet}>Wallet Balance:  </Text>
                    <Text style={styles.textAmount}>{bal} </Text>

                    <Pressable onPress={memberHomeHandler} style={styles.smallBtn}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '800', textAlign: 'center' }}>  Upload Image </Text>
                    </Pressable>
                </View>

            </ImageBackground>

                <ScrollView style={styles.appContainer}>
                    <Text style={styles.smallText}>Profile Page </Text>

                    <View style={styles.imageContainer}>

                        <Pressable onPress={depositPageHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 35, padding: 15, borderRadius: 5 })}>
                            <Text style={{ color: '#fff' }}>Make A Transaction</Text>
                        </Pressable>
                        
                    </View>
                </ScrollView>

        </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Profile;
