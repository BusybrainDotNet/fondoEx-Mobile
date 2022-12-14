import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Image, } from 'react-native';
import styles from '../assets/jsx/index';


/*
* Member Auth Home Screen Or Home Page For Members
*/
function Verification({ navigation }) {

    const editProfilePageHandler = () => {
        navigation.navigate('Edit Profile');
    }


    return (

        <>
            <SafeAreaView style={styles.appContainer}>
            
                <View style={{marginTop: '5%', }}>
                    <Text style={styles.titleText}>Upload Valid ID To Get Verified</Text>
                </View>
                
                <View style={{flexDirection: 'column',}}>

                    <View style={styles.optionBox}>
                        <Pressable onPress={editProfilePageHandler}>
                            <View style={{flexDirection: 'row', }}>
                                <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Profile Settings</Text>
                            </View>
                            <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}>Edit Profile Information</Text>
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
export default Verification;
