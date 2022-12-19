import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
    ScrollView,
    Alert,
  } from 'react-native';
  import React,{useState} from 'react'
  import {
    BLACK,
    GRAY,
    GRAY2,
    LIGHT_GRAY,
    ORANGE,
    PRIMARY_COLOR,
    RED,
    WHITE,
  } from '../Assets/Color/Colors';
  import AntDesign from 'react-native-vector-icons/AntDesign';

  import CalendarStrip from 'react-native-calendar-strip';
  import moment from 'moment';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const {width,height}=Dimensions.get('window');

const HorizontalDate = () => {
    const [markedDates, setMarkedDates] = useState([]);
  const [startDate, setStartDate] = useState(moment());
  const [customDatesStyles, setCustomDatesStyles] = useState([]);

  const [selectedDate, setSelectedDate] = useState( new Date().toLocaleDateString('en-CA'),);

  const [formattedDate, setFormattedDate] = useState('');


  for (let i = 0; i < 7; i++) {
    let date = startDate.clone().add(i, 'days');

    customDatesStyles.push({
      startDate: date, // Single date since no endDate provided
      dateNameStyle: {color: 'blue'},
      dateNumberStyle: {color: 'purple'},
      highlightDateNameStyle: {color: 'pink'},
      highlightDateNumberStyle: {color: 'yellow'},
      // Random color...
      dateContainerStyle: {
        backgroundColor: `#${`#00000${(
          (Math.random() * (1 << 24)) |
          0
        ).toString(16)}`.slice(-6)}`,

        
      },

    });

    let dots = [];
    let lines = [];

    if (i % 2) {
      lines.push({
        color: 'cyan',
        selectedColor: 'orange',
      });
    } else {
      dots.push({
        color: 'red',
        selectedColor: 'yellow',
      });
    }
    markedDates.push({
      date,
      dots,
      lines,
    });
  }

  const onDateSelected =( selectedDate) => {


    setSelectedDate(selectedDate);


    const formattedDate = selectedDate.format('YYYY-MM-DD');
    setFormattedDate(formattedDate);



    const dayOfWeek = new Date(formattedDate).getDay();
    
//    dayWeek(dayOfWeek)
  

  

// console.log('hello')
    
  

  };



  const setSelectedDateNextWeek = date => {
    const selectedDate = moment(selectedDate).add(1, 'week');
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    setSelectedDate(selectedDate);
    setFormattedDate(formattedDate);

  };

  const setSelectedDatePrevWeek = date => {
    const selectedDate = moment(selectedDate).subtract(1, 'week');
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    setSelectedDate(selectedDate);
    setFormattedDate(formattedDate);
  };

  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 7; // disable Sundays
  };



  return (
    <SafeAreaView style={{width:widthPercentageToDP("100%"),height:heightPercentageToDP("13.5%"),marginTop:heightPercentageToDP("1%")}}>
         {/* datepicker */}
         <View style={{borderBottomColor: LIGHT_GRAY, borderBottomWidth: 0}}>
        <CalendarStrip
           calendarAnimation={{type: 'sequence', duration: 30}}
          // daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
          style={{height: 100, paddingTop: 10, paddingBottom: 10}}
          calendarHeaderStyle={{color: ORANGE,fontSize:18,fontFamily:'Poppins-Black'}}
          // calendarColor={'#3343CE'}
        //   calendarColor={WHITE}
          dateNumberStyle={{color: GRAY2,fontFamily:'Poppins-Black',fontSize:widthPercentageToDP("5%")}}
          dateNameStyle={{color: GRAY2,fontFamily:'Poppins-Black',fontSize:widthPercentageToDP("3%")}}
          iconContainer={{flex: 0.1,}}
        //   customDatesStyles={customDatesStyles}
          highlightDateNameStyle={{color: 'white',fontSize:widthPercentageToDP("2.3%")}}
          highlightDateNumberStyle={{color: 'white',fontSize:widthPercentageToDP("5%")}}
        //   highlightDateContainerStyle={{backgroundColor:RED}}

          // markedDates={markedDates}
          // datesBlacklist={datesBlacklistFunc}
          highlightDateNumberContainerStyle={{borderRadius:10,backgroundColor:RED,width:widthPercentageToDP("10%")}}
          selectedDate={selectedDate}
          onDateSelected={onDateSelected}
          useIsoWeekday={false}
          scrollable={true}
          key={'#'}
          minDate={new Date()}

        />
      </View>
     {/* datepicker */}
    </SafeAreaView>
  )
}

export default HorizontalDate

const styles = StyleSheet.create({})