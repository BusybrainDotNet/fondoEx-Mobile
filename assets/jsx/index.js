import { StyleSheet } from 'react-native';


/*
* CSS Styling Of The App
*/
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        fontFamily: 'open sans',
    },
    backgroundImageContainer: {
        flex: 1,
        padding: 5
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        margin: 0,
    },

    formContainer: {
        flex: 1,
        marginTop: 10,
        paddingTop: 20,
        padding: 15,
        margin: 15,
        borderWidth: 1,
        borderColor: '#1a84bc',
        borderRadius: 10,
        backgroundColor: '#000',
        shadowColor: '#fff',
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 50,
    },

    text: {
        color: '#fff',
        fontSize: 20,
        padding: 20,
        textAlign: 'center'
    },
    label: {
        color: '#fff',
        fontSize: 12,
        marginTop: 20,
        fontFamily: 'open sans'
    },
    textInput: {
        color: '#595959',
        fontSize: 16,
        padding: 5,
        marginTop: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#1a84bc',
        backgroundColor: '#fff',

    },
    dangerText: {
        color: '#ff0000',
        fontSize: 12,
        margin: 10,
        textAlign: 'center',
    },
    smallText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 20,
        textAlign: 'left'
    },
    bigText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
    smallBlackText: {
        color: '#000',
        fontSize: 14,
        margin: 10,
        textAlign: 'left'
    },
    bigBlackText: {
        color: '#000',
        fontSize: 18,
        margin: 10,
        textAlign: 'left'
    },
    footText: {
        color: '#fff',
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlign: 'center',
    },

    footMenu: {
        color: '#fff',
        fontSize: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        borderRadius: 100 / 2,
        padding: 30,
        width: 250,
        height: 200,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconImage: {
        flexDirection: 'column',
        borderRadius: 100 / 2,
        padding: 15,
        width: 20,
        height: 15,
        backgroundColor: '#fff',
        margin: 2,
    },

    link: {
        color: '#fff',
        fontSize: 14,
        padding: 20,
        textAlign: 'left'
    },
    buttonContainer: {
        color: '#595959',
        margin: 20,
    },
    smallBtn: {
        textColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 2,
        margin: 10,
        fontWeight: 600,
        width: 80,
    },
    btn: {
        width: '60%',
        textColor: '#fff',
        backgroundColor: '#1a84bc',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        fontWeight: 600,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnText: {
        color: '#1a84bc',
    },

    centered_view: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    warning_modal: {
        width: 250,
        borderWidth: 3,
        borderColor: '#1a84bc',
        borderRadius: 10,
        color: '#1a84bc',
        backgroundColor: '#1a84bc',
    },

    warning_header: {
        height: 50,
        padding: 15,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: '#1a84bc',
        alignItems: 'center',
        flexDirection: 'row',
    },

    warning_body: {
        padding: 15,
        backgroundColor: '#fff',
        fontFamily: 'open sans',
        alignItems: 'center',
    },

    warning_footer: {
        height: 50,
        padding: 10,
        borderTopWidth: 2,
        borderStartColor: '#1a84bc',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#fff',
        fontFamily: 'open sans',
        alignItems: 'center',
    },

   favBox: {
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       alignContent: 'center',
    },

    serviceBox: {
        width: 100,
        borderWidth: 1,
        backgroundColor: '#D9E4EC',
        borderColor: '#1a84bc',
        borderRadius: 5,
        color: '#385E72', 
        margin: 5,
        justifyContent: 'space-around',
        alignContent: 'center',
    },

    boxImage: {
        width: 20,
        height: 25,
    },

    textBox: {
        color: '#000',
        fontSize: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    linkBox: {
        fontSize: 14,
        padding: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },

    header: {
        height: 70,
        padding: 15,
        margin: 0,
        flexDirection: 'row',
        marginBottom: 10,
        opacity: 9,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    textWallet: {
        color: 'white',
        fontSize: 14,
        paddingRight: 1,
        paddingTop: 10,
    },
    textAmount: {
        color: 'white',
        fontSize: 14,
        paddingRight: 40,
        paddingTop: 12,
    },
    greetText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'left',
    },

    favicon: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        maxWidth: 50,
        maxHeight: 40,
        paddingTop: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: 'flex-end',
    }
});




/*
* Export Of The Main App To Screens
*/
export default styles;
