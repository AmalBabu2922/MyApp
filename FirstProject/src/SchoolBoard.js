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
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const {height,width}=Dimensions.get('window')


export default class SchoolBoard extends Component{

  render(){
    return(
      <KeyboardAwareScrollView style= {styles.keyboard}> 
        <View style= {styles.container}>
          <View style= {styles.subcontainer}>
            <View style= {styles.image}>
              <Image style= {styles.inmakesImg} source= {require('../assets/kukku.jpg')}></Image>
            </View>
            <View style= {styles.textcontainer}>
              <Text style= {styles.text1}>Select your school board</Text>              
            </View>
          </View>
          <View style= {styles.inputContainer}>
            <View style= {{width:"87%",marginTop:-15}}>
              <View style={{flexDirection:'row'}}>
               <TextInput style= {styles.textinput2} placeholder= "Select board" placeholderTextColor= "#446270"></TextInput>
               <View style={{top:22,right:40}}>
               <Icon name='down' style={{width:25,position:'absolute',}} color='#446270'></Icon>
               </View>              
              </View>
              <View style={{flexDirection:'row'}}>
              <TextInput style= {styles.textinput3} placeholder= "Select State" placeholderTextColor= "#446270"marginTop={8}>            
              </TextInput>
              <View style={{top:27,right:40}}>                       
              <Icon name='down' style={{width:25,position:'absolute',}} color='#446270'></Icon>
              </View>
              </View>
            </View>

            <TouchableHighlight style= {styles.button} underlayColor='transparent'
              onPress={()=>this.props.navigation.navigate('AppTour4')}>
              <Text style= {{color: "white"}}>Continue</Text>
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
inputContainer: {
  height: '30%',
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
  color: "white",
  width:'100%'
},
textinput3: {
    borderWidth:2,
    borderColor: "#13394A",
    backgroundColor: "#062E40",
    borderRadius: 5,
    paddingLeft: 12,
    color: "white",
    flexDirection:'row',
    width:'100%'
  },
button: {
  width: "87%",
  height: "25%",
  backgroundColor: "#00C458",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 15,
  borderRadius:5
}
});
 