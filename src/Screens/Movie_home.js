import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    SafeAreaView
  } from 'react-native';import React, { useState } from 'react'
  import { BLACK, GRAY, GRAY2, LIGHT_GRAY, LIGHT_GRAY2, WHITE } from '../Assets/Color/Colors';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import { useDispatch,useSelector } from 'react-redux';
  import Button from '../util/Button';

  const {w, h} = Dimensions.get('window');


const Movie_home = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:WHITE,padding:12}}>
        <View style={{flex:1,width:w,height:h,backgroundColor:GRAY}}>
<View>
<Text style={styles.text}>Films in London</Text>
</View>


<View>
    
</View>

        </View>
    </SafeAreaView>
  )
}

export default Movie_home

const styles = StyleSheet.create({
    text:{
        fontSize:24
    }




})