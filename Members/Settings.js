import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';


/*
* Member Auth Home Screen Or Home Page For Members
*/
function Settings({ navigation }) {

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
    const notificationPageHandler = () => {
    navigation.navigate('Notification');
    }


    return (

        <SafeAreaView style={styles.appContainer}>
            
            <View style={{marginTop: '5%', }}>
                    <Text style={styles.titleText}>Personalize Your Fondo Expreso Account</Text>
                </View>
                
                <View style={{flexDirection: 'column',}}>
                    <View style={styles.optionBox}>
                        <Pressable onPress={homePageHandler} style={{flexDirection: 'row', flex: 1, }}>
                            <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                            <Text style={{color: '#595959', fontSize: 14,flexDirection: 'row',}}>Profile Settings</Text>
                            <Text style={{color: '#595959', fontSize: 10,}}>Edit Profile Details</Text>
                        </Pressable>
                    </View>
                    <View style={styles.optionBox}>
                        <Pressable onPress={homePageHandler} style={{flexDirection: 'row',}}>
                            <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                            <Text style={{color: '#595959', fontSize: 14, }}>Set Pin</Text>
                            <Text style={{color: '#595959', fontSize: 10,}}>  </Text>
                        </Pressable>
                    </View>
                    <View style={styles.optionBox}>
                        <Pressable onPress={homePageHandler} style={{flexDirection: 'row',}}>
                            <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                            <Text style={{color: '#595959', fontSize: 14, }}>Update Password</Text>
                        </Pressable>
                    </View>
                </View>

        </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Settings;
