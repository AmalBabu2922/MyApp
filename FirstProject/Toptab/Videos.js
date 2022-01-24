import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  ImageBackground
  
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
const {height,width}=Dimensions.get('window')



export default class Videos extends Component {

  

  render(){
    return(
      <ScrollView style={styles.keyboard}> 
        <View style={styles.container}>

          <View style={styles.subcontainer}>         

          

            <View style={{backgroundColor:'#ebeded',width:'100%',height:'100%',alignItems:'center'}}>
          
              <View style={{height:250,width:'80%',backgroundColor:'white', borderRadius:7,marginTop:10}}>
                    <View style={{alignItems:'center'}}>
                        <ImageBackground source={require('../assets/video.jpg')}
                        style={styles.image1}>
                          <View style={{width:'100%',height:'30%',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:20,marginTop:80}}>
                            <View>
                              </View>
                          <TouchableHighlight style={styles.enqbutton} onPress={()=>this.props.navigation.navigate('VideoPage')} underlayColor='transparent'>
                              <Text style={{color:'white', fontSize:12, fontWeight:'700'}}>
                                Biology
                               </Text>
                            </TouchableHighlight>
                          </View>
                            
                        </ImageBackground>
                    </View>
                <Text style={{color:'black', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:-40}}>The central organ of the human nervous system</Text>
                <View style={styles.play}>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text onPress={()=>this.props.navigation.navigate('VideoPage')}
                    style={{color:'gray',fontSize:11, marginLeft:5}}>Chapter 1</Text>
                  </View>
                  <View style={styles.classBoxItems}>
                    <Icon2 name='radio-button-checked' size={16} color='gray'/>
                    <Text style={{color:'gray',fontSize:11, marginLeft:5}}>3 Parts</Text>
                  </View>
                </View>
              </View>
              <View style={{height:250,width:'80%',backgroundColor:'white', borderRadius:7,marginTop:10}}>
              <View style={{alignItems:'center'}}>
                        <ImageBackground source={require('../assets/video1.jpg')}
                        style={styles.image1}>
                            <View style={{width:'100%',height:'30%',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:20,marginTop:80}}>
                            <View>
                              </View>
                          <TouchableHighlight style={styles.enqbutton} onPress={()=>this.props.navigation.navigate('VideoPage')} underlayColor='transparent'>
                              <Text style={{color:'white', fontSize:12, fontWeight:'700'}}>
                                Biology
                               </Text>
                            </TouchableHighlight>
                          </View>
                        </ImageBackground>
              </View>
              <Text style={{color:'black', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:-40}}>Nervous system</Text>
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
          

          
          </View>
         

        </View>
      </ScrollView>
      
    )
  }
}

const styles= StyleSheet.create({
  keyboard: {
    flex:1
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
    height:'80%',
    width:'100%',
    
    
    
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
  },
  enqbutton:{
    width:'23%',
    height:'60%',
    backgroundColor:'#3bd955',
    alignItems:'center',
    justifyContent:'center',
    
    
    borderRadius:5,  
    
    
  },
  

})