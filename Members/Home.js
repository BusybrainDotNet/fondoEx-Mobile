import React, { useState } from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, View, Text, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index'; 


//Declare Bottom Tab As Tab
//const Stack = createNativeStackNavigator();


/*
* Member Auth Home Screen Or Home Page For Members
*/
function Home({ navigation }) {


/*
* Refresh Control For Application
*/
    // const [Refreshing, setRefreshing] = useState(false);
    // const onRefresh = () => {
    //     setRefreshing(true);
    // }

/*
* Define Route Handlers
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



    return (

        <SafeAreaView style={styles.appContainer}>

            <View style={styles.header}>
                <Image source={require('../assets/images/logo.png')} resizeMode= 'contain' title="Official Logo" style={styles.favicon} />
                <Text style={styles.text}>Fondo</Text>
                <Text style={styles.text1}>Ex</Text>
            </View>

            <ScrollView  refreshControl={<RefreshControl/>}>

                    <View style={{padding:10, } }>
                        <Text style={{color: '#fff', fontSize: 16, padding: 5,}}>My Favorites </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={homePageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/rewards.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Rewards &  Referrals </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={settingsPageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/history.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Transaction History</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={depositPageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox} >Mobile Top Up</Text>
                            </Pressable>
                        </View>

                    </View>

                        <Text style={{ color: '#fff', fontSize: 16, padding: 5, }}>Bill Payment </Text>
                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={profilePageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Mobile Top Up </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={depositPageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Global Mobile Top Up</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={depositPageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/data.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Data Bundles</Text>
                            </Pressable>
                        </View>

                    </View>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={profilePageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/electric.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Electricity Payment </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={depositPageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/tv.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>TV Subscription</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={depositPageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Educational E-Pins</Text>
                            </Pressable>
                        </View>

                    </View>


                <Text style={{ color: '#fff', fontSize: 16, padding: 5, }}>My FondoEx Wallet </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={profilePageHandler} style={styles.link}>
                                <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Make Deposit </Text>
                            </Pressable>
                        </View>

                            <View style={styles.serviceBox}>
                                <Pressable onPress={profilePageHandler} style={styles.link}>
                                    <Image source={require('../assets/images/icons/internal.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                    <Text style={styles.textBox}>Internal Transfer </Text>
                                </Pressable>
                            </View>

                            <View style={styles.serviceBox}>
                                <Pressable onPress={depositPageHandler} style={styles.link}>
                                    <Image source={require('../assets/images/icons/external.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                    <Text style={styles.textBox}>External Transfer</Text>
                                </Pressable>
                            </View>

                        </View>

                        <Text style={{ color: '#fff', fontSize: 16, padding: 5, }}>Others </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={profilePageHandler} style={styles.linkBox}>
                            <Image source={require('../assets/images/icons/market.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Quick Cash</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={depositPageHandler}>
                                <Image source={require('../assets/images/icons/kyc.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Get Verified</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={depositPageHandler} style={styles.linkBox}>
                                <Image source={require('../assets/images/icons/contact.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.textBox}>Support</Text>
                            </Pressable>
                        </View>

                    </View>
                    </View>


                    <View style={{padding: 10, }}>
                        <Text style={{color: '#fff'}}>1-Tap Payment</Text>
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
