import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions,TouchableOpacity,Image } from "react-native";
import { WHITE } from "../Assets/Color/Colors";
import { styles } from "../Css/PageCss";
import { useDispatch,useSelector } from 'react-redux';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import Button from "./Button";

const {width,height}=Dimensions.get('window')
const ModalList = ({visible,onRequestClose,print}) => {
const Docrecord=useSelector(state=>state.record)

//   const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
       <TouchableOpacity
          activeOpacity={1}
          onPress={onRequestClose}
          style={styles.centeredView}>
            <TouchableOpacity
            activeOpacity={1}
            //   onPress={() => {}}
            style={styles.modalView}>


    <View style={{alignItems:'center',backgroundColor:WHITE}}>
<Text style={{...styles.text,fontSize:23,fontWeight:'800'}}>DOCKET RECORD</Text>
 <View style={{width:width-15,padding:24}}>


 <View style={{...styles.flexitem,}}>
    <Text style={{...styles.text,fontSize:20,fontWeight:'800'}}>FROM:</Text>
    <Text style={{...styles.title,fontSize:20,fontWeight:'800'}}>{Docrecord?.From}</Text>


 </View>

 <View style={{...styles.flexitem,paddingTop:18}}>
    <Text style={{...styles.text,fontSize:20,fontWeight:'800'}}>TO:</Text>
    <Text style={{...styles.title,fontSize:20,fontWeight:'800'}}>{Docrecord?.To}</Text>


 </View>

 <View style={{...styles.flexitem,paddingTop:18}}>
    <Text style={{...styles.text,fontSize:20,fontWeight:'800'}}>NO OF PACKETS:</Text>
    <Text style={{...styles.title,fontSize:20,fontWeight:'800'}}>{Docrecord?.No_Packets}</Text>


 </View>
 <View style={{...styles.flexitem,paddingTop:18}}>
    <Text style={{...styles.text,fontSize:20,fontWeight:'800'}}>DOCKET NO:</Text>
    


 </View>

 <Barcode
        format="CODE128B"
        value={Docrecord?.Docket_no}
        text={Docrecord?.Docket_no}
        
        style={{ marginBottom:40 }}
        // maxWidth={Dimensions.get('window').width/2}
        textStyle={{color:'#000',fontSize:20,letterSpacing:5}}
      />
 {/* <Text style={{...styles.label,fontSize:20,fontWeight:'800'}}></Text> */}
 </View>

 <View style={{width:width,marginTop:-45,alignItems:'center',left:width/4-13}}>
 <Button title={"Print"} press={print}/>
 </View>

</View>


            
           
            </TouchableOpacity>
            </TouchableOpacity>
      </Modal>
    
    </View>
  );
};



export default ModalList;