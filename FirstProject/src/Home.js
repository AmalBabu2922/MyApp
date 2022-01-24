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
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'


const {height,width}=Dimensions.get('window')



export default class Home extends Component {

  

  render(){
    return(
      <ScrollView style={styles.keyboard}>
        <View style={styles.maincontainer}>
          
         <View style={styles.subcontainer}>   

          <View style={styles.titleView}>
              <View style={styles.flexstyle}>
                <View style={{flexDirection:'row'}}>
                  <TouchableHighlight style={styles.button}
                  underlayColor='transparent'
                  onPress={()=>this.props.navigation.openDrawer()}>
                  <Text >
                  < Icon1 name='appstore1' size={15} color='#3bd955'/>
                  </Text>
                  </TouchableHighlight>  

                  <View style={{height:70,width:140,backgroundColor:'white'}}>
                    <Image source={require('../assets/amal.jpg')} style={styles.image1}></Image>
                  </View>
                </View>
              

                <View>
                  <View style={styles.classBox}>
                    <View style={styles.classBoxItems}>
                      < Icon name='circle' size={20} color='green'/>
                      <Text style={{color:'green',fontSize:11, marginLeft:7,marginTop:2}}>Classes</Text>
                    </View>
                  </View>
                </View>

              </View>

          </View>

          <View style={{marginTop:-15,width:'100%',height:'0.1%',backgroundColor:'#dfeded'}}>
           
          </View>

          <View style={{width:'90%'}}>
            <Text style={{color:'black', fontSize:12,marginTop:10}}>Goodmorning</Text>
            <Text style={{color:'black', fontSize:22, fontWeight:'bold'}}>Robert</Text>
          </View>

          <View style={{flexDirection:'row', width:'90%',height:'12%', backgroundColor:'#0a192e',borderRadius:7,marginTop:10,justifyContent:'space-between',paddingHorizontal:15}}>
          
            <View>
            <Text style={{color:'white', fontSize:12,marginTop:15}}>Class</Text>
            <Text style={{color:'white', fontSize:17}}>Plus two science</Text>
            </View>
            <View style={{marginTop:23}}> 
                    < Icon2 name='keyboard-arrow-down' size={25} color='white'/> 
            </View> 
            
            
          </View>

          
          <View style={{flexDirection:'row',backgroundColor:'white',height:'12%',width:'90%'}}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

              <TouchableHighlight style={styles.subjectBox1} >
                <View style={styles.classBoxItems}>
                  < Icon name='circle' size={22} color='#3bd955'
                    onPress={()=>this.props.navigation.navigate('Course')}/>
                  <Text onPress={()=>this.props.navigation.navigate('Course')}
                  style={{color:'black',fontSize:12, marginLeft:7,marginTop:2}}>Biology</Text>
                </View>
             </TouchableHighlight>

              <View style={styles.subjectBox}>
                <View style={styles.classBoxItems}>
                  <Icon name='circle' size={22} color='#3bd955'/>
                  <Text style={{color:'black',fontSize:12, marginLeft:7,marginTop:2}}>Physics</Text>
                </View>
              </View>

              <View style={styles.subjectBox}>
                <View style={styles.classBoxItems}>
                  < Icon name='circle' size={22} color='#3bd955'/>
                  <Text style={{color:'black',fontSize:12, marginLeft:7,marginTop:2}}>Chemistry</Text>
                </View>
              </View>

              <View style={styles.subjectBox}>
                <View style={styles.classBoxItems}>
                  < Icon name='circle' size={22} color='#3bd955'/>
                  <Text style={{color:'black',fontSize:12, marginLeft:7,marginTop:2}}>Maths</Text>
                </View>
              </View>
              <View style={styles.subjectBox}>
                <View style={styles.classBoxItems}>
                  < Icon name='circle' size={22} color='#3bd955'/>
                  <Text style={{color:'black',fontSize:12, marginLeft:7,marginTop:2}}>English</Text>
                </View>
              </View>
              <View style={styles.subjectBox}>
                <View style={styles.classBoxItems}>
                  < Icon name='circle' size={22} color='#3bd955'/>
                  <Text style={{color:'black',fontSize:12, marginLeft:7,marginTop:2}}>IT</Text>
                </View>
              </View>

            </ScrollView>

          </View>
          <View style={{width:'90%',marginTop:2}}>
          <Text style={{color:'black',fontSize:15}}>Recent courses</Text>
          </View>
          <View style={{flexDirection:'row',width:'90%'}}>

            <ScrollView horizontal={true}>
              <View style={styles.videoBox1}>
                <ImageBackground source={require('../assets/newron.jpg')} style={styles.videoImage}>
                  <View style={styles.play}>
                    <View style={styles.classBoxItems}>
                      < Icon1 name='playcircleo' size={28} color='white'/>
                      <Text style={{color:'white',fontSize:15, marginLeft:10,marginTop:3,fontWeight:'bold'}}>Biology</Text>
                    </View>
                  </View>            
                </ImageBackground>              
              </View>

              <View style={styles.videoBox}>
                <ImageBackground source={require('../assets/chemical.jpg')} style={styles.videoImage}>
                  <View style={styles.play}>
                    <View style={styles.classBoxItems}>
                      < Icon1 name='playcircleo' size={28} color='white'/>
                      <Text style={{color:'white',fontSize:15, marginLeft:10,marginTop:3,fontWeight:'bold'}}>Chemistry</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.videoBox}>
                <ImageBackground source={require('../assets/phy.jpg')} style={styles.videoImage}>
                  <View style={styles.play}>
                    <View style={styles.classBoxItems}>
                      < Icon1 name='playcircleo' size={28} color='white'/>
                      <Text style={{color:'white',fontSize:15, marginLeft:10,marginTop:3,fontWeight:'bold'}}>physics</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </ScrollView>

          </View>

          <View style={{flexDirection:'row',width:'90%',height:'120%'}}>

            <ScrollView horizontal={true}>
              <View style={styles.classDetailsBox1}>
                  <View style={styles.round}></View>
                  <Text style={{color:'white',fontSize:15, marginLeft:40,marginTop:15,fontWeight:'bold'}}>Target live classes</Text>
                  
                  <View style={{width:'80%',height:'28%',marginLeft:20}}>
                    <Text style={{color:'#758996',fontSize:15, marginLeft:20,marginTop:5}}>Live classes by best teachers from learningHub to clear your doubts and to provide individual attention </Text>
                  </View>
                  <TouchableHighlight style={styles.bookclassButton}>
                    <Text style={{color:'white', fontSize:15, fontWeight:'700'}}>
                      Book a free class
                    </Text>
                  </TouchableHighlight>                 

              </View>

              <View style={styles.classDetailsBox}>
                  <View style={styles.round}></View>
                  <Text style={{color:'white',fontSize:15, marginLeft:40,marginTop:15,fontWeight:'bold'}}>Avail free online counselling session</Text>
                  
                  <View style={{width:'80%',height:'23%',marginLeft:20}}>
                    <Text style={{color:'#758996',fontSize:15, marginLeft:20,marginTop:5}}>By learningHub's career experts </Text>
                  </View>
                  <TouchableHighlight style={styles.bookclassButton}>
                    <Text style={{color:'white', fontSize:15, fontWeight:'700'}}>
                      Book a free class
                    </Text>
                  </TouchableHighlight>                 

              </View>

              <View style={styles.classDetailsBox}>
                  <View style={styles.round}></View>
                  <Text style={{color:'white',fontSize:15, marginLeft:40,marginTop:15,fontWeight:'bold'}}>Avail free online counselling session</Text>
                  
                  <View style={{width:'80%',height:'23%',marginLeft:20}}>
                    <Text style={{color:'#758996',fontSize:15, marginLeft:20,marginTop:5}}>By learningHub's career experts </Text>
                  </View>
                  <TouchableHighlight style={styles.bookclassButton}>
                    <Text style={{color:'white', fontSize:15, fontWeight:'700'}}>
                      Book a free class
                    </Text>
                  </TouchableHighlight>                 

              </View>

              <View style={styles.classDetailsBox}>
                  <View style={styles.round}></View>
                  <Text style={{color:'white',fontSize:15, marginLeft:40,marginTop:15,fontWeight:'bold'}}>Target live classes</Text>
                  
                  <View style={{width:'80%',height:'28%',marginLeft:20}}>
                    <Text style={{color:'#758996',fontSize:15, marginLeft:20,marginTop:5}}>Live classes by best teachers from learningHub to clear your doubts and to provide individual attention </Text>
                  </View>
                  <TouchableHighlight style={styles.bookclassButton}>
                    <Text style={{color:'white', fontSize:15, fontWeight:'700'}}>
                      Book a free class
                    </Text>
                  </TouchableHighlight>                 

              </View>

              <View style={styles.classDetailsBox}>
                  <View style={styles.round}></View>
                  <Text style={{color:'white',fontSize:15, marginLeft:40,marginTop:15,fontWeight:'bold'}}>Target live classes</Text>
                  
                  <View style={{width:'80%',height:'28%',marginLeft:20}}>
                    <Text style={{color:'#758996',fontSize:15, marginLeft:20,marginTop:5}}>Live classes by best teachers from learningHub to clear your doubts and to provide individual attention </Text>
                  </View>
                  <TouchableHighlight style={styles.bookclassButton}>
                    <Text style={{color:'white', fontSize:15, fontWeight:'700'}}>
                      Book a free class
                    </Text>
                  </TouchableHighlight>                 

              </View>

              
            </ScrollView>

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

  maincontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    height:height,

  },
  subcontainer: {
    height: '70%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  image1:{
    height:45,
    width:130,
    marginLeft:7
    
  },
  titleView:{
    width:'100%',
    marginTop:305,
    backgroundColor:'white',
    
  },
  button:{
    width:35,
    height:35,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',      
    borderRadius:5,
    borderColor:'gray',
    borderWidth:1,
    marginTop:8
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
    

  },
  classBoxItems:{
    flexDirection:'row',
    
  },
  subjectBox1:{
    width:95,
    height:40,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',  
    borderWidth:1,
    borderRadius:5,
    borderColor:'black',
    marginTop:25,
    

  },
  subjectBox:{
    width:95,
    height:40,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',  
    borderWidth:1,
    borderRadius:5,
    borderColor:'black',
    marginTop:25,
    marginLeft:10

  },

  

  videoBox1:{
    width:220,
    height:130,
    backgroundColor:'gray',
    marginTop:10,
    
  },
  videoBox:{
    width:220,
    height:130,
    backgroundColor:'gray',
    marginTop:10,
    marginLeft:20
  },


  videoImage:{
    width:220,
    height:130,
    
    
  },
  play:{
    width:95,
    height:45,
    marginTop:80,
    marginLeft:15,
    alignItems:'center',
    justifyContent:'center',
 
  },

  classDetailsBox1:{
    width:220,
    height:340,
    backgroundColor:'#012036',
    marginTop:25,
    
  },
  classDetailsBox:{
    width:220,
    height:340,
    backgroundColor:'#012036',
    marginTop:25,
    marginLeft:20
  },
  round:{
    width:100,
    height:100,
    backgroundColor:'#094570',
    borderRadius:100,
    marginLeft:60,
    marginTop:40
  },
  bookclassButton:{
    width:'75%',
    height:40,
    backgroundColor:'#3bd955',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
    marginTop:10,
    borderRadius:5
  },
  flexstyle:{
    flexDirection:'row', 
    justifyContent:'space-between',
    paddingHorizontal:30
  
  }
  

})