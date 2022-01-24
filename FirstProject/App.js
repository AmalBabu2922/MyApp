import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Icon1 from 'react-native-vector-icons/Ionicons' 
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Octicons'
import Icon4 from 'react-native-vector-icons/Entypo'

import Register from './src/Register'
import Verification from "./src/Verification";
import StudentDetails from "./src/StudentDetails";
import SchoolBoard from "./src/SchoolBoard";
import AppTour4 from "./src/AppTour4";
import Home from "./src/Home";
import Profile from "./Profile";

import DrawerContent from "./src/Drawer/DrawerContent";
import Course from "./src/Course";
import Chapter from "./src/Chapter";
import Exams from "./Exams";
import Recent from "./Recent";
import Contact from "./Contact";
import SubjectCard from "./SubjectCard";
import VideoPage from "./VideoPage";


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Register'
        component={Register}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='Verification'
        component={Verification}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='StudentDetails'
        component={StudentDetails}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='SchoolBoard'
        component={SchoolBoard}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='AppTour4'
        component={AppTour4}
        options={{headerShown:false}}
      />
          

      <Stack.Screen
        name='MyDrawer'
        component={MyDrawer}
        options={{headerShown:false}}/>      
    
 
        
          

      
    </Stack.Navigator>
  )
}



function MyTab(){
  return(

  
    
  <Tabs.Navigator    
   
    screenOptions={{ headerShown: false }} >
        
    <Tabs.Screen name='Home' component={Home} 
      
      options={{tabBarIcon:({focused})=> focused ?
      <Icon4 name='home'size={28} color='#3bd955'  /> : <Icon4 name='home'size={20} color='gray'/>   }}/>

    <Tabs.Screen name='Recent' component={Recent}
      options={{tabBarIcon:({focused})=>focused ?
      <Icon1 name='play'size={28} color='#3bd955'/> : <Icon1 name='play'size={20} color='gray'/>   }}/>

    <Tabs.Screen name='Exams' component={Exams}
      options={{tabBarIcon:({focused})=>focused ?
      <Icon3 name='note'size={28} color='#3bd955'/> : <Icon3 name='note'size={20} color='gray'/>   }}/>

    <Tabs.Screen name='Profile' component={Profile}
      options={{tabBarIcon:({focused})=>focused?
      <Icon1 name='person'size={28}color='#3bd955'/> : <Icon1 name='person'size={20}color='gray'/> }}/>

    <Tabs.Screen name='Contact' component={Contact}
      options={{tabBarIcon:({focused})=>focused?
      <Icon2 name='envelope-o'size={28}color='#3bd955'/> : <Icon2 name='envelope-o'size={20}color='gray'/> }}/>
    


  </Tabs.Navigator>
  
  
  )
}







function MyDrawer(navigation){
  return(
    <Drawer.Navigator
      drawerContent={(props)=> <DrawerContent {...props}/>}>
        
        <Drawer.Screen
          options={{headerShown:false}}
          name='MyTab'
          component={MyTab}/>

        <Drawer.Screen
          options={{headerShown:false}}
          name='Course'
          component={Course}/>       

         
        <Drawer.Screen
          options={{headerShown:false}}
          name='Chapter'
          component={Chapter}/>
        <Drawer.Screen
          options={{headerShown:false}}
          name='VideoPage'
          component={VideoPage}/>    



      </Drawer.Navigator>
  )
}







export default function App(){
  return(

    
    <NavigationContainer>
      
      <MyStack>

      </MyStack>
      
      
      
    </NavigationContainer>
  )
}



