import React, { useState } from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, View, Text, Pressable, TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from '../assets/jsx/index'; 
// import Carousel from 'react-native-snap-carousel';
// import { SliderImages } from './SliderImages';
// import BannerSlider from '../components/BannerSlider';
// import windowWidth from '../utility/Dimensions';




/*
* Member Auth Home Screen Or Home Page For Members
*/
function Home({ navigation }) {



/*
* State Declaration For Application
*/
    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


/*
* Refresh Control For Application
*/
    // const [Refreshing, setRefreshing] = useState(false);
    // const onRefresh = () => {
    //     setRefreshing(true);
    // }

/*
* Slide Banner Control For Application
*/
    // const renderBanner = ({item, index}) => {
    //     return <BannerSlider data={item} />;
    //   };




/*
* Define Route Handlers
*/
    const cardTransferHandler = () => {
        navigation.navigate('Make Deposit');
    }
    const internalTransferHandler = () => {
        navigation.navigate('Internal Transfer');
    }
    const externalTransferHandler = () => {
        navigation.navigate('External Transfer');
    }
    const notificationPageHandler = () => {
        navigation.navigate('Notification');
    }
    const historyPageHandler = () => {
        navigation.navigate('Transaction History');
    }
    const topupPageHandler = () => {
        navigation.navigate('Mobile TopUp');
    }
    const dataPageHandler = () => {
        navigation.navigate('Mobile Data');
    }
    const electricityPageHandler = () => {
        navigation.navigate('Electricity Billpay');
    }
    const televisionPageHandler = () => {
        navigation.navigate('Television Billpay');
    }
    const educationPageHandler = () => {
        navigation.navigate('Educational Cards');
    }
    const referralPageHandler = () => {
        navigation.navigate('Link & Referrals');
    }
    const loanPageHandler = () => {
        navigation.navigate('Quick Cash');
    }
    const verificationPageHandler = () => {
        navigation.navigate('Verification');
    }


    return (
        <>
        <SafeAreaView style={styles.appContainer}>

            <View style={styles.header}>
                <Image source={require('../assets/images/icons/morning.png')} resizeMode='contain' title="Notify" style={{radius: '50%', maxWidth: 60, maxHeight: 25,}} />
                <Text style={{color: '#595959', fontSize: 14, alignContent: 'center', justifyContent: 'center', }}>Welcome Back, {username}</Text>
                <Pressable onPress={notificationPageHandler}>
                    <Image source={require('../assets/images/icons/notification.png')} resizeMode='contain' title="Notify" style={{radius: '50%', maxWidth: 30, maxHeight: 20, marginLeft: 60, }} />
                </Pressable>
            </View>

            <ScrollView  refreshControl={<RefreshControl/>}>

                <View style={{flexDirection: 'row'}}>

                    <Pressable onPress={cardTransferHandler}>
                        <Text style={styles.addDeposit}>+</Text>
                    </Pressable>

                    <ImageBackground style={{maxHeight: '100%', width: '90%', borderRadius: 10, margin: 10, }} source={require('../assets/images/cta-bg.jpg')}>
                        <Text style={{marginLeft: 5, padding: 10, fontSize: 16, color: '#fff', fontWeight: 'bold', }}>Wallet Balance </Text>

                        <View style={styles.balanceBox}>
                            <Text style={{padding: 10, fontSize: 22, fontWeight: 'bold', color: '#fff', }}> {bal} </Text>

                            <Pressable onPress={cardTransferHandler}>
                                <Text style={{marginRight: 50, marginLeft: 10, padding: 15, fontSize: 14, fontWeight: 'bold', color: '#fff', }}>+ Make Deposit</Text>
                            </Pressable>
                        </View>
                    </ImageBackground>
                        
                </View>
                        
                <View style={{padding:10, } }>

                    <Text style={{color: '#595959', fontSize: 12, padding: 5, marginTop: 20,}}>Quick Links </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={referralPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/internal.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Referrals </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={historyPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/history.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}> Transactions</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={topupPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText} >Mobile Top-Up</Text>
                            </Pressable>
                        </View>

                    </View>

                    {/* <Carousel
                        ref={c => {
                            this._carousel = c;
                        }}
                        data={SliderImages}
                        renderItem={renderBanner}
                        sliderWidth={windowWidth - 40}
                        itemWidth={300}
                        loop={true}
                    /> */}
                   
                    <Text style={{ color: '#595959', fontSize: 12, padding: 5, marginTop: 20,}}>Bill Payment </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={topupPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Mobile Top-Up </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={topupPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/topup.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>International Airtime</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={dataPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/data.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Data Purchase</Text>
                            </Pressable>
                        </View>

                    </View>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={electricityPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/electric.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Electricity Payment </Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={televisionPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/tv.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>TV Subscription</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={educationPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Educational E-Pins</Text>
                            </Pressable>
                        </View>

                    </View>


                    <Text style={{ color: '#595959', fontSize: 12, padding: 5, marginTop: 20,}}>My FondoEx Wallet </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={cardTransferHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Make Deposit </Text>
                            </Pressable>
                        </View>

                            <View style={styles.serviceBox}>
                                <Pressable onPress={internalTransferHandler} style={styles.boxLink}>
                                    <Image source={require('../assets/images/icons/internal.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                    <Text style={styles.boxText}>Internal Transfer </Text>
                                </Pressable>
                            </View>

                            <View style={styles.serviceBox}>
                                <Pressable onPress={externalTransferHandler} style={styles.boxLink}>
                                    <Image source={require('../assets/images/icons/external.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                    <Text style={styles.boxText}>External Transfer</Text>
                                </Pressable>
                            </View>

                        </View>

                    <Text style={{ color: '#595959', fontSize: 12, padding: 5, marginTop: 20,}}>Business Tools </Text>

                    <View style={styles.favBox}>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={loanPageHandler} style={styles.boxLink}>
                            <Image source={require('../assets/images/icons/market.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Quick Cash</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={verificationPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/kyc.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Get Verified</Text>
                            </Pressable>
                        </View>

                        <View style={styles.serviceBox}>
                            <Pressable onPress={referralPageHandler} style={styles.boxLink}>
                                <Image source={require('../assets/images/icons/rewards.png')} resizeMode='contain' title='Icon' style={styles.boxImage }></Image>
                                <Text style={styles.boxText}>Rewards </Text>
                            </Pressable>
                        </View>
                        

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
export default Home;
