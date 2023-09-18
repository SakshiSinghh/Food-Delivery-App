import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
const WIDTH = Dimensions.get("window").width;
export default function InputText(props) {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: WIDTH - RFValue(35),
    height: RFValue(50),
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#ECF0F1",
    paddingHorizontal: RFValue(28),
    color: "#000",
    fontFamily: "Regular",
    marginBottom: RFValue(20),
  },
});
