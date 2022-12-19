import {StyleSheet} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  BLACK,
  GRAY,
  LIGHT_GRAY,
  ORANGE,
  RED,
  RED2,
  WHITE,
} from '../Assets/Color/Colors';

export const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    // height:hp("100%"),
    padding: 12,
    alignItems: 'center',
  },
  sub: {
    fontSize: wp('4%'),
    color: ORANGE,
    opacity: 0.85,
  },
  title: {
    color: WHITE,
    fontSize: wp('8%'),
    fontWeight: '800',
  },
  seat: {
    width: wp('86%'),
    height: hp('66%'),
    // marginTop:hp("1%"),
    // paddingLeft:wp("3%"),
    alignItems: 'center',
  },
  flexitem: {
    flexDirection: 'row',

    height: hp('6%'),

    justifyContent: 'space-between',
  },
  bookseat: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: 3,
    opacity: 0.85,
  },
  seatDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('43.5%'),
    width: wp('86%'),
  },
  topimg: {
    alignItems: 'center',
    width: wp('100%'),
    height: hp('27%'),
  },
  linearGradient: {
    transform: [{rotate: '180deg'}],
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 2,
    height: hp('32%'),
    width: wp('100%'),
    // backgroundColor:WHITE
  },
  box: {
    // height:hp("100%"),
    width: wp('95%'),
    marginTop: 12,
    borderRadius: 15,
    flexDirection: 'row',
    display: 'flex',
    // marginRight:16
  },
  tag: {
    color: BLACK,
    fontSize: wp('7%'),
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
  card_style: {
    width: wp('32%'),
    height: hp('20%'),
    margin: 5,
  },
  castimg:{
    width:wp("30%"),height:wp("35%"),borderRadius:5,
    
  },
  
 videodiv: {
  // flex: 1,
  width:wp("100%"),height:wp("55%"),
  alignItems:"center",
  // backgroundColor:"white"

},


backgroundVideo: {
  // flex: 1,
  width:wp("100%"),
  height:wp("55%"),

  // justifyContent: 'center',
},
});
