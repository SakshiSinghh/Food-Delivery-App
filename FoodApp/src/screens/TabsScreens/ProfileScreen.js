import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import firebase from "../../firebase/Firebase";
const WIDTH = Dimensions.get("window").width;

import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";

export default function ProfileScreen({ navigation }) {
  const logout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate("SignInScreen");
    } catch (error) {
      console.log(error);
    }
  };

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

  const logout2 = async () => {
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
    navigation.navigate("SignInScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.profileImage}
          source={require("../../assets/images/profile.png")}
        />

        <View style={{ marginTop: RFValue(35) }}>
          <TouchableOpacity style={styles.profileListItems}>
            <Text style={styles.itemtitle}>My Profile</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/chevron-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileListItems}>
            <Text style={styles.itemtitle}>Change Password</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/chevron-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileListItems}>
            <Text style={styles.itemtitle}>Payment Settings</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/chevron-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileListItems}>
            <Text style={styles.itemtitle}>My Voucher</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/chevron-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileListItems}>
            <Text style={styles.itemtitle}>Notification</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/chevron-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileListItems}>
            <Text style={styles.itemtitle}>About Us</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/chevron-right.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileListItems}>
            <Text style={styles.itemtitle}>Contact Us</Text>

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/chevron-right.png")}
            />
          </TouchableOpacity>
        </View>
        {auth ? (
          <Text
            style={{
              color: "tomato",
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 20,
            }}
            onPress={logout2}
          >
            Google Signout
          </Text>
        ) : undefined}
      </ScrollView>

      <TouchableOpacity
        onPress={logout}
        style={{ ...styles.button, backgroundColor: "#ECF0F1" }}
      >
        <Text style={{ ...styles.buttonText, color: "#000" }}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: RFValue(130),
    height: RFValue(130),

    alignSelf: "center",
    marginTop: RFValue(60),
  },
  profileListItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(30),
    marginBottom: RFValue(20),
  },
  itemtitle: {
    color: "#000",
    fontFamily: "Medium",
    fontSize: RFValue(13),
  },
  button: {
    width: WIDTH - RFValue(35),
    height: RFValue(50),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#D35400",
    marginBottom: RFValue(20),
    position: "absolute",
    bottom: RFValue(20),
  },
  buttonText: {
    color: "#fff",
    fontSize: RFValue(17),
    fontFamily: "Bold",
  },
});
