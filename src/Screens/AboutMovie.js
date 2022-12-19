import {
    Dimensions,
     Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    SafeAreaView
  } from 'react-native';import React, { useEffect, useState } from 'react'
  import LinearGradient from 'react-native-linear-gradient';
  import { Rating, AirbnbRating } from 'react-native-ratings';
  import Video from 'react-native-video';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../util/Button';
  import { BLACK, GRAY, GRAY2, LIGHT_GRAY, LIGHT_GRAY2, WHITE,BLACK1, RED, RED2 } from '../Assets/Color/Colors';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import {styles} from '../CSS/Gstyle';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import HorizontalDate from '../util/HorizontalDate';

const AboutMovie = ({navigation}) => {

const [cast,setCast]=useState([
  {
src:require('../Assets/image/actress.webp'),
name:'Maria Mozhdah'},
{src:require('../Assets/image/adil.jpg'),
name:'Adil Hussain'},
{src:require('../Assets/image/ali.jpg'),
name:'Ali Arfan'},
{src:require('../Assets/image/khanna.jpg'),
name:'Ekavali Khanna'},
{src:require('../Assets/image/sheeba.jpg'),
name:'Rohit Suresh Saraf'},
{src:require('../Assets/image/irm.jpg'),
name:'Shaeeba Chaddha'},
{src:require('../Assets/image/dahl.jpg'),
name:'Nokokur Dahl'},
])

const [other,setOther]=useState([
  {
src:require('../Assets/image/mi.jpg'),
name:'Mission Impossible(2019)'},
{src:require('../Assets/image/tm.jpg'),
name:'Transformer(2013)'},
{src:require('../Assets/image/pc.jpg'),
name:'Pirates of Carribean(2008)'},
{src:require('../Assets/image/ps.jpg'),
name:'Police Story(1983)'},
{src:require('../Assets/image/ij.jpg'),
name:'Indiana Jhones(2012)'},
{src:require('../Assets/image/no.jpg'),
name:'007 No Time To Die(2020)'},
{src:require('../Assets/image/av.jpg'),
name:'Avtaar(2023)'},
])


const [gal,setGal]=useState([
  {src:require('../Assets/image/what-will-people-say-tiff.jpg')},
  {src:require('../Assets/image/0820-LRAINER_People_Say.jpg')},
  {src:require('../Assets/image/What-Will-People-Say-5.jpg')},
  {src:require('../Assets/image/what.jpeg')},
  {src:require('../Assets/image/still.jpg')},
  {src:require('../Assets/image/mywhat.jpg')},
  {src:require('../Assets/image/img1.jpg')},
  {src:require('../Assets/image/img2.jpg')},


])



  return (
    <SafeAreaView style={{flex:1,backgroundColor:BLACK}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

            <View style={styles.topimg}>
            <LinearGradient colors={["#000","transparent"]}style={styles.linearGradient}>

<Image source={require('../Assets/image/What-Will-People-Say-5.jpg')} style={{width:wp("100%"),height:wp("60%"),resizeMode:'cover',transform:[{rotate:"-180deg"}],zIndex:-1}}/>

</LinearGradient>

            </View>


 <TouchableOpacity style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',width:wp("95%"),position:'absolute',marginTop:hp("1.6%"),zIndex:2}} >
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


<Image source={{uri:'https://img.icons8.com/pastel-glyph/512/document-1.png'}} style={{tintColor:WHITE,width:wp("4.7%"),height:wp("4.7%"),marginTop:hp("1%"),marginRight:wp("2.5%")}}/>

  </TouchableOpacity> 


  {/* /////////////////////////////////////////////// */}
  <View style={{marginTop:hp("-7%"),zIndex:2,width:wp("100%"),flexDirection:'row'}}>
    <Image source={require("../Assets/image/images.jpg")} style={{width:wp("40%"),height:wp("41.5%"),resizeMode:'contain'}} />

    <View style={{width:wp("57%")}}>
    <Text style={styles.sub}>Drama,Family,Love</Text>
<Text style={{...styles.title,fontSize:wp("6%")}}>What Wil People Say</Text>
<View style={{marginTop:wp("2%"),marginLeft:wp("-0.9%"),position:'absolute'}}>
<View style={{alignItems:'flex-start',marginBottom:5}}>
  
<AirbnbRating
  count={5}
  // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={3}
  size={14}
  reviews={false}
/>
</View>
<Text style={{...styles.sub,fontSize:wp("2.8%"),color:GRAY2}}>Sixteen-year-old Nisha lives a double life. When out with her friends, she's a regular Norwegian teenager. At home with her family, she is the perfect Pakistani daughter. When her father catches her alone with her boyfriend, Nisha's two worlds brutally collide  judgm…</Text>


</View>



    </View>
  </View>

{/* //////////////////////////////////// */}
<View style={{width:wp('95%'),marginTop:hp('6%')}}>
<Text style={{...styles.title,fontSize:wp("6%"),paddingLeft:wp("1%")}}>Cast</Text>

<View style={styles.box}>
  <FlatList
          keyExtractor={(item, index) => `key-${index}`}
          nestedScrollEnabled={true}
            data={cast}
            // numColumns={2}
            
            // pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            horizontal={true}
            renderItem={({item,index}) => (
              <ScrollView horizontal={true}>
<View style={{...styles.card_style,borderColor:item.color}}>

<View style={{justifyContent:'center',alignItems:'center'}}>
<Image source={item.src} style={styles.castimg} resizeMode='cover'/>
<Text style={{...styles.title,fontSize:wp("4%"),marginTop:3,opacity:0.85}}>{item.name}</Text>
</View>



</View>
</ScrollView>

)}/>
</View>
</View>


{/* //////////////////////////////////// */}
<View style={{width:wp('95%'),marginTop:hp('0%')}}>
<Text style={{...styles.title,fontSize:wp("6%"),paddingLeft:wp("1%")}}>Photo</Text>

<View style={styles.box}>
  <FlatList
          keyExtractor={(item, index) => `key-${index}`}
          nestedScrollEnabled={true}
            data={gal}
            // numColumns={2}
            
            // pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            horizontal={true}
            renderItem={({item,index}) => (
              <ScrollView horizontal={true}>
<View style={{ width: wp('65%'),
    height: hp('16%'),
    margin: 5,
    backgroundColor:WHITE}}>

<View style={{justifyContent:'center',alignItems:'center'}}>
<Image source={item.src} style={{width:wp('65%'),height:wp("35%")}} resizeMode='cover'/>
<Text style={{...styles.title,fontSize:wp("4%"),marginTop:3,opacity:0.85}}>{item.name}</Text>
</View>



</View>
</ScrollView>

)}/>
</View>
</View>



{/* //////////////////////////////////// */}
<View style={{width:wp('95%'),marginTop:hp('3%')}}>
<Text style={{...styles.title,fontSize:wp("6%"),paddingLeft:wp("1%")}}>Trailer</Text>

<View style={styles.videodiv}>
        <Video
          fullscreen={true}
          playInBackground={true}
          source={require('../Assets/image/videoplayback.mp4')} // the video file
          paused={false} // make it start
          style={styles.backgroundVideo} // any style you want
          repeat={true} // make it a loop
          resizeMode="cover"
          // controls={true}
          
        />
      </View>
</View>




{/* //////////////////////////////////// */}
<View style={{width:wp('95%'),marginTop:hp('3%')}}>
<Text style={{...styles.title,fontSize:wp("6%"),paddingLeft:wp("1%")}}>More Movies</Text>

<View style={styles.box}>
  <FlatList
          keyExtractor={(item, index) => `key-${index}`}
          nestedScrollEnabled={true}
            data={other}
            // numColumns={2}
            
            // pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            horizontal={true}
            renderItem={({item,index}) => (
              <ScrollView horizontal={true}>
<View style={{...styles.card_style,borderColor:item.color, height: hp('21%'),}}>

<View style={{justifyContent:'center',alignItems:'center'}}>
<Image source={item.src} style={styles.castimg} resizeMode='contain'/>
<Text style={{...styles.title,fontSize:wp("4%"),marginTop:3,opacity:0.85}}>{item.name}</Text>
</View>



</View>
</ScrollView>

)}/>
</View>
</View>


        </View>
        </ScrollView>
       
{/* ?///////////////////button/////////////////////// */}
<View style={{width:wp('100%'),alignItems:'center',paddingVertical:hp("1%"),flexDirection:'row',paddingHorizontal:wp("3%"),justifyContent:'space-between'}}>
  <View style={{paddingLeft:wp("6%")}}>
  <Text style={styles.sub}>Price</Text>
<Text style={{...styles.title,fontSize:wp("6%")}}>$39</Text>
  </View>
  <Button title={'Buy tickets'} color={WHITE} press={()=>navigation.navigate('second')}/>
</View>
    </SafeAreaView>
  )
}

export default AboutMovie

