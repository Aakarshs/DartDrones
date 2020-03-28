
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
    },
    item:{
        paddingTop:30,
        width:'90%',
        height:200

    }
})



