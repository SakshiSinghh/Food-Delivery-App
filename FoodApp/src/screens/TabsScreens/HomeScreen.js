import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Dimensions,
  ScrollView,
  BackHandler
} from "react-native";
import React, { useState,useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Categorie from "../../components/Categorie";
import PopularCard from "../../components/PopularCard";
import { useNavigation } from "@react-navigation/native";
const WIDTH = Dimensions.get("window").width;

const DATA = [
  {
    id: "1",
    title: "Primavera Pizza",
    weight: "Weight 540 gr",
  },
  {
    id: "2",
    title: "top of the week",
    weight: "Weight 240 gr",
  },
  {
    id: "3",
    title: "Primavera Pizza",
    weight: "Weight 540 gr",
  },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const navigation2 = useNavigation();

  const renderItem = ({ item }) => (
    <PopularCard
      onpress={() =>
        navigation.navigate("PizzaInfoScreen", {
          name: item.title,
        })
      }
      title={item.title}
      weight={item.weight}
    />
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigation2.isFocused()) {
          BackHandler.exitApp();
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [navigation2]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: RFValue(50) }}
      >
        <Image
          style={styles.menu}
          source={require("../../assets/icons/menu.png")}
        />

        <View style={{ marginLeft: RFValue(20), marginTop: RFValue(25) }}>
          <Text style={styles.foodText}>Food</Text>

          <Text style={styles.deliveryText}>Delivery</Text>
        </View>

        <View style={styles.searchContainer}>
          <Image
            style={{ width: RFValue(15), height: RFValue(15) }}
            source={require("../../assets/icons/search.png")}
          />

          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Search"
          />
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Categories</Text>

          <View style={styles.categoriesItemContainer}>
            {/* Reuseable Categorie Component */}
            <Categorie
              topimage={require("../../assets/icons/pizza-icon.png")}
              title="Pizza"
              icon={require("../../assets/icons/yellowright.png")}
              backcolor="#F5CA48"
            />

            <Categorie
              topimage={require("../../assets/icons/shrimp-icon.png")}
              title="Seafood"
              icon={require("../../assets/icons/redright.png")}
              backcolor="#fff"
            />

            <Categorie
              topimage={require("../../assets/icons/soda-icon.png")}
              title="Soft Drinks"
              icon={require("../../assets/icons/redright.png")}
              backcolor="#fff"
            />
          </View>
        </View>

        <View style={styles.popularCategoriesContainer}>
          <Text style={styles.categoriesText}>Popular</Text>

          <View>
            <FlatList
             contentContainerStyle={{marginTop:20,}}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
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
  menu: {
    width: RFValue(22),
    height: RFValue(22),
    alignSelf: "flex-end",
    marginRight: RFValue(30),
    marginTop: RFValue(50),
  },
  foodText: {
    fontSize: RFValue(15),
    fontFamily: "Regular",
    color: "#313234",
    top: 5,
  },
  deliveryText: {
    fontSize: RFValue(28),
    fontFamily: "SemiBold",
    color: "#313234",
  },
  input: {
    width: WIDTH - RFValue(70),

    color: "#000",
    fontFamily: "Regular",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    marginLeft: RFValue(10),
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFValue(20),
    marginTop: RFValue(20),
  },
  categoriesContainer: {
    marginTop: RFValue(25),
  },
  categoriesText: {
    fontSize: RFValue(15),
    color: "#000000",
    fontFamily: "Bold",
    marginLeft: RFValue(20),
  },

  categoriesItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: RFValue(15),
  },

  popularCategoriesContainer: {
    marginTop: RFValue(20),
  },
 
});
