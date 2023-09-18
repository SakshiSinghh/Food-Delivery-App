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
export default function PopularCard(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onpress}
        activeOpacity={0.7}
        style={styles.flatlistItemContainer}
      >
        <Image
          style={{
            width: RFValue(12),
            height: RFValue(8.44),
            marginTop: RFValue(25),
            marginLeft: RFValue(20),
          }}
          source={require("../assets/icons/crown.png")}
        />

        <View style={styles.pizzanameContainer}>
          <View style={{ marginLeft: RFValue(20) }}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.weight}</Text>
          </View>

          <Image
            style={styles.largePizza}
            source={require("../assets/icons/pizza1.png")}
          />
        </View>

        <View style={styles.foodFooterContainer}>
          <View style={styles.plusBox}>
            <Image
              style={{ width: RFValue(10), height: RFValue(10) }}
              source={require("../assets/icons/plus.png")}
            />
          </View>

          <View style={styles.reviewContainer}>
            <Image
              style={{
                width: RFValue(10),
                height: RFValue(9.63),
                marginRight: RFValue(5),
              }}
              source={require("../assets/icons/starempty.png")}
            />

            <Text style={styles.ratingText}>5.0</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlistItemContainer: {
    width: WIDTH - RFValue(50),
    height: RFValue(160),
    borderRadius: 25,
    backgroundColor: "#fff",
    marginLeft: RFValue(20),
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
borderWidth:1,
borderColor:'lightgray',
elevation: 5,
    marginBottom: RFValue(12),
    overflow: "hidden",
  },
  pizzanameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  largePizza: {
    width: RFValue(150),
    height: RFValue(75),
    left: RFValue(20),
  },
  title: {
    color: "#313234",
    fontFamily: "Medium",
    fontSize: RFValue(13),
  },
  subtitle: {
    color: "#C4C4C4",
    fontFamily: "Medium",
    fontSize: RFValue(11),
  },
  plusBox: {
    width: RFValue(85),
    height: RFValue(50),
    backgroundColor: "#F5CA48",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 25,
    marginTop: RFValue(3),
  },
  ratingText: {
    color: "#000",
    fontFamily: "Medium",
    fontSize: RFValue(11),
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFValue(20),
  },
  foodFooterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
