import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MemberHeader from '../components/MemberHeader';
import styles from '../assets/jsx/index'; 
//import Deposit from './Deposit';
//import Profile from './Profile';



//Declare Bottom Tab As Tab
//const Stack = createNativeStackNavigator();



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Home({ navigation }) {


    const loginHandler = () => {
        navigation.navigate('Deposit');
    }
    const memberHomeHandler = () => {
        navigation.navigate('Profile');
    }
    return (
        <SafeAreaView style={styles.appContainer}>

            <MemberHeader />

            <ScrollView style={styles.appContainer}>
                <View style={{ backgroundColor: '#385E72', padding:10, } }>
                    <Text style={{color: '#fff', fontSize: 16, padding: 5,}}>My Favorites </Text>

                <View style={styles.favBox}>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={memberHomeHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/rewards.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Rewards &  Referrals </Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/history.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Transaction History</Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox} >Mobile Top Up</Text>
                        </Pressable>
                    </View>

                </View>

                    <Text style={{ color: '#fff', fontSize: 16, padding: 5, }}>Bill Payment </Text>
                <View style={styles.favBox}>

                    <View style={styles.serviceBox}>
                         <Pressable onPress={memberHomeHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Mobile Top Up </Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                             <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                             <Text style={styles.textBox}>Global Mobile Top Up</Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                             <Image source={require('../assets/images/icons/data.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                             <Text style={styles.textBox}>Data Bundles</Text>
                        </Pressable>
                    </View>

                </View>

                <View style={styles.favBox}>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={memberHomeHandler} style={styles.link}>
                             <Image source={require('../assets/images/icons/electric.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                             <Text style={styles.textBox}>Electricity Payment </Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/tv.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>TV Subscription</Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Educational E-Pins</Text>
                        </Pressable>
                    </View>

                </View>


             <Text style={{ color: '#fff', fontSize: 16, padding: 5, }}>My FondoEx Wallet </Text>

                <View style={styles.favBox}>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={memberHomeHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Make Deposit </Text>
                        </Pressable>
                     </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={memberHomeHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/internal.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Internal Transfer </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={loginHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/external.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>External Transfer</Text>
                            </Pressable>
                        </View>

                    </View>

                    <Text style={{ color: '#fff', fontSize: 16, padding: 5, }}>Others </Text>

                <View style={styles.favBox}>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={memberHomeHandler} style={styles.link}>
                        <Image source={require('../assets/images/icons/market.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Quick Cash</Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/kyc.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Get Verified</Text>
                        </Pressable>
                    </View>

                    <View style={styles.serviceBox}>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Image source={require('../assets/images/icons/contact.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                            <Text style={styles.textBox}>Support</Text>
                        </Pressable>
                    </View>

                </View>
                </View>


                <View style={{ backgroundColor: '#fff', padding: 10, }}>
                    <Text>1-Tap Payment</Text>
                </View>
                
                </ScrollView>



          {/*  <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Deposit" component={Deposit} />
            </Stack.Navigator>
*/}
        </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Home;
