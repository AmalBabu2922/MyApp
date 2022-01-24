import React,{Component} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const {height,width}=Dimensions.get('window')


export default class StudentDetails extends Component{

  render(){
    return(
      <KeyboardAwareScrollView style= {styles.keyboard}> 
        <View style= {styles.container}>
          <View style= {styles.subcontainer}>
            <View style= {styles.image}>
              <Image style= {styles.inmakesImg} source= {require('../assets/kukku.jpg')}></Image>
            </View>
            <View style= {styles.textcontainer}>
              <Text style= {styles.text1}>Student details</Text>              
            </View>
          </View>
          <View style= {styles.subcontainer2}>
            <View style= {{width:"87%",marginTop:-10}}>
              <TextInput style= {styles.textinput2} placeholder= "Mobile number" placeholderTextColor= "#446270" keyboardType= "number-pad"  ></TextInput>
              <TextInput style= {styles.textinput2} placeholder= "Email" placeholderTextColor= "#446270" keyboardType= "number-pad" marginTop={8} ></TextInput>
              <View style={{width:'100%',backgroundColor:'#002333',flexDirection:'row',justifyContent:'space-between'}}>
               <TextInput style= {styles.textinputstate} placeholder= "Select State" placeholderTextColor= "#446270" keyboardType= "number-pad" marginTop={8} >                
               </TextInput>
               <View style={{top:26,right:40}}>
               <Icon name='down' style={{width:25,position:'absolute'}} color='#446270'></Icon>
               </View>
              </View>
              
              <TextInput style= {styles.textinput2} placeholder= "Pin Code" placeholderTextColor= "#446270" keyboardType= "number-pad" marginTop={8} ></TextInput>
            </View>

            <TouchableHighlight style= {styles.button} underlayColor='transparent'
              onPress={()=>this.props.navigation.navigate('SchoolBoard')}>
              <Text style= {{color: "white"}}>Register</Text>
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
container: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'white',
  height:height
},
subcontainer: {
  height: '50%',
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
  fontSize:22,
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
subcontainer2: {
  height: '50%',
  width: '100%',
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

  textinputstate: {
    width:'100%',
    borderWidth:2,
    borderColor: "#13394A",
    backgroundColor: "#062E40",
    borderRadius: 5,
    paddingLeft: 12,
    color: "white",
    flexDirection:'row'
  },
button: {
  width: "87%",
  height: "15%",
  backgroundColor: "#00C458",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 15,
  borderRadius:5
}
});
 