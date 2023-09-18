import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Button from "../components/Button";
import InputText from "../components/InputText";
import Footer from "../components/Footer";
import firebase from "../firebase/Firebase";
export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
 

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = () => {
    // Check for empty fields
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Please enter your email, password and confirm password');
      return;
    }

    // Check for valid email
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    // Check for valid password
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    // Check for matching passwords
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Sign up with Firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Account Created Successfull , Please go to Login page to signin')
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.aunthenticationContainer}>
          <Text style={styles.signInText}>Sign Up</Text>

          <View style={{ marginTop: RFValue(20) }}>
            <InputText
              onChangeText={setEmail}
              value={email}
              placeholder="Enter Email"
            />
            <InputText
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              placeholder="Enter Password"
            />
            <InputText
              onChangeText={setconfirmPassword}
              value={confirmPassword}
              secureTextEntry={true}
              placeholder="Re-enter Password"
            />
          </View>
          {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>

        <View style={styles.buttonContainer}>
          <Button
           onpress={handleSignUp}
            colortext="#fff"
            title="Sign In"
            backcolor="#D35400"
          />
        </View>

        <View style={{ marginTop: Dimensions.get("window").height / 8 }}>
          {/* Reuseable Footer Component */}
          <Footer />
        </View>
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
    marginTop: RFValue(15),
  },
  socialLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: RFValue(30),
  },

  signInText: {
    fontSize: RFValue(22),
    fontFamily: "Bold",
    color: "#000",
    marginHorizontal: RFValue(18),
  },

  aunthenticationContainer: {
    marginTop: Dimensions.get("window").height / 5,
  },
  forgotpassword: {
    fontSize: RFValue(13),
    fontFamily: "Regular",
    color: "#34495E",
    alignSelf: "flex-end",
    marginRight: RFValue(20),
  },
  error: {
    color: "tomato",
    fontSize: RFValue(10),
    alignSelf: "flex-end",
    marginRight: 30,
  },
});
