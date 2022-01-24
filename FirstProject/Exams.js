import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  ImageBackground,
  
  
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'





export default class Exams extends Component {

  
  render(){
    return(
        <View style={styles.container}>

          

          <View style={styles.titleView}>
            <TouchableHighlight style={styles.button}
                underlayColor='transparent'
                onPress={()=>this.props.navigation.navigate('Home')}>
                <Text >
                < Icon2 name='arrow-back-ios' size={12} color='#3bd955'/>
                </Text>
            </TouchableHighlight>  

            <Text style={{color:'white', fontSize:24,marginLeft:28, fontWeight:'bold',marginTop:40}}>Exams</Text>
            
            <View style={styles.play}>
              <View style={styles.classBoxItems}>
                <Icon2 name='radio-button-checked' size={16} color='#3bd955'/>
                <Text style={{color:'#3bd955',fontSize:11, marginLeft:5}}>12 Chapters</Text>
              </View>
              <View style={styles.classBoxItems}>
                <Icon2 name='radio-button-checked' size={16} color='#3bd955'/>
                <Text style={{color:'#3bd955',fontSize:11, marginLeft:5}}>124 hours</Text>
              </View>
            </View>
          
          </View>

          
          
          
          
         

        </View>
      
    )
  }
}


 
  
  


const styles= StyleSheet.create({

  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'white',
    
  },
 
  titleView:{
      
    backgroundColor:'#0a192e',
    height:'30%'

  },
  button:{
    width:35,
    height:35,
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',  
    marginLeft:30,
    borderRadius:5,
    borderColor:'white',
    borderWidth:1,
    marginTop:30
  },
  classBox:{
    width:85,
    height:35,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',  
    borderWidth:1.5,
    borderRadius:5,
    borderColor:'#3bd955',
    marginTop:10,
    marginLeft:80

  },
  classBoxItems:{
    flexDirection:'row',
    marginLeft:25
    
  },
 


  
  play:{
    flexDirection:'row',
    width:95,
    height:45,    
    marginLeft:55,
    alignItems:'center',
    justifyContent:'center',
 
  },

 
  

})