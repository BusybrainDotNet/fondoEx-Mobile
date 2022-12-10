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
        <>
            <SafeAreaView style={styles.appContainer}>

                <ScrollView style={styles.appContainer}>
                    <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.faviconProfile} />
                
                    <View>
                        <Text style={styles.titleText}> {username} </Text>
                        
                    </View>

                </ScrollView>

            </SafeAreaView>
        </>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Profile;
