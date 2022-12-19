import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
  } from 'react-native';
  import React,{useEffect, useState} from 'react';
//   import {Dimension, Fonts} from '../../theme';
  import {Divider} from 'react-native-paper';
import InputField from './InputField';
import {RadioButton} from 'react-native-paper';
import { GRAY, LIGHT_GRAY, LIGHT_GRAY2, WHITE,RED,RED2 } from '../Assets/Color/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
  

  const {width, height} = Dimensions.get('window');

  export default function RecordsModal({vis,onClose,title,btn,page}) {
    const [checked, setChecked] = React.useState('Male');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = React.useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [showError,setShowError]=useState(true);
    const [errorMsg,setErrorMsg]=useState('')

    const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user)


    ////////////////pageonoadeset state//////////////////''''
    useEffect(()=>{
if(page ==='update'){
  
  setName(user?.name)
  setEmail(user?.email)
setChecked(user?.gender)
setDOB(user?.dob)
setPassword(user?.password)
}else{
  setName('')
  setEmail('')
setChecked('Male')
setDOB('')
setPassword('')
}

setErrorMsg('')


     
    },[])
/////////////////////////datepicker////////////////////////

const showDatePicker = () => {
  setIsDatePickerVisible(true);
};

FormatDate = async data => {
  let dateTimeString =
    data.getFullYear() +
    '-' +
    (data.getMonth() + 1) +
    '-' +
    data.getDate() +
    ' ';

  await hideDatePicker();
  await setDOB(dateTimeString);
  console.log('dob--', dob);

  return dateTimeString; // It will look something like this 3-5-2021 16:23
};

const hideDatePicker = () => {
  setIsDatePickerVisible(false);
};



////////////validator email///////////////////////////
const validateEmail = email => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

////////////////////validation/////////////////////////////////
const _validateSignup = () => {

  if (name == '' || name == null) {
    setErrorMsg("*Please enter your name");
  } else if (email == '' || email == null) {
    setErrorMsg("*Please enter your email");
  } else if (!validateEmail(email)) {
    setErrorMsg("*Please enter your valid email");
  }

  else if (password == '' || password == null) {
    setErrorMsg("*Please enter your password ");
  } else if (password.length <6) {
    
    setErrorMsg("*Please enter minimum 6 digit password");
  } 
  

  
  else if (dob == '' || dob == null) {
    
    setErrorMsg("*Please enter your birth date");
  } 

  else {
    SubmitData();
  }
};





function SubmitData(){
  let result = {
    name: name,
    email: email,
    gender: checked,
    dob: dob,
    password: password,
  };


  console.log("body???????????",result)
  
  dispatch({
    type: 'SET_USER',
    payload:result,
  });

  onClose()
// navigation.navigate('Homepage')

}







  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={vis}
        onRequestClose={()=>
         onClose()}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={styles.centeredView}>
          <TouchableOpacity
            activeOpacity={1}
            //   onPress={() => {}}
            style={styles.modalView}>
            <Text style={styles.modalText}>{title}</Text>
           {showError?( <Text style={{...styles.modalText,color:RED,fontSize:18}}>{errorMsg}</Text>):null}

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* {showRecords()} */}

              <View style={{width:width,paddingLeft:10,paddingRight:25,marginTop:10,backgroundColor:WHITE,height:width+10}}>
              <View style={styles.field}>
              <InputField label={'Name'} inputType={'Email'} name={"person"}  value={name}
            onChangeText={(value)=>{setName(value),setErrorMsg('')}}/>

              </View>

              <View style={styles.field}>
              <InputField label={'Email'} inputType={'Email'} name={"email"}  value={email}
            onChangeText={(value)=>{setEmail(value),setErrorMsg('')}}/>

              </View>

              <View style={styles.field}>
 <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.row}>
                <Text style={{color:GRAY}}>Male</Text>
                <RadioButton
                  uncheckedColor={GRAY}
                  label={'Male'}
                  color={GRAY}
                  value="Male"
                  status={checked === 'Male' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Male')}
                />
              </View>
              <View style={styles.row}>
                <Text style={{color:GRAY}}>Female</Text>
                <RadioButton
                  uncheckedColor={GRAY}
                  label={'FeMale'}
                  color={GRAY}
                  value="Female"
                  status={checked === 'Female' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Female')}
                />
              </View>
            </View>
              </View>

             
              <View style={{...styles.field,width:width-50}}>
              <InputField label={'Password'} inputType={'Password'}  value={password}
            onChangeText={(value)=>{setPassword(value),setErrorMsg('')}} secure={!showPass}
            setSecure={setShowPass}/>


              </View>


              <TouchableOpacity onPress={() => showDatePicker()} style={{flexDirection:'row',width:width-70,justifyContent:'space-between'}}>
           <View  style={{backgroundColor:WHITE,width:width-80}}>
           <InputField
             label={'Date of Birth'}
             value={dob}
             editable={false}
             onChangeText={(value)=>{setDOB(value),setErrorMsg('')}}
             keyboardType="number-pad"
              name={"snow"}
             
          />
           </View>
           

<View style={{backgroundColor:WHITE,marginRight:55}}>
<AntDesign
                name="calendar"
                size={20}
                color={GRAY}
                style={{}}
              />
</View>

          </TouchableOpacity>


          <View style={{alignItems:'flex-end',width:width,marginLeft:width*0.4,marginTop:-9}}>
  <Button title={'Submit'} press={_validateSignup} />
</View>
           
      
              {/* <InputField  inputType={'Email'}/> */}

             

         
              </View>
            

            </ScrollView>
          </TouchableOpacity>
          
 
        </TouchableOpacity>

      </Modal>
    );
  }
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      // margin: 20,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      padding: 25,
      width:width,
      height:height*0.65,
      // flex: 1,
      // alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      backgroundColor: '#fff',
      shadowRadius: 4,
      elevation: 5,
      flexDirection: 'column',
      // justifyContent: 'space-between',,
      zIndex:2
    },
    modalText: {
      fontSize: 20,
      color: '#000',
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
    },
    field:{
      marginTop:1,
  marginBottom:15
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal:0,
    },
  });