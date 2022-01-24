import React, {Component} from "react"
import {  
  StyleSheet,
  Image,
  Text,  
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions  
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Onboarding from 'react-native-onboarding-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const {height,width}=Dimensions.get('window')

const Done =({...props})=>(
  <TouchableOpacity
    style={{marginHorizontal:20}}
    {...props}>
      <Text style={{color:'black', fontSize:18,fontWeight:'bold'}}>Done</Text>
    
  </TouchableOpacity>
)

const Skip =({...props})=>(
  <TouchableOpacity
    style={{marginHorizontal:40}}
    {...props}>
     
    
  </TouchableOpacity>
)

const Next =({...props})=>(
  <TouchableHighlight style={styles.button}
  
                underlayColor='transparent'
                {...props}
                >
                <Text>
                    < Icon name='arrowright' size={25} color='white'/>
                </Text>
            </TouchableHighlight>
)
export default class AppTour4 extends Component {

  
  

  render(){
    return(
      <KeyboardAwareScrollView style= {styles.keyboard}>
        <View style={{alignItems:'center',height:height}}>
          <View style={styles.container}>
        
        <Onboarding 
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          onSkip={()=>this.props.navigation.navigate('MyDrawer')}
          onDone={()=>this.props.navigation.navigate('MyDrawer')}
              pages={[
              {
              backgroundColor: '#fff',
              image:<Image source={require('../assets/bg.jpg')}
              style={styles.image1}>
              </Image>,
              title: <Text style={{fontSize:30,color:'black',marginTop:-50}}>Learn as you go</Text>,
              subtitle: 'Download the stockpile app and master the market with our mini-lesson.',
              },
              {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/bg.jpg')}
                style={styles.image1}>
                </Image>,
                title:<Text style={{fontSize:30,color:'black',marginTop:-50}}>Kids and teens</Text>,
                subtitle: 'Kids and teens can track their stocks 24/7and place trades that you approve.',
              },
              {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/bg.jpg')}
                style={styles.image1}>
                </Image>,
                title:<Text style={{fontSize:30,color:'black',marginTop:-50}}>Full screen page</Text>,
                subtitle: 'pages can be full screen as well. any amount you want.',
              },

            

              
             
        ]}/>
        </View>
       </View> 
     </KeyboardAwareScrollView>   
         
    )
  }
}

const styles= StyleSheet.create({
  keyboard: {    
    flex:1,
     
    
  },  
  container: {
    height:'97%',
    width: '100%', 
  },

  image1:{
    
    height:450,
    width:'75%',  
    marginBottom:50  
    
  },
  button:{
    width:60,
    height:60,
    backgroundColor:'#3bd955',
    alignItems:'center',
    justifyContent:'center',  
    borderRadius:5
  }
})