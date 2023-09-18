import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function LocationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backcontainer}
      >
        <Image
          style={{ width: RFValue(5), height: RFValue(8) }}
          source={require("../../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 1.3521,
          longitude: 103.8198,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 1.3521, longitude: 103.8198 }}
          image={require("../../assets/icons/marker.png")}
        />
        <Marker
          coordinate={{ latitude: 1.352, longitude: 102.8198 }}
          image={require("../../assets/icons/marker.png")}
        />
      </MapView>

      <View style={styles.footerContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingLeft: RFValue(20),
            paddingRight: RFValue(20),
            paddingBottom: 10,
          }}
        >
          <View style={styles.cardFooter}>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.cardTitle}>Prime Pizzeria</Text>
              <Image
                style={styles.stars}
                source={require("../../assets/images/star.png")}
              />
            </View>

            <Image
              style={{ width: RFValue(120), height: RFValue(120) }}
              source={require("../../assets/images/pizza.png")}
            />
          </View>
          <View style={styles.cardFooter}>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.cardTitle}>Plaza Pizzeria</Text>
              <Image
                style={styles.stars}
                source={require("../../assets/images/star.png")}
              />
            </View>

            <Image
              style={{ width: RFValue(120), height: RFValue(120) }}
              source={require("../../assets/images/pizza.png")}
            />
          </View>
          <View style={styles.cardFooter}>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.cardTitle}>Prime Pizzeria</Text>
              <Image
                style={styles.stars}
                source={require("../../assets/images/star.png")}
              />
            </View>

            <Image
              style={{ width: RFValue(120), height: RFValue(120) }}
              source={require("../../assets/images/pizza.png")}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: WIDTH,
    height: HEIGHT,
  },
  backcontainer: {
    width: RFValue(35),
    height: RFValue(35),
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#CDCDCD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    zIndex: 9999,
    marginLeft: RFValue(25),
    marginTop: RFValue(30),
  },

  footerContainer: {
    width: WIDTH,
    paddingVertical: 20,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
  },
  cardFooter: {
    width: WIDTH - RFValue(90),
    height: RFValue(130),
    padding: 5,
    borderRadius: 30,
    backgroundColor: "#E4723C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: RFValue(16),
  },
  cardTitle: {
    color: "#000",
    fontFamily: "Bold",
    fontSize: RFValue(18),
  },
  stars: {
    width: RFValue(130),
    height: RFValue(20),
  },
});
