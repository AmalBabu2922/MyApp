import React from "react";
import {View, Text, StyleSheet,Dimensions} from 'react-native'

const ItemSeperator =({height, width}) =>{
    return <View style={{width, height}}/>
}

ItemSeperator.defaultProps={
    height:0,
    width:0
}

export default ItemSeperator