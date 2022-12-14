import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
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
