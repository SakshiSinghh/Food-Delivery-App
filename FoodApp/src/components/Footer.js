import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
const WIDTH = Dimensions.get("window").width;
export default function Footer() {
  return (
    <View>
      <View style={styles.orConnectwithContainer}>
        <View style={styles.seprator} />
        <Text style={styles.orConnectwithText}>Or connect with</Text>
      </View>
      <View style={styles.footerContainer}>
        <Image
          style={styles.footerImage}
          source={require("../assets/images/loginfood.png")}
        />
        <View style={styles.socialLoginContainer}>
          <Image
            style={styles.socialIcon}
            source={require("../assets/icons/facebook.png")}
          />
          <Image
            style={styles.socialIcon}
            source={require("../assets/icons/google.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerImage: {
    width: RFValue(180),
    height: RFValue(100),
    marginTop: RFValue(10),
  },
  socialLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: RFValue(30),
  },
  socialIcon: {
    width: RFValue(35),
    height: RFValue(35),
    marginRight: RFValue(13),
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  orConnectwithText: {
    fontSize: RFValue(12),
    color: "#34495E",
    fontFamily: "Regular",
    marginHorizontal: RFValue(5),
  },
  seprator: {
    width: WIDTH / 1.5,
    height: 1,
    backgroundColor: "#34495E",
    opacity: 0.3,
  },
  orConnectwithContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFValue(30),
  },
});
