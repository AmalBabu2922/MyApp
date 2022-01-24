import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Dimensions
} from 'react-native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import OTPInputView from '@twotalltotems/react-native-otp-input';

const {height,width}=Dimensions.get('window')


export default class Verification extends Component {

  componentDidMount(){
    
  }

  render(){
    return(
      
      <KeyboardAwareScrollView  style={styles.keyboard}>
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <View style={styles.image}>
              <Image style= {styles.inmakesImg} source= {require('../assets/kukku.jpg')}></Image>
            </View>
          
            <View style={styles.textcontainer}>
                <Text style= {styles.text1}>Verification code</Text>
                <Text style= {styles.text2}>Please type the verification code send to</Text>
              <View style={{flexDirection:'row'}} >
                <Text style={{ marginTop:20,color:'black',marginRight:5}}> +91</Text>
                  <View style={styles.mobileno}>
                    <Text style={{color:'black'}}>{this.props.route.params.mobnum}</Text>
                  </View>
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>

            <View style= {{flexDirection:'row', width:"87%",justifyContent:'center'}}>
            <OTPInputView
              style={{width: '80%', height: 100}}
              pinCount={6}    
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled = {(code) => {
              console.log(`Code is ${code}, you are good to go!`)
            }}
            />
            </View>

            <TouchableHighlight style={styles.touchable}
            underlayColor='transparent'
            onPress={()=>this.props.navigation.navigate('StudentDetails')}>
            <Text style={{color:'white', fontSize:15, fontWeight:'700'}}>
              Resend OTP
            </Text>
            </TouchableHighlight>
            
            <Text style={{fontSize:11, color:'#28394f',marginTop:10,}}>
                Resend after 30s
            </Text>
            
            
            <View style={styles.contactus}>
               < Icon2 name='phone' size={20} color='#3bd955'/>
                <Text style={{marginLeft:5, color:'#3bd955', fontWeight:'800', fontSize:15}}>Contact Us</Text>                           
            </View>
            
            

          </View>   

        </View>
      </KeyboardAwareScrollView>
      
    )
  }
}

const styles= StyleSheet.create({

  keyboard: {
    flex: 1
  },

  container:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    height:height
  },

  subcontainer: {
    height: '65%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },

  image: {
    width:"100%",
    height: "75%",
    alignItems: "center",
    justifyContent:"center"
  },

  inmakesImg: {
    width: 250,
    height: 60
  },

  textcontainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent:"center",
    
  },

  text1: {
    fontSize:19,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    color:'black'
  },
  text2: {
    fontSize:14,
    color: "#9F9F9F",
    marginTop: 12
  },

  inputContainer: {
    height: '35%',
    width: '100%',
    backgroundColor: '#002333',
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 18,
    borderTopLeftRadius:18
  },
  textinput1: {
    borderWidth:2,
    borderColor: "#13394A",
    backgroundColor: "#062E40",
    borderRadius: 5,
    paddingLeft: 12,
    color: "white",
    width:'15%'
  },

  textinput2: {
    borderWidth:2,
    borderColor: "#13394A",
    backgroundColor: "#062E40",
    borderRadius: 5,
    paddingLeft: 12,
    color: "white",
    width:'83.5%',
    marginLeft:5
  },
  touchable: {
    width: "87%",
    height: "22%",
    backgroundColor: "#00C458",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
    borderRadius:5
  },
  mobileno:{
    width:'25%',
    height:'40%',
    backgroundColor:'white',
    marginTop:17,
    alignItems:'center',
    justifyContent:'center',
    
  },
  contactus:{
    width:'50%',
    height:'20%',    
    alignItems:'center',
    justifyContent:'center',    
    flexDirection:'row',
    marginRight:12

  },
  borderStyleBase: {
    width: 30,
    height: 20
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 15,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  

})