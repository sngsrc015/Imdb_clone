import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Dimensions,

} from 'react-native';
import React from 'react';
// import { TextInput } from 'react-native-paper';
import Fonts from '../Assets/fonts/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
  BLACK,
  GRAY,
  GRAY2,
  LIGHT_GRAY,
  LIGHT_GRAY2,
  WHITE,
} from '../Assets/Color/Colors';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

const InputField = ({label, inputType, secure, setSecure, name,editable, maxLength,  onChangeText,
  value,keyboardType,side,Touch,data}) => {
  const [text, setText] = React.useState('');

  return (
    <View>
      {inputType === 'Password' ? (
        <View style={{}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#000"
                style={{marginRight: 5}}
              />
              <View>
                <Text
                  style={{
                    color: BLACK,
                    fontWeight: '700',
                    fontFamily: Fonts.primaryBold,
                  }}>
                  {label}
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
              <MaterialCommunityIcons
                name={secure ? 'eye-off' : 'eye'}
                color={GRAY}
                size={23}
                style={{
                  paddingHorizontal: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          <TextInput
            //   label="Email"
            textColor={'#000'}
            value={value}
            onChangeText={onChangeText}
            selectionColor={side?WHITE:BLACK}
            editable
            maxLength={maxLength}
            placeholderTextColor="#000"
            secureTextEntry={secure}
            style={{
              color:GRAY,
              paddingVertical: 3,
              fontFamily: Fonts.primaryRegular,
              backgroundColor: WHITE,
              fontSize: 17,
              borderBottomColor:LIGHT_GRAY2,
              borderBottomWidth: 1,
            }}
          />
        </View>
      ) :side?(

<View>
<View style={{flexDirection: 'row'}}>
            <Fontisto
              style={{
                // borderRadius:15,
                paddingRight: 8,
              }}
              name={name}
              size={20}
              color={GRAY}
            />
            <View>
              <Text
                style={{
                  color:BLACK,
                  fontWeight: '700',
                  fontFamily: Fonts.primaryBold,
                  fontSize:16
                }}>
                {label}
              </Text>
            </View>
          </View>

          <TextInput
            //   label="Email"
            textColor={'#000'}
            value={value}
            onChangeText={onChangeText}
            selectionColor={BLACK}
            editable
            keyboardType={keyboardType}
            placeholderTextColor="#000"
            secureTextEntry={secure}
            maxLength={maxLength}

            style={{
              color:GRAY,
              paddingVertical:7,
              fontFamily: Fonts.primaryRegular,
              backgroundColor:side?'transparant':WHITE,
              fontSize:17,
              borderColor:LIGHT_GRAY2,
              borderWidth: 1,
              borderRadius:10,
            }}
          />
</View>


      ) :Touch?(<View>
          <View>
              <Text
                style={{
                  color:BLACK,
                  fontWeight: '700',
                  fontFamily: Fonts.primaryBold,
              
                }}>
                {label}
              </Text>
            </View>
            <Text style={{...styles.text,color:GRAY,
              paddingVertical:7,
              fontFamily: Fonts.primaryRegular,
              backgroundColor:WHITE,
              fontSize:17,
              borderColor:LIGHT_GRAY2,
              borderWidth: 1,
              borderRadius:19,}}>{data}</Text>
      </View>):
 (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Fontisto
              style={{
                // borderRadius:15,
                paddingRight: 8,
              }}
              name={name}
              size={20}
              color={GRAY}
            />
            <View>
              <Text
                style={{
                  color:BLACK,
                  fontWeight: '700',
                  fontFamily: Fonts.primaryBold,
              
                }}>
                {label}
              </Text>
            </View>
          </View>

          <TextInput
            //   label="Email"
            textColor={'#000'}
            value={value}
            onChangeText={onChangeText}
            selectionColor={BLACK}
            editable
            keyboardType={keyboardType}
            placeholderTextColor="#000"
            secureTextEntry={secure}
            maxLength={maxLength}

            style={{
              color:GRAY,
              paddingVertical: 3,
              fontFamily: Fonts.primaryRegular,
              backgroundColor: WHITE,
              fontSize: 17,
              borderBottomColor:LIGHT_GRAY2,
              borderBottomWidth: 1,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
