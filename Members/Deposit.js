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
    const notificationPageHandler = () => {
    navigation.navigate('Notification');
}



    /*
    * Define User Details
    */  
    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');



    return (
        <>
            <SafeAreaView style={styles.appContainer}>

                <View>
                    <Text style={styles.titleText}>How Do You Want To Add Money Into Your Wallet?</Text>
                </View>
                
                <View style={{flexDirection: 'column',}}>
                    <View style={styles.optionBox}>
                        <Pressable onPress={homePageHandler} style={{flexDirection: 'row',}}>
                            <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                            <Text style={{color: '#595959', fontSize: 14, }}>Cards | USSD Code</Text>
                            <Text style={{color: '#595959', fontSize: 18, justifyContent: 'flex-end', marginLeft: 100,}}> > </Text>
                        </Pressable>
                    </View>
                    <View style={styles.optionBox}>
                        <Pressable onPress={homePageHandler} style={{flexDirection: 'row',}}>
                            <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                            <Text style={{color: '#595959', fontSize: 14, }}>Bank Transfer | Deposit</Text>
                            <Text style={{color: '#595959', fontSize: 18, justifyContent: 'flex-end', marginLeft: 70,}}> > </Text>
                        </Pressable>
                    </View>
                    <View style={styles.optionBox}>
                        <Pressable onPress={homePageHandler} style={{flexDirection: 'row',}}>
                            <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                            <Text style={{color: '#595959', fontSize: 14, }}>My Virtual Account</Text>
                            <Text style={{color: '#595959', fontSize: 18, justifyContent: 'flex-end', marginLeft: 100,}}> > </Text>
                        </Pressable>
                    </View>
                </View>

            </SafeAreaView>
        </>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Deposit;
