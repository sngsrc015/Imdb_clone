import {
    Dimensions,
     Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    SafeAreaView
  } from 'react-native';import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../util/Button';
  import { BLACK, GRAY, GRAY2, LIGHT_GRAY, LIGHT_GRAY2, WHITE,BLACK1, RED, RED2 } from '../Assets/Color/Colors';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import {styles} from '../CSS/Gstyle';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import HorizontalDate from '../util/HorizontalDate';

  // import DateTime from '../util/DateTime';
  
  
  
  const {w, h} = Dimensions.get('window');

const SeatSection = () => {

    let selectedSeats=[]
   
    const [row1,setRow1]=React.useState([
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:true},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:true},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
 

    
  ]);

  const[row2,setRow2]=React.useState([
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:false,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:false},
    {empty:false,selected:true},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:true,selected:false},
    {empty:false,selected:true},
    {empty:true,selected:false},
 
  ]);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:BLACK1}}>
      <View style={styles.container}>

        
<TouchableOpacity style={{alignItems:"flex-start",marginRight:wp("85%")}}>
<Ionicons
    style={{
    //   backgroundColor: 'rgba(0,0,0,0.2)',
    //   borderRadius: 12,
      padding:6,
    //   width: 55,
    }}
    name="ios-chevron-back-outline"
    size={26}
    color={WHITE}
  />
  </TouchableOpacity> 

<View style={{width:wp("90%"),paddingLeft:wp("4%"),marginTop:hp("1.5%")}}>
<Text style={styles.sub}>Drama,Crime</Text>
<Text style={styles.title}>The Irishman</Text>

</View>


<View style={styles.seat}>
    <View style={styles.flexitem}> 
   <View style={{ flexDirection:'row',
    alignItems:'center',marginRight:wp("30%")}}>
   <Image source={{uri:'https://img.icons8.com/ios/2x/marker--v1.png'}} style={{tintColor:WHITE,width:wp("4.5%"),height:wp("4.5%"),opacity:0.75}}/>
    <Text style={{...styles.sub,paddingLeft:3}}>
       Cinema AiHoraya</Text>
   </View>

   <View style={{ flexDirection:'row',
    alignItems:'center',}}>
   <Image source={{uri:'https://img.icons8.com/material-outlined/512/clock.png'}} style={{tintColor:WHITE,width:wp("4.5%"),height:wp("4.5%"),opacity:0.55}}/>
   <Text style={{...styles.sub,paddingLeft:3}}>3h 30min</Text>  

    </View>

    </View>

    <View style={{ 
        width:wp("36%"),
    height:hp("5%"),
    // borderRadius:100,
    borderTopWidth:3,
    borderColor:RED,
    borderTopStartRadius : 200,
    borderTopEndRadius : 200,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transform: [{ scaleX:2 }],
  marginTop:hp("1.7%"),
  shadowColor:'#fff',
shadowOffset: {
	width: 0,
	height:2,
},
shadowOpacity: 0.59,
shadowRadius: 16.00,

elevation:44,
//   marginLeft:hp("8%")
  }}></View>


  {/* ////////////////////////////////////////////// */}
  <View style={styles.seatDisplay}>

<View style={{marginLeft:wp("3%"),marginTop:hp("3.5%")}}>
  <FlatList 
  data={row1}
  numColumns={4}
  renderItem={({item,index})=>{
    return(
      <TouchableOpacity style={{margin:5,}} onPress={()=>
      {
        if(item.selected==false && item.empty==false){
          alert('already booked')
        }else{
        //   onSelectRow1(index)
        }
      }
      }>
        {
          item.empty==false && item.selected==true?(<View style={{...styles.bookseat,backgroundColor:RED}}></View>):item.empty==true && item.selected==false?(<View style={{...styles.bookseat,borderWidth:1.3,borderColor:GRAY2}}></View>):item.empty==false && item.selected==false?(<View style={{...styles.bookseat,backgroundColor:GRAY2}}></View>):null
        }
      </TouchableOpacity>
    )
  }}
  
  />
</View>
<View style={{marginRight:wp("3%"),marginTop:hp("3.5%")}}>
<FlatList 
  data={row2}
  numColumns={4}
  renderItem={({item,index})=>{
    return(
      <TouchableOpacity style={{margin:5,}} onPress={()=>
        {
          if(item.selected==false && item.empty==false){
            alert('already booked')
          }else{
            // onSelectRow2(index)
          }
        }
        }>
        {
                   item.empty==false && item.selected==true?(<View style={{...styles.bookseat,backgroundColor:RED}}></View>):item.empty==true && item.selected==false?(<View style={{...styles.bookseat,borderWidth:1.3,borderColor:GRAY2}}></View>):item.empty==false && item.selected==false?(<View style={{...styles.bookseat,backgroundColor:GRAY2}}></View>):null

        }
      </TouchableOpacity>
    )
  }}
  
  />

</View>

</View>


{/* //////////////////////////////////// */}
<View style={{...styles.flexitem,width:wp("75%"),height:hp("3.7%")}}>
    <View style={styles.flexitem}>
        <View style={{width:wp("4%"),backgroundColor:RED,height:wp("4%"),borderRadius:15,marginRight:5}}></View>
<Text style={styles.sub}>Selected</Text>
    </View>

    <View style={styles.flexitem}>
    <View style={{width:wp("4%"),backgroundColor:GRAY2,height:wp("4%"),borderRadius:15,marginRight:5}}></View>

<Text style={styles.sub}>Reserved</Text>
        
        </View>

        <View style={styles.flexitem}>
      
        <View style={{width:wp("4%"),borderColor:GRAY2,height:wp("4%"),borderRadius:15,borderWidth:2,marginRight:5}}></View>

<Text style={styles.sub}>Available</Text>
        
        </View>
</View>






<View>
    <HorizontalDate/>
</View>
<Button title={"Checkout"} color={BLACK}/>

    
</View>








      </View>
    </SafeAreaView>
  )
}

export default SeatSection
