import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default class DrawerContent extends Component {

  

  

  render(){
    return(
      <KeyboardAwareScrollView  style={styles.container}
      behavior="height">
          <View style={styles.profileView}>

          <TouchableHighlight style={styles.button}
                underlayColor='transparent'
                onPress={()=>this.props.navigation.navigate('Home')}>
                <Text >
                < Icon name='close' size={20} color='#3bd955'/>
                </Text>
          </TouchableHighlight>

          <View style={styles.ImageNameId}>
               
            <View style={styles.circle}>
              <Image source={require('../../assets/robert.jpg')} style={styles.image1}>
              </Image>
              </View>
                <View>
                  <Text style={{fontSize:16,color:'white',marginLeft:15,marginTop:45}}>Robert</Text>
                  <Text style={{fontSize:12,color:'gray',marginLeft:15,marginTop:2}}>ID: 1234</Text>
                </View>

                <TouchableHighlight style={styles.buttonprofile}
                underlayColor='transparent'>
                <Text >
                < Icon2 name='arrow-forward-ios' size={15} color='#3bd955'/>
                </Text>
                </TouchableHighlight>

              </View>  

            </View>

            <View style={styles.drawermenu}>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='#3bd955'/>
                    <Text style={styles.drawertext}>Exam corner</Text>
                </View>
                <View style={{marginLeft:32}}><Text style={{color:'gray', fontSize:9}}>____________________________________________________</Text></View>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='#3bd955'/>
                    <Text style={styles.drawertext}>Subscriptions</Text>
                </View>
                <View style={{marginLeft:32}}><Text style={{color:'gray', fontSize:9}}>____________________________________________________</Text></View>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='#3bd955'/>
                    <Text style={styles.drawertext}>Analytics</Text>
                </View>
                <View style={{marginLeft:32}}><Text style={{color:'gray', fontSize:9}}>____________________________________________________</Text></View>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='#3bd955'/>
                    <Text style={styles.drawertext}>Downloads</Text>
                </View>
                <View style={{marginLeft:32}}><Text style={{color:'gray', fontSize:9}}>____________________________________________________</Text></View>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='#3bd955'/>
                    <Text style={styles.drawertext}>Notifications</Text>
                </View>
                <View style={{marginLeft:32}}><Text style={{color:'gray', fontSize:9}}>____________________________________________________</Text></View>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='#3bd955'/>
                    <Text style={styles.drawertext}>Referrals</Text>
                </View>
                <View style={{marginLeft:32}}><Text style={{color:'gray', fontSize:9}}>____________________________________________________</Text></View>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='#3bd955'/>
                    <Text style={styles.drawertext}>Share app</Text>
                </View>
                <View style={{marginLeft:32}}><Text style={{color:'gray', fontSize:9}}>____________________________________________________</Text></View>
                <View style={styles.drawerIconwtext}>
                    < Icon name='square-outline' size={40} color='red'/>
                    <Text style={{color:'red',marginTop:10, marginLeft:13}}>Logout</Text>
                </View>
                <View style={{backgroundColor:'#0a192e',height:100}}>
                <TouchableHighlight style={styles.enqbutton}>
                    <Text style={{color:'#3bd955', fontSize:15, fontWeight:'700'}}>
                        Enquire now
                    </Text>
                </TouchableHighlight>
                </View>
          </View> 
          </KeyboardAwareScrollView>
      
    )
  }
}

const styles= StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#0a192e',  

  },

  drawermenu:{

    backgroundColor:'#0a192e',
    width:'100%',
    height:'100%',
    

  },
  profileView:{
    height:'27%',
    width:'100%',
    backgroundColor:'#0a192e'

  },

  drawertext:{
      fontSize:15,
      color:'white',
      marginLeft:13,
      marginTop:10
  },
  drawerIconwtext:{
      flexDirection:"row",
      marginLeft:30,
      marginTop:5

  },
  enqbutton:{
    width:'55%',
    height:45,
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
    marginTop:20,
    borderRadius:5,
    borderColor:'#3bd955',
    borderWidth:2
    
  },
  button:{
    width:35,
    height:35,
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',  
    marginLeft:30,
    borderRadius:5,
    borderColor:'gray',
    borderWidth:1,
    marginTop:30
  },
  ImageNameId:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    backgroundColor:'#0a192e'

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

  buttonprofile:{
    width:35,
    height:35,
    backgroundColor:'#0a192e',
    alignItems:'center',
    justifyContent:'center',  
    marginLeft:30,    
    borderColor:'#0a192e',
    borderWidth:1,
    marginTop:45
  }



})