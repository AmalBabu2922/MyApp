import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,  
  Dimensions
  
  
} from 'react-native'


import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const {height,width}=Dimensions.get('window')


export default class Register extends Component {
  constructor(){
    super();
    this.state={
      name: null
    }
  }

  updateValue(mobnum){
    this.setState({name: mobnum})
    
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
                  <Text style= {styles.text1}>Enter your mobile number</Text>
                  <Text style= {styles.text2}>We will send you an OTP to verify.</Text>        
                </View>
            </View>
        
            <View style={styles.inputContainer}>
              <View style= {{flexDirection:'row', width:"87%",marginTop:-30,justifyContent:'space-between'}}>
                <View style={{width:'15%'}}>
                <TextInput style= {styles.textinput1} placeholder= "+91" placeholderTextColor= "#446270" keyboardType= "number-pad"  ></TextInput>
                </View>
                <View style={{width:'83%'}}>
                <TextInput style= {styles.textinput2} placeholder= "Mobile number" placeholderTextColor= "#446270" keyboardType= "number-pad" 
                  onChangeText={(mobnum)=>this.updateValue(mobnum)} >
                </TextInput>
                </View>            
              
              </View>

              <TouchableHighlight style= {styles.touchable}
                underlayColor='transparent'
                onPress={()=>this.props.navigation.navigate('Verification', {mobnum: this.state.name})}>
                  <Text style= {{color: "#FFFFFF"}}>Continue</Text>
              </TouchableHighlight>         
            </View>

          
        </View>
      </KeyboardAwareScrollView>
     
      
    )
  }
}

const styles= StyleSheet.create({

   keyboard: {
    flex: 1,
    
  },

  container:{
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    height:height,
    
  },

  subcontainer: {
    height: '70%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },

  image: {
    width:"100%",
    height: "70%",
    alignItems: "center",
    justifyContent:"center"
  },

  inmakesImg: {
    width: 250,
    height: 60
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
    justifyContent:"center",
    color:'black'
  },
  text2: {
    fontSize:14,
    color: "#9F9F9F",
    marginTop: 12
  },

  inputContainer: {
    height: '30%',
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
    height:52.8,
    width:52
  },

  textinput2: {
    borderWidth:2,
    borderColor: "#13394A",
    backgroundColor: "#062E40",
    borderRadius: 5,    
    color: "white",
    width:'100%',
    paddingLeft: 12,
    
  },
  touchable: {
    width: "87%",
    height: "25%",
    backgroundColor: "#00C458",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius:5
  },
  


})