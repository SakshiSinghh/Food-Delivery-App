import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Button from "../components/Button";
import Footer from "../components/Footer";

const WIDTH = Dimensions.get("window").width;
export default function OnBoardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.bigBurger}
          source={require("../assets/images/bigburger.png")}
        />

        <View style={styles.buttonContainer}>
          {/* Reuseable buttons */}
          <Button
            onpress={() => navigation.navigate("SignInScreen")}
            colortext="#fff"
            title="Sign In"
            backcolor="#D35400"
          />

          <Button
            onpress={() => navigation.navigate("SignupScreen")}
            colortext="#000"
            title="Sign Up"
            backcolor="#ECF0F1"
          />
        </View>
        {/* Reuseable Footer Component on first three screens */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bigBurger: {
    width: RFValue(270),
    height: RFValue(270),
    alignSelf: "center",
    marginTop: RFValue(55),
  },

  buttonContainer: {
    marginTop: RFValue(80),
  },

  socialLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: RFValue(30),
  },
});
