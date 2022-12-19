import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { styles } from '../Css/PageCss'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LIGHT_GRAY,BLACK,GRAY,GRAY2, WHITE } from "../Assets/Color/Colors";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { useDispatch } from 'react-redux';
import { Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
    const dispatch=useDispatch()
    const [showbtn,setShowBtn]=React.useState(false)
const navigation=useNavigation()

    const showMenu = () => setShowBtn(true)

    /////////////SIGNOUT////////////
    const hideMenu = () => {
    
      setShowBtn(false)
    
    }
    
    const signUP=()=>{
      dispatch({type: 'LOGOUT'});
    // navigation.navigate('Auth')
    }
    

  return (
    <View>
    <View style={styles.heading}>

<TouchableOpacity onPress={()=>{navigation.goBack()}}>
<Ionicons
    style={{
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: 12,
      padding: 14,
      width: 55,
    }}
    name="ios-chevron-back-outline"
    size={23}
    color={WHITE}
  />
  </TouchableOpacity> 




<View style={{}}>
<Menu
visible={showbtn}
anchor={

  <TouchableOpacity onPress={showMenu}>
  <Badge 
  visible={true}
  size={15}
  style={{position:'absolute',zIndex:2,left:35,backgroundColor:'#2ed573'}}></Badge>
  <Image
             
              source={require('../Assets/image/3.png')}
              style={{
                // borderRadius: 12,
                // padding:55,
                width: 50,
                height:50,
                // top:-20,
                
              }}
            />
  
  
  </TouchableOpacity>

}
onRequestClose={hideMenu}
>
<MenuItem onPress={()=>{navigation.navigate('Homepage')}}><Text style={{...styles.label,fontSize:17,color:GRAY2}}>Profile</Text></MenuItem>

<MenuItem onPress={signUP}><Text style={{...styles.label,fontSize:17,color:GRAY2}}>Log out</Text></MenuItem>
</Menu>
</View>




</View>
    </View>
  )
}

export default Header

