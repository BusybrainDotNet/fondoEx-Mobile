import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Modal, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function EditProfile({ navigation }) {

    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


 

/*
* Define Form State Handlers
*/
   const [fname, setFname] = useState(' ');
   const [lname, setLname] = useState(' ');
   const [email, setEmail] = useState(' ');
   const [dob, setDob] = useState(' ');
   const [submitted, setSubmitted] = useState(false);
   const [showFormFieldWarning, setFormFieldWarning] = useState(false);
   const [showTransactionWarning, setTransactionWarning] = useState(false);


   const imagePageHandler = () => {
   
}


/*
Handle Form Submittion
*/
    const profileFormHandler = () => {

        if (fname.length < 5 || lname.length < 5 || email.length < 5) {
            setFormFieldWarning(true);
        } else {
           /*const formFields = [user: email, pass: password,];*/
            if (email.toLowerCase() === "tomkim@gmail.com" && fname != "Transaction") {
                setSubmitted(!submitted);
            } else {
               setTransactionWarning(true);
            }
        }
    }




    return (
        <>
            <SafeAreaView style={styles.appContainer}>

                {/*ALERT FOR USERS BEGIN */}
                <Modal
                    transparent={true}
                    visible={showFormFieldWarning}
                    animationType='slide'
                    onRequestClose={() => { setFormFieldWarning(false) }}
                    hardwareAccelerated={true}
                >
                    <View style={styles.centered_view}>
                        <View style={styles.warning_modal}>
                            <View style={styles.warning_header}>
                                <Image source={require('../assets/images/icons/Alert.png')} resizeMode='stretch' title="Alert" style={styles.iconImage} />
                                <Text style={styles.bigText}> Notification Alert!</Text>
                            </View>
                            <View style={styles.warning_body}>
                                <Text style={styles.dangerText }> Insufficient Details In One Or More Form Fields!</Text>
                            </View>
                        
                            <Pressable onPress={() => { setFormFieldWarning(false)}}>
                                <View style={styles.warning_footer}>
                                    <Text style={{ color: '#000', fontSize: 18, }}>Ok</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                {/*END OF ALERT FOR USERS */}



                

                <ScrollView style={styles.appContainer}>
                    <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.faviconProfile} />
                
                    <View>
                        <Text style={styles.titleText}> {username} </Text>
                        
                        <Pressable onPress={imagePageHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, marginTop: '10%', borderRadius: 5, textAlign: 'center', maxWidth: '50%', marginLeft: '25%',})}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Upload Profile Image</Text>
                        </Pressable>
                    </View>

                    <View>
                        <View style={styles.innerFormContainer}>

                            <Text style={styles.innerLabel}>First Name</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setFname(value)} } placeholder="First Name" />
                            <Text style={styles.innerLabel}>Last Name</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setLname(value)} } placeholder="Last Name" />
                            <Text style={styles.innerLabel}>Email ID</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setEmail(value)} } keyboardType='email-address' placeholder="fondoex@member.com" />
                            <Text style={styles.innerLabel}>Date Of Birth</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setDob(value) }} secureTextEntry={true} placeholder="10-Jan-1980" />


                            <Pressable onPress={profileFormHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, borderRadius: 5, textAlign: 'center', marginTop: 30,})}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Update</Text>
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
export default EditProfile;
