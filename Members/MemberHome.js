import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image} from 'react-native';
import MemberHeader from '../components/MemberHeader';
import styles from '../assets/jsx/index';




/*
* Member Auth Home Screen Or Home Page For Members
*/
function MemberHome({navigation}) {

    const loginHandler = () => {
        navigation.navigate('Login');
    }
    const memberHomeHandler = () => {
        navigation.navigate('MemberHome');
    }
    return (
            <SafeAreaView style={styles.appContainer}>
            <MemberHeader />
                <ScrollView>
                    <Text style={styles.smallText}>Welcome To Your Home Page User! </Text>

                    <View style={styles.imageContainer}>

                        <Pressable onPress={memberHomeHandler} style={({pressed}) => ({backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 35, padding: 15, borderRadius: 5}) }>
                            <Text style={{color: '#fff'}}>Make A Transaction</Text>
                        </Pressable>

                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Text style={styles.btnText}>Logout</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default MemberHome;
