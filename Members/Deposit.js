import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Image, } from 'react-native';
import styles from '../assets/jsx/index';


/*
* Member Auth Home Screen Or Home Page For Members
*/
function Deposit({ navigation }) {

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

        <>
            <SafeAreaView style={styles.appContainer}>

                <ScrollView style={styles.appContainer}>
                
                    <View style={{marginTop: '5%', }}>
                        <Text style={styles.titleText}>Refer Your Friends To Enjoy More Access</Text>
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
                    </View>


                    

                </ScrollView>

            </SafeAreaView>
        </>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Deposit;
