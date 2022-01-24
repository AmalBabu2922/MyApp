import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  
  
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
const {height,width}=Dimensions.get('window')



export default class VideoPage extends Component {

  

  render(){
    return(
        <ScrollView>
        <View style={styles.maincontainer}>
          <View style={styles.subcontainer}>
                    <View style={{alignItems:'center'}}>
                        <ImageBackground source={require('./assets/video.jpg')}
                        style={styles.image1}>
                            < Icon name='play-circle-o' size={80} color='white'/>
                        </ImageBackground>
                    </View>

                    <View style={{flex:1, backgroundColor:'#0a192e'}}>

                        <View style={{width:"100%",height:80, backgroundColor:'#dfeded',flexDirection:'row',justifyContent:'space-between'}}>

                            <View style={{width:"79.9%",height:80, backgroundColor:'#0a192e'}}>
                            <Text style={{color:'white', fontSize:20,marginLeft:15, fontWeight:'bold',marginTop:15}}>The central organ of the human nervous system</Text>

                            </View>

                            <View style={{width:"20%",height:80, backgroundColor:'#0a192e',alignItems:'center',justifyContent:'center'}}>
                            <Icon2 name='file-download' size={20} color='white'/>
                            <Text style={{color:'white'}}>Download</Text>
                            </View>

                        </View>

                        <View style={{width:"100%",height:80, backgroundColor:'#0a192e',flexDirection:'row',justifyContent:'space-between'}}>

                            <View style={{width:"20%",height:80, backgroundColor:'#0a192e',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            
                            < Icon2 name='arrow-back-ios' size={15} color='white'/>
                            <Text style={{color:'white',marginRight:2,fontSize:12}}>Previous</Text>

                            </View>

                            <View style={{width:"20%",height:80, backgroundColor:'#0a192e',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                <Icon2 name='radio-button-checked' size={16} color='#3bd955'/>
                                <Text style={{color:'#3bd955',marginLeft:5,fontSize:10}}>Part 1</Text>
                            </View>

                            <View style={{width:"20%",height:80, backgroundColor:'#0a192e',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                            
                            <Text style={{color:'white',marginRight:2,fontSize:12}}>Next</Text>
                            < Icon2 name='arrow-forward-ios' size={15} color='white'/>
                            </View>

                        </View>

                        <View style={{flex:1, backgroundColor:'#0a192e',justifyContent:'flex-end',marginTop:250}}>
                            <View style={{width:"100%",height:"50%", backgroundColor:'#0a192e',alignItems:'center',justifyContent:'center',}}>
                                <View style={{width:"90%",height:"80%", backgroundColor:'black',flexDirection:'row',justifyContent:'space-between',borderRadius:5}}>
                                    <View style={{width:"79%",height:"100%", backgroundColor:'black',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                    <Text style={{color:'white',fontSize:14,marginLeft:10}}>Explain about human nervous system?</Text>       

                                    </View >


                                    <View style={{width:"20%",height:"100%", backgroundColor:'black',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                        <View style={styles.circle}>
                                            <Image source={require('./assets/robert.jpg')} style={styles.robert}>
                                                    </Image>
                                        </View>
                                       
                                    </View >



                                </View >

                            </View >

                            <View style={{width:"100%",height:"50%", backgroundColor:'#0a192e',alignItems:'center',justifyContent:'center',}}>
                            <View style={{width:"90%",height:"80%", backgroundColor:'red',borderRadius:5}}>
                            


                            <View style={{width:"100%",height:"100%", backgroundColor:'#28394f',flexDirection:'row',justifyContent:'space-between',borderRadius:5}}>
                                    <View style={{width:"81%",height:"100%", backgroundColor:'#28394f',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                    <TextInput style={styles.textinput91}
                                        placeholder='Ask a question?'
                                        placeholderTextColor='gray'>              
                                    </TextInput>

                                    </View >


                                    <View style={{width:"18%",height:"100%", backgroundColor:'#28394f',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                        <View style={{width:"80%",height:"55%", backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                        <Text style={{color:'black',marginRight:2,fontSize:12}}>Post</Text>
                                       
                                        </View >
                                       
                                    </View >



                                </View >




                            </View >

                            </View>
                            <View style={{width:"100%",height:"50%", backgroundColor:'#0a192e',marginBottom:10,alignItems:'center',justifyContent:'center'}}>
                            <View style={{width:"90%",height:"80%", backgroundColor:'#0a192e',}}>
                                <View style={styles.enqbutton}>
                                < Icon name='whatsapp' size={18} color='#3bd955'/>
                                    <Text style={{color:'#3bd955', fontSize:15, fontWeight:'500',marginLeft:10}}>
                                        Chat with teacher
                                    </Text>
                                </View>

                            </View >

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
    flex: 1
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'white',
    
    
  },

  maincontainer: {
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
    height:220,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
    
    
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
  circle:{
    width:50,
    height:50,
    backgroundColor:'white',
    borderRadius:50,
    
    
    alignItems:'center',
    justifyContent:'center'
  },
  robert:{
    height:'97%',
    width:'97%',
    borderRadius:50,  
    
    
  },
  textinput91:{
    width:'95%',
    height:'95%',
    backgroundColor:'#28394f',    
    borderRadius:5,
    flexDirection:'row',
    paddingLeft:15,
    
  },
  enqbutton:{
    width:'100%',
    height:'100%',
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',    
    borderRadius:5,
    borderColor:'#3bd955',
    borderWidth:1,
    flexDirection:'row'
    
  },
  

})