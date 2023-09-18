import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Button from "../components/Button";
import InputText from "../components/InputText";
import Footer from "../components/Footer";

import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";

import firebase from "../firebase/Firebase";

const WIDTH = Dimensions.get("window").width;

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [userInfo, setUserInfo] = useState();
  const [auth, setAuth] = useState();
  const [requireRefresh, setRequireRefresh] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "1011549589848-1t3f1t4up68k0rk3odiccpejn6pmhoq9.apps.googleusercontent.com",
    iosClientId:
      "1011549589848-fcme68cch2mq4k0fode3d73ebigeas7l.apps.googleusercontent.com",
    expoClientId:
      "1011549589848-mnt5nt5vuefj2n21ufsfig54tr4s6vfp.apps.googleusercontent.com",
  });

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      setAuth(response.authentication);
      navigation.navigate("tabs");
      const persistAuth = async () => {
        await AsyncStorage.setItem(
          "auth",
          JSON.stringify(response.authentication)
        );
      };
      persistAuth();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue != null) {
        const authFromJson = JSON.parse(jsonValue);
        setAuth(authFromJson);
        console.log(authFromJson);

        setRequireRefresh(
          !AuthSession.TokenResponse.isTokenFresh({
            expiresIn: authFromJson.expiresIn,
            issuedAt: authFromJson.issuedAt,
            
          })
        );
      }
    };
    getPersistedAuth();
  }, []);

  // const getUserData = async () => {
  //   let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //     headers: { Authorization: `Bearer ${auth.accessToken}` }
  //   });

  //   userInfoResponse.json().then(data => {
  //     console.log(data);
  //     setUserInfo(data);
  //   });
  // };

  // const showUserData = () => {
  //   if (userInfo) {
  //     return (
  //       <View style={styles.userInfo}>
  //         <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
  //         <Text>Welcome {userInfo.name}</Text>
  //         <Text>{userInfo.email}</Text>
  //       </View>
  //     );
  //   }
  // };

  // const getClientId = () => {
  //   if (Platform.OS === "ios") {
  //     return "1011549589848-fcme68cch2mq4k0fode3d73ebigeas7l.apps.googleusercontent.com";
  //   } else if (Platform.OS === "android") {
  //     return "1011549589848-1t3f1t4up68k0rk3odiccpejn6pmhoq9.apps.googleusercontent.com";
  //   } else {
  //     console.log("Invalid platform - not handled");
  //   }
  // }

  // const refreshToken = async () => {
  //   const clientId = getClientId();
  //   console.log(auth);
  //   const tokenResult = await AuthSession.refreshAsync({
  //     clientId: clientId,
  //     refreshToken: auth.refreshToken
  //   }, {
  //     tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token"
  //   });

  //   tokenResult.refreshToken = auth.refreshToken;

  //   setAuth(tokenResult);
  //   await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
  //   setRequireRefresh(false);
  // };

  // if (requireRefresh) {
  //   return (
  //     <View style={styles.container}>
  //       <Text

  //       style={{marginTop:100,}}
  //       >Token requires refresh...</Text>
  //       <Text
  //        onPress={refreshToken}
  //       style={{fontWeight:"bold",
  //     alignSelf:'center'
  //     }}
  //       >Refresh Token</Text>

  //     </View>
  //   )
  // }

  const logout = async () => {
    await AuthSession.revokeAsync(
      {
        token: auth.accessToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      }
    );

    setAuth(undefined);
    setUserInfo(undefined);
    await AsyncStorage.removeItem("auth");
  };


  
  // Sign in With Email and Password with Firebase database
  const handleSignIn = () => {
    // Check for empty fields
    if (!email || !password) {
      setErrorMessage("Please enter your email and password");
      return;
    }

    // Check for valid email
    if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    // Check for valid password
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    // Sign in with Firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("tabs");
      })
      .catch((error) => {
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
          <Text style={styles.signInText}>Sign In</Text>

          <View style={{ marginTop: RFValue(20) }}>
            {/* Reuseable Textinput */}

            <InputText
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              secureTextEntry={false}
              autoCapitalize="none"
            />

            <InputText
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
          {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>

        <View style={styles.buttonContainer}>
          {/* Reuse-able Button */}
          <Button
            onpress={handleSignIn}
            colortext="#fff"
            title="Sign In"
            backcolor="#D35400"
          />

          <TouchableOpacity>
            <Text style={styles.forgotpassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* {showUserData()} */}
        <TouchableOpacity
          onPress={() => promptAsync({ showInRecents: true,useProxy: true, })}
          style={{
            width: WIDTH - RFValue(50),
            height: RFValue(45),
            backgroundColor: "powderblue",
            borderRadius: 30,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <AntDesign name="google" size={24} color="black" />
          <Text style={{ color: "#000", fontWeight: "bold" }}> Google</Text>
        </TouchableOpacity>

        {/* {auth ? (
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 50,
            }}
            onPress={logout}
          >
            Google Logout
          </Text>
        ) : undefined} */}

        <View style={{ marginTop: Dimensions.get("window").height / 7 }}>
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
    marginTop: RFValue(10),
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