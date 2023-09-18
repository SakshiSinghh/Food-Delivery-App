import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get("window").width;
export default function Categorie(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.foodItemContainer,
          backgroundColor: props.backcolor,
        }}
      >
        <Image style={styles.iconfood} source={props.topimage} />

        <Text style={styles.foodText}>{props.title}</Text>

        <Image style={styles.righticon} source={props.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  foodItemContainer: {
    padding: 5,
    width: WIDTH / 3.8,
    height: RFValue(160),
    borderRadius: 20,
    backgroundColor: "#F5CA48",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconfood: {
    width: RFValue(50),
    height: RFValue(50),
  },
  foodText: {
    fontSize: RFValue(13),
    color: "#313234",
    fontFamily: "Medium",
    marginTop: RFValue(5),
  },

  righticon: {
    width: RFValue(25),
    height: RFValue(25),
    marginTop: RFValue(15),
  },
});
