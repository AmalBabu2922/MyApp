import React,{Component} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Responsive extends Component{

  render(){
    return(
      <KeyboardAwareScrollView style= {styles.keyboard}> 
        <View style= {styles.maincontainer}>
          <View style= {styles.subcontainer}>
            <View style= {styles.imgcontainer}>
              <Image style= {styles.img} source= {require('./assets/kukku.jpg')}></Image>
            </View>
            <View style= {styles.textcontainer}>
              <Text style= {styles.text1}>Enter your mobile number</Text>
              <Text style= {styles.text2}>We will send you an OTP to verify.</Text>
            </View>
          </View>
          <View style= {styles.subcontainer2}>
            <View style= {{width:"87%",marginTop:-10}}>
              <TextInput style= {styles.textinput2} placeholder= "Mobile number" placeholderTextColor= "#446270" keyboardType= "number-pad"  ></TextInput>
              <TextInput style= {styles.textinput2} placeholder= "Email" placeholderTextColor= "#446270" keyboardType= "number-pad" marginTop={8} ></TextInput>
              <TextInput style= {styles.textinput3} placeholder= "Select State" placeholderTextColor= "#446270" keyboardType= "number-pad" marginTop={8} >
                
              </TextInput>
              <Icon name='down' style={{width:25,position:'absolute',top:140,left:300}} color='#446270'></Icon>
              <TextInput style= {styles.textinput2} placeholder= "Pin Code" placeholderTextColor= "#446270" keyboardType= "number-pad" marginTop={8} ></TextInput>
            </View>

            <TouchableHighlight style= {styles.touchable}>
              <Text style= {{color: "#FFFFFF"}}>Register</Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAwareScrollView>      
    );
  }
} 


const styles = StyleSheet.create({
  keyboard: {
    flex: 1
  },
maincontainer: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'white'
},
subcontainer: {
  height: hp('50%'),
  width: wp('100%'),
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: 'white'
},
imgcontainer: {
  width:"100%",
  height: "70%",
  alignItems: "center",
  justifyContent:"center"
},
img: {
  width: 200,
  height: 44
},
textcontainer: {
  width: "100%",
  height: "30%",
  alignItems: "center",
  justifyContent:"center"
},
text1: {
  fontSize:19,
  fontWeight:"bold",
  alignItems:"center",
  justifyContent:"center"
},
text2: {
  fontSize:14,
  color: "#9F9F9F",
  marginTop: 12
},
subcontainer2: {
  height: hp('50%'),
  width: wp('100%'),
  backgroundColor: '#002333',
  alignItems: "center",
  justifyContent: "center",
  borderTopEndRadius: 18,
  borderTopLeftRadius:18
},
textinput2: {
  borderWidth:2,
  borderColor: "#13394A",
  backgroundColor: "#062E40",
  borderRadius: 5,
  paddingLeft: 12,
  color: "white"
},
textinput3: {
    borderWidth:2,
    borderColor: "#13394A",
    backgroundColor: "#062E40",
    borderRadius: 5,
    paddingLeft: 12,
    color: "white",
    flexDirection:'row'
  },
touchable: {
  width: "87%",
  height: "18%",
  backgroundColor: "#00C458",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 15,
  borderRadius:5
}
});
 