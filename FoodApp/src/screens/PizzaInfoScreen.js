import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

export default function PizzaInfoScreen({ navigation }) {

  
  const onPressPlaceOrder = () => {
    //function to make two option alert
    Alert.alert(
      //title
      "Order Info",
      //body
      `Order has been placed`,
      [
        { text: "OK", onPress: () => console.log("Yes Pressed") },
        {
          text: "Close",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backcontainer}
          >
            <Image
              style={{ width: RFValue(5), height: RFValue(8) }}
              source={require("../assets/icons/back.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              ...styles.backcontainer,
              borderWidth: 0,
              backgroundColor: "#F5CA48",
            }}
          >
            <Image
              style={{
                width: RFValue(5),
                height: RFValue(8),
                tintColor: "#fff",
              }}
              source={require("../assets/icons/starempty.png")}
            />
          </View>
        </View>

        <Text style={styles.title}>
          Primavera{"\n"}
          Pizza
        </Text>

        <Text style={styles.price}>$5.99</Text>

        <View style={styles.pizzaDetailContainer}>
          <View style={styles.pizzaDetailLeft}>
            <View style={{ marginBottom: RFValue(15) }}>
              <Text style={styles.sizetext}>size</Text>
              <Text style={styles.orignalsize}>Medium 14”</Text>
            </View>
            <View style={{ marginBottom: RFValue(15) }}>
              <Text style={styles.sizetext}>Crust</Text>
              <Text style={styles.orignalsize}>Thin Crust</Text>
            </View>
            <View style={{ marginBottom: RFValue(15) }}>
              <Text style={styles.sizetext}>Delivery in</Text>
              <Text style={styles.orignalsize}>30 min</Text>
            </View>
          </View>

          <View>
            <Image
              style={styles.largePizza}
              source={require("../assets/icons/pizza1.png")}
            />
          </View>
        </View>

        <View style={styles.ingredientsMainContainer}>
          <Text style={styles.ingredientText}>Ingredients</Text>

          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingLeft: RFValue(20),
              paddingBottom: RFValue(20),
              paddingRight: 20,
              marginTop: RFValue(15),
            }}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.ingredientContainer}>
              <Image
                style={{ width: RFValue(74), height: RFValue(50) }}
                source={require("../assets/icons/ham.png")}
              />
            </View>
            <View style={styles.ingredientContainer}>
              <Image
                style={{ width: RFValue(74), height: RFValue(50) }}
                source={require("../assets/icons/tomato.png")}
              />
            </View>
            <View style={styles.ingredientContainer}>
              <Image
                style={{ width: RFValue(74), height: RFValue(50) }}
                source={require("../assets/icons/garlic.png")}
              />
            </View>

            <View style={styles.ingredientContainer}>
              <Image
                style={{ width: RFValue(74), height: RFValue(50) }}
                source={require("../assets/icons/cheese.png")}
              />
            </View>
          </ScrollView>

          <TouchableOpacity 
          onPress={onPressPlaceOrder}
          style={styles.placeOrderButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.placeorderText}>Place an order</Text>

              <Image
                style={styles.right}
                source={require("../assets/icons/right.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: RFValue(20),
    paddingRight: RFValue(35),
    marginTop: RFValue(40),
  },
  backcontainer: {
    width: RFValue(35),
    height: RFValue(35),
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#CDCDCD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: RFValue(28),
    color: "#313234",
    fontFamily: "SemiBold",
    marginLeft: RFValue(20),
    marginTop: RFValue(25),
  },
  price: {
    color: "#E4723C",
    fontSize: RFValue(28),
    fontFamily: "SemiBold",
    marginLeft: RFValue(20),
    marginTop: RFValue(5),
  },
  sizetext: {
    fontSize: RFValue(13),
    color: "#CDCDCD",
    fontFamily: "Regular",
  },
  orignalsize: {
    fontSize: RFValue(15),
    color: "#000000",
    fontFamily: "Medium",
  },
  largePizza: {
    width: RFValue(250),
    height: RFValue(140),
    left:RFValue(30),
    
  },
  pizzaDetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    marginTop: RFValue(20),
  },
  pizzaDetailLeft: {
    marginLeft: RFValue(20),
  },
  ingredientText: {
    fontSize: RFValue(15),
    fontFamily: "Bold",
    color: "#000",
    marginLeft: RFValue(20),
    marginTop: RFValue(45),
  },
  ingredientContainer: {
    marginRight: RFValue(15),
    width: RFValue(95),
    height: RFValue(75),
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  placeOrderButton: {
    width: Dimensions.get("window").width - RFValue(50),
    height: RFValue(60),
    backgroundColor: "#F5CA48",
    borderRadius: 50,
    marginLeft: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(30),
  },
  placeorderText: {
    color: "#000",
    fontFamily: "Bold",
    fontSize: RFValue(13),
  },
  right: {
    width: 6.3,
    height: 10,
    marginLeft: 12,
  },
});
