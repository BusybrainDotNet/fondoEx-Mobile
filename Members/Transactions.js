import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground, Pressable} from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Transactions({ navigation }) {

    /*
    * Define User Details
    */  
    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');



    return (
        <>
            <SafeAreaView style={styles.appContainer}>

                <View style={{flexDirection: 'row'}}>

                    <ImageBackground style={{maxHeight: '100%', width: '100%', borderRadius: 10, margin: 10, }} source={require('../assets/images/cta-bg.jpg')}>
                        <Text style={{marginLeft: 5, padding: 10, fontSize: 16, color: '#fff', fontWeight: 'bold', }}>Wallet Balance </Text>

                        <View style={styles.balanceBox}>
                            <Text style={{padding: 10, fontSize: 22, fontWeight: 'bold', color: '#fff', }}> {bal} </Text>

                            <Pressable>
                                <Text style={{marginRight: 50, marginLeft: 10, padding: 15, fontSize: 14, fontWeight: 'bold', color: '#fff', }}>Account Status: Regular</Text>
                            </Pressable>
                        </View>
                    </ImageBackground>

                </View>

                <ScrollView style={styles.appContainer}>

                    <View style={{paddingRight: '5%', paddingLeft: '5%', paddingTop: '10%'}}>

                        <View style={{borderBottomWidth: 0.3, borderBottomColor: '#2c3691', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Redeem Your Gift Now!</Text>
                            <Text style={styles.smallBlackText}>22-Nov-2022</Text>
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
export default Transactions;
