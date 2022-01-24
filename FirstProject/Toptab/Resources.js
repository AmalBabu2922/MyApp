import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  ImageBackground
  
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'





export default class Resources extends Component {

  

  render(){
    return(
        <View style={styles.container}>



          

          

          

                   
          
         

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
  image1:{
    height:42,
    width:'32%',
    marginLeft:7
    
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
  subjectBox:{
    width:85,
    height:35,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',  
    borderWidth:1.5,
    borderRadius:5,
    borderColor:'black',
    marginTop:25,
    marginLeft:20

  },

  videoBox:{
    width:220,
    height:130,
    backgroundColor:'gray',
    marginTop:5,
    marginLeft:20
  },
  videoImage:{
    width:220,
    height:130,
    
    
  },
  play:{
    flexDirection:'row',
    width:95,
    height:45,    
    marginLeft:55,
    alignItems:'center',
    justifyContent:'center',
 
  },

  classDetailsBox:{
    width:220,
    height:450,
    backgroundColor:'#012036',
    marginTop:25,
    marginLeft:20
  },
  round:{
    width:100,
    height:100,
    backgroundColor:'#094570',
    borderRadius:100,
    marginLeft:40,
    marginTop:40
  },
  bookclassButton:{
    width:'75%',
    height:55,
    backgroundColor:'#3bd955',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
    marginTop:10,
    borderRadius:5
  }
  

})