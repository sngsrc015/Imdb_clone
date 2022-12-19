import {
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,
    Animated,
    Easing,
    Keyboard,
  } from 'react-native';
  import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import React from 'react'
import { RED, RED2, WHITE } from '../Assets/Color/Colors';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const {width, height} = Dimensions.get('window');

const Button = ({press,title,color}) => {  
    const [loading, setLoading] = React.useState(false);

  return (
    <TouchableOpacity  style={{...styles.btn,shadowColor:color,}} onPress={press}>
    {loading ? (
      <ActivityIndicator
        animating={true}
        color={'#fff'}
        style={{right: 145}}
      />
    ) : null}

    <Text style={{color: '#fff', fontSize:wp("5%")}}>
 {title}
    </Text>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: RED,
        width:wp("38%"),
        height:heightPercentageToDP("6%"),
        // height:35
        // opacity:0.78,
        // paddingVertical:8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:19,
       
        
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
        display: 'flex',
        flexDirection: 'row',
        // position: 'absolute',
        // top: 275,
      },
})