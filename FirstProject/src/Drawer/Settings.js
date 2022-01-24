import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native'




export default class Settings extends Component {

  

  render(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:50,color:'black', fontWeight:'bold'}}> HOME</Text>
        </View>
      
    )
  }
}

const styles= StyleSheet.create({

  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'

  },



})