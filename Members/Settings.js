import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';


/*
* Member Auth Home Screen Or Home Page For Members
*/
function Settings({ navigation }) {

    const loginHandler = () => {
        navigation.navigate('Login');
    }
    const memberHomeHandler = () => {
        navigation.navigate('MemberHome');
    }
    return (

        <SafeAreaView style={styles.appContainer}>

            <ScrollView style={styles.appContainer}>
                <View style={{ padding: 10, }}>
                    <Text style={{ color: '#385E72', fontSize: 16, padding: 5, }}>My Settings </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={memberHomeHandler} style={styles.link}>
                                <Text style={styles.textBox}>Rewards &  Referrals </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={loginHandler} style={styles.link}>
                                <Text style={styles.textBox}>Transaction History</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={loginHandler} style={styles.link}>
                                <Text style={styles.textBox} >Mobile Top Up</Text>
                            </Pressable>
                        </View>

                    </View>

                    

                    <Text style={{ color: '#fff', fontSize: 16, padding: 5, }}>Others </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={memberHomeHandler} style={styles.link}>
                                <Text style={styles.textBox}>Quick Cash & Loans </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={loginHandler} style={styles.link}>
                                <Text style={styles.textBox}>KYC</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={loginHandler} style={styles.link}>
                                <Text style={styles.textBox}>Support</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>


                <View style={{ backgroundColor: '#fff', padding: 10, }}>
                    <Text>1-Tap Payment</Text>
                </View>

            </ScrollView>

            </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Settings;
