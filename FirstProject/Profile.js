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
  Dimensions
  
  
} from 'react-native'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
const {height,width}=Dimensions.get('window')


export default class Profile extends Component {

  

  render(){
    return(
        <ScrollView>
        <View style={styles.maincontainer}>
          <View style={styles.subcontainer}>
                    <View style={styles.subcontainer1}>
                      <View style={{alignItems:'center',backgroundColor:'#0a192e'}}>
                        <View style={{flexDirection:'row',marginTop:55,marginLeft:10,backgroundColor:'#0a192e',justifyContent:'space-between',width:'90%'}}>                      
                          <View style={{backgroundColor:'#0a192e',height:'100%',width:'13%'}}>
                          </View>
                          <View style={{backgroundColor:'#0a192e'}}>
                          <Text style={{color:'white', fontSize:20, fontWeight:'bold',marginTop:3,marginLeft:10}}>Profile</Text>
                          </View>

                          <View style={{flexDirection:'row'}}>
                          <TouchableHighlight style={styles.button1}> 
                            <Icon1 name='bells' size={20} color='white'/>
                          </TouchableHighlight>

                          <TouchableHighlight style={styles.button}
                            underlayColor='transparent'
                            onPress={()=>this.props.navigation.navigate('Home')}>               
                            < Icon1 name='appstore1' size={12} color='#3bd955'/>                
                          </TouchableHighlight>
                          </View>
                        </View> 
                      </View>
                    </View>

                    <View style={styles.subcontainer2}>
                      <View style={{flexDirection:'row'}}>
                        <View style={styles.circle}>
                          <Image source={require('./assets/robert.jpg')} style={styles.image1}>
                          </Image>
                        </View>                 
                        <View>
                          <Text style={{fontSize:16,color:'black',marginLeft:15,marginTop:45}}>Robert</Text>
                          <Text style={{fontSize:12,color:'black',marginLeft:15,marginTop:2}}>ID: 1234</Text>
                        </View>
                      </View>
                      <Text style={{fontSize:16,color:'black',marginLeft:28,marginTop:25}}>Personal info</Text>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:20}}></View>

                      <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View>
                        <Text style={{fontSize:14,color:'gray',marginTop:5}}>Account settings</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:14,color:'black',marginTop:5}}>Robert</Text>
                        </View>
                      </View>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:10}}></View>
                      <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View>
                        <Text style={{fontSize:14,color:'gray',marginTop:5}}>Email</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:14,color:'black',marginTop:5}}>robert@gmail.com</Text>
                        </View>
                      </View>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:10}}></View>
                      <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View>
                        <Text style={{fontSize:14,color:'gray',marginTop:5}}>Number</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:14,color:'black',marginTop:5}}>8452554745</Text>
                        </View>
                      </View>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:10}}></View>
                        <Text style={{fontSize:16,color:'black',marginLeft:25,marginTop:25}}>Course info</Text>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:25}}></View>


                      <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View>
                        <Text style={{fontSize:14,color:'gray',marginTop:5}}>Center</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:14,color:'black',marginTop:5}}>Inmakes edu</Text>
                        </View>
                      </View>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:10}}></View>
                      <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View>
                        <Text style={{fontSize:14,color:'gray',marginTop:5}}>Course</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:14,color:'black',marginTop:5}}>Plus two science</Text>
                        </View>
                      </View>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:10}}></View>
                      <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View>
                        <Text style={{fontSize:14,color:'gray',marginTop:5}}>Payment Status</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:14,color:'black',marginTop:5}}>Free</Text>
                        </View>
                      </View>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:10}}></View>
                      <View style={{flexDirection:'row',width:'100%',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:10}}>
                        <View>
                        <Text style={{fontSize:14,color:'gray',marginTop:5}}>Expiry date</Text>
                        </View>
                        <View>
                        <Text style={{fontSize:14,color:'black',marginTop:5}}>Not applicable</Text>
                        </View>
                      </View>
                      <View style={{width:'100%',height:1,backgroundColor:'#dfeded',marginTop:10}}></View>



                    </View>

                    <View style={styles.subcontainer3}>
                      <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={styles.buttonPayment}
                        underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Home')}>               
                        < Icon2 name='payment' size={18} color='white'/>                                
                        </TouchableHighlight>
                        <Text style={{fontSize:16,color:'white',marginLeft:20,marginTop:26, fontWeight:'700'}}>Custom payment</Text>
                      </View>  
                        <View style={{marginTop:29}}>
                          < Icon2 name='arrow-forward-ios' size={15} color='white'/>
                        </View>
                    </View>
                    <View style={styles.subcontainer3}>
                      <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={styles.buttonPayment}
                        underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Home')}>               
                        < Icon3 name='forward' size={18} color='white'/>                                
                        </TouchableHighlight>
                        <Text style={{fontSize:16,color:'white',marginLeft:20,marginTop:26, fontWeight:'700'}}>Referrals</Text>
                      </View>  
                        <View style={{marginTop:29}}>
                          < Icon2 name='arrow-forward-ios' size={15} color='white'/>
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
    backgroundColor:'white',
    height:height
  },

  subcontainer: {
    height: '110%',
    width: '100%',
    alignItems:'center',
    backgroundColor: 'white'
  },

  subcontainer1: {
    height: '35%',
    width: '100%',
    backgroundColor:'#0a192e'   
  },
  subcontainer2: {
    height: '60%',
    width: '90%',
    backgroundColor:'white',
    borderRadius:7,
    marginTop:-170,
    elevation:8
  },

  subcontainer3: {
    height: '9%',
    width: '90%',    
    borderRadius:7,
    marginTop:5,
    backgroundColor:'#3bd955',
    borderRadius:10,
    marginTop:10,
    elevation:8,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },

  subcontainer4: {
    height: '9%',
    width: '90%',
    backgroundColor:'pink',
    borderRadius:7,
    marginTop:5,
    backgroundColor:'#3bd955',
    borderRadius:10,
    marginTop:10,
    elevation:8,
    flexDirection:'row',
  },

 
  button:{
    width:35,
    height:35,
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',    
    borderRadius:5,
    borderColor:'white',
    borderWidth:1,
    
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
  button1:{
    width:35,
    height:35,
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',
    
     
       
  },

  buttonPayment:{
    width:35,
    height:35,
    backgroundColor:'#88f294',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius:5,
    borderColor:'#88f294',
    borderWidth:1,
    marginTop:21
    
  },

ImageNameId:{
  width:'85%',
  height:'60%',    
  backgroundColor:'white',
  borderRadius:10,
  marginTop:-180
},
circle:{
  width:70,
  height:70,
  backgroundColor:'#3bd955',
  borderRadius:50,
  marginTop:30,
  marginLeft:25,
  alignItems:'center',
  justifyContent:'center'
},
image1:{
  height:'95%',
  width:'95%',
  borderRadius:50,  
  
  
},


  

})