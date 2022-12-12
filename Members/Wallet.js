import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Wallet({ navigation }) {

    
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
                
                <ScrollView style={styles.appContainer}>

                    <View style={{marginTop: '5%', }}>
                        <Text style={styles.titleText}>How Do You Want To Add Money Into Your Wallet?</Text>
                    </View>

                    <View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={homePageHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Cards | USSD Code</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}>Pay By Transfer Code Or Card </Text>
                            </Pressable>
                        </View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={homePageHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Bank Transfer | Deposit</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}>Pay By Deposit Or Transfer</Text>
                            </Pressable>
                        </View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={homePageHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Virtual Account</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}>Pay Into Your Virtual Wallet </Text>
                            </Pressable>
                        </View>
                    </View>
                    

                    <View style={{marginTop: '10%', }}>
                        <Text style={styles.titleText}>Send Money | Make a Transfer</Text>
                    </View>
                    
                    <View style={{flexDirection: 'column',}}>
                        <View style={styles.optionBox}>
                            <Pressable onPress={homePageHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Internal Transfer</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}> Send To FondoEx User </Text>
                            </Pressable>
                        </View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={homePageHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>External Transfer</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}> Send To Other Accounts </Text>
                            </Pressable>
                        </View>
                    </View>
                
                </ScrollView>


            </SafeAreaView>
        </>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Wallet;
