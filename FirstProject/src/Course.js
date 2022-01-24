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

import Icon2 from 'react-native-vector-icons/MaterialIcons'
const {height,width}=Dimensions.get('window')



export default class Course extends Component {

  

  render(){
    return(
      <ScrollView style={styles.keyboard}>
        <View style={styles.container}>         

          <View style={styles.subcontainer}>
            <TouchableHighlight style={styles.button}
                underlayColor='transparent'
                onPress={()=>this.props.navigation.navigate('Home')}>
                <Text >
                < Icon2 name='arrow-back-ios' size={12} color='#3bd955'/>
                </Text>
            </TouchableHighlight>  

            <Text style={{color:'white', fontSize:24,marginLeft:28, fontWeight:'bold',marginTop:20}}>Biology</Text>
            
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

          <ScrollView showsVerticalScrollIndicator={false}>

          

            <View style={{backgroundColor:'#ebeded',width:'100%',height:'100%',alignItems:'center'}}>
          
              <View style={{height:115,width:'90%',backgroundColor:'white', borderRadius:7,marginTop:10}}>
                <Text style={{color:'black', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:15}}>The central organ of the human nervous system.</Text>
                <View style={styles.play}>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text onPress={()=>this.props.navigation.navigate('Chapter')}
                    style={{color:'gray',fontSize:11, marginLeft:5}}>Chapter 1</Text>
                  </View>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>3 Parts</Text>
                  </View>
                </View>
              </View>
              <View style={{height:115,width:'90%',backgroundColor:'white', borderRadius:7,marginTop:10}}>
              <Text style={{color:'black', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:15}}>Human digestve system.</Text>
                <View style={styles.play}>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>Chapter 1</Text>
                  </View>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>3 Parts</Text>
                  </View>
                </View>
              </View>

              <View style={{height:115,width:'90%',backgroundColor:'white', borderRadius:7,marginTop:10}}>
              <Text style={{color:'black', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:15}}>Human resperatory system.</Text>
                <View style={styles.play}>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>Chapter 1</Text>
                  </View>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>3 Parts</Text>
                  </View>
                </View>
              </View>

              <View style={{height:115,width:'90%',backgroundColor:'white', borderRadius:7,marginTop:10}}>
              <Text style={{color:'black', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:15}}>Human reproductive system.</Text>
                <View style={styles.play}>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>Chapter 1</Text>
                  </View>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>3 Parts</Text>
                  </View>
                </View>
              </View>

              <View style={{height:115,width:'90%',backgroundColor:'white', borderRadius:7,marginTop:10}}>
              <Text style={{color:'black', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:15}}>Human muscles</Text>
                <View style={styles.play}>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>Chapter 1</Text>
                  </View>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>3 Parts</Text>
                  </View>
                </View>
              </View>
          
            </View>
          </ScrollView>

          
          
         

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
  height: '25%',
  width: '100%',
 
  backgroundColor: '#0a192e'
},

  button:{
    width:35,
    height:35,
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',  
    marginLeft:27,
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