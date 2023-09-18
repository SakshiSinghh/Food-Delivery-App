import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH= Dimensions.get('window').width
export default function Button(props) {
  return (
    <TouchableOpacity 
    onPress={props.onpress}
    style={{...styles.container,backgroundColor:props.backcolor}}>
      <Text
      style={{...styles.btnText,color:props.colortext}}
      >{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    container:
    {
        width: WIDTH - RFValue(35),
        height: RFValue(50),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#D35400",
        marginBottom: RFValue(20),
    


    },
    btnText:
    { color: "#fff",
    fontSize: RFValue(16),
    fontFamily: "Bold",

    }

})