import React from "react";
import {TouchableOpacity, Text, StyleSheet,Dimensions,TouchableHighlight} from 'react-native'

const {width} = Dimensions.get('screen')

const setWidth =(w) => (width/100) * w

const SubjectCard = ({subjectName})=>{
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.5}  onPress={()=>this.props.navigation.navigate('Course')} >
            
            <Text  style={styles.subjectText}>{subjectName}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'white',
        paddingVertical:8,
        elevation:3,
        marginVertical:2,
        width: setWidth(25)

    },
    subjectText:{
        color:'black'  
      },
})

export default SubjectCard