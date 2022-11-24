import { StyleSheet } from 'react-native';


/*
* CSS Styling Of The App
*/
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#000',
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
        backgroundColor: '#595959',
        shadowColor: '#fff',
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 50,
    },

    text: {
        color: '#fff',
        fontSize: 20,
        paddingTop: 25,
        textAlign: 'center'
    },
    label: {
        color: '#fff',
        fontSize: 12,
        marginTop: 20,
        fontFamily: 'Quicksand'
    },
    textInput: {
        color: '#595959',
        fontSize: 14,
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
        borderColor: '#fff',
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
        flex: 3,
        flexDirection: 'column',
        borderRadius: 100 / 2,
        padding: 10,
        width: 20,
        height: 10,
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
        fontFamily: 'Quicksand'
    },
    btn: {
        width: '60%',
        textColor: '#fff',
        backgroundColor: '#1a84bc',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        fontFamily: 'Quicksand',
        fontWeight: 600,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnText: {
        color: '#1a84bc',
        fontFamily: 'Quicksand'
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
        fontFamily: 'Quicksand',
    },

    warning_header: {
        height: 50,
        padding: 15,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: '#1a84bc',
        fontFamily: 'Quicksand',
        alignItems: 'center',
    },

    warning_body: {
        padding: 15,
        backgroundColor: '#fff',
        fontFamily: 'Quicksand',
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
        fontFamily: 'Quicksand',
        alignItems: 'center',
    }
});




/*
* Export Of The Main App To Screens
*/
export default styles;
