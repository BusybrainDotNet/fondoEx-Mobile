import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Image, } from 'react-native';
import styles from '../assets/jsx/index';


/*
* Member Auth Home Screen Or Home Page For Members
*/
function Referral({ navigation }) {

    const homePageHandler = () => {
        navigation.navigate('MemberHome');
    }


    return (

        <>
            <SafeAreaView style={styles.appContainer}>
            
                <View style={{marginTop: '5%', }}>
                    <Text style={styles.titleText}>Refer Your Friends To Enjoy More Access</Text>
                </View>
                
                <View style={{flexDirection: 'column',}}>
                    <View style={styles.optionBox}>
                        <Pressable onPress={homePageHandler}>
                            <View style={{flexDirection: 'row', }}>
                                <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                <Text style={{color: '#595959', fontSize: 14,}}>Referral Link: </Text>
                            </View>
                            <Text style={{color: '#595959', fontSize: 10, marginTop: '5%', marginLeft: '15%'}}>https://fondoex.com/register/Fond97738</Text>
                        </Pressable>
                    </View>

                </View>

                <View style={{marginTop: '15%', }}>
                    <Text style={styles.titleText}>Refered Friends List</Text>
                </View>

                <View style={{paddingRight: '5%', paddingLeft: '5%', paddingTop: '5%'}}>

                    <View style={{borderBottomWidth: 0.3, borderBottomColor: '#2c3691', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.smallBlackText}>Omotola Johnson</Text>
                        <Text style={styles.smallBlackText}>Active</Text>
                    </View>

                </View>

            </SafeAreaView>
        </>
    );
}






/*
* Export Of The Main App To Screens
*/
export default Referral;
