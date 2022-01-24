import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableHighlight,
  ScrollView,
    
} from 'react-native'

import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Videos from "../Toptab/Videos"
import ChapterTest from "../Toptab/ChapterTest"
import Resources from "../Toptab/Resources"
import QNBank from "../Toptab/QNBank"
const {height,width}=Dimensions.get('window')



const Tab = createMaterialTopTabNavigator();
export default class Chapter extends Component {

  

  render(){
    return(
      <ScrollView style={styles.keyboard}>
        <View style={styles.container}>           
          <View style={styles.subcontainer}>
          

          <View style={styles.titleView}>
            <TouchableHighlight style={styles.button}
                underlayColor='transparent'
                onPress={()=>this.props.navigation.navigate('Course')}>
                <Text >
                < Icon2 name='arrow-back-ios' size={12} color='#3bd955'/>
                </Text>
            </TouchableHighlight>  

            <Text style={{color:'white', fontSize:24,marginLeft:28, fontWeight:'bold',marginTop:40}}>Human nervous system.</Text>
            
            <View style={styles.play}>
              <View style={styles.classBoxItems}>
                <Icon2 name='radio-button-checked' size={16} color='#3bd955'/>
                <Text style={{color:'#3bd955',fontSize:11, marginLeft:5}}>Chapter 1</Text>
              </View>
              <View style={styles.classBoxItems}>
                <Icon2 name='radio-button-checked' size={16} color='#3bd955'/>
                <Text style={{color:'#3bd955',fontSize:11, marginLeft:5}}>3 Ports</Text>
              </View>
            </View>
          
          </View>

          
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle:{fontSize:10,},
              
              tabBarStyle:{backgroundColor:'#0a192e'},
              tabBarActiveTintColor:'white',
              
            }}>
              
                <Tab.Screen name="Videos" component={Videos} />
                <Tab.Screen name="ChapterTest" component={ChapterTest} />
                <Tab.Screen name="Resources" component={Resources} />
                <Tab.Screen name="QNBank" component={QNBank} />
              
      
          </Tab.Navigator>
          
         

          

                   
          
         
          </View>
        </View>
        </ScrollView>
    )
  }
}






const styles= StyleSheet.create({

  keyboard: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ebeded',
    height:height
  },
  subcontainer: {
    height: '100%',
    width: '100%',   
    backgroundColor: '#0a192e'
  },

  
  image1:{
    height:42,
    width:'32%',
    marginLeft:7
    
  },
  titleView:{
      
    backgroundColor:'#0a192e',
    height:'25%'

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
    marginLeft:43,
    alignItems:'center',
    justifyContent:'center',
 
  },

 
  

})