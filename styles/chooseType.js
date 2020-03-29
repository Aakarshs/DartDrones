
import { StyleSheet, Dimensions} from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg_img:{
      width:  Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      position:'absolute'
    },
    login_text:{
      zIndex:100,
      marginTop:50
    },
    item_one:{
        width:'100%',
        height:280,
    },
    item_two:{
        width:'100%',
        height:280,
        bottom:60
    },
    item_three:{
        width:'100%',
        height:280,
        bottom:130
    },
    heading:{
color:'white',
fontSize:40,
    },
    heading_description:{
        color:'white',
        width:300
    },
    text_container:{
paddingLeft:20
    },
    get_started_button: {
        paddingTop: 30,
        width: "80%",
        bottom:200,
        alignSelf:'center'
      },
      button_text: {
        textAlign:'center',
        borderWidth: 2,
        padding:15,
        paddingLeft:20,
        paddingRight:20,
        color: "white",
     
        borderColor:"#D2326E",
        borderRadius:20
      },
})



