import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo, AntDesign } from "@expo/vector-icons";
const WIDTH = Dimensions.get("window").width;
export default function MyListScreen({ navigation }) {
  const [items, setItems] = useState(["Pizza1 👍", "Pizza2 📢", "Pizza3🙃"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem !== "") {
      setItems([...items, newItem]);
      setNewItem(newItem);
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const renderItem = ({ item, index }) => (
    // <List title={item.title} />
    <View style={styles.orderListItemContainer}>
      <View style={styles.itemLeft}>
        <Image
          style={{
            width: RFValue(22),
            height: RFValue(22),
            marginRight: RFValue(12),
          }}
          source={require("../../assets/icons/bluebox.png")}
        />

        <Text>{item}</Text>
      </View>

      <TouchableOpacity onPress={() => deleteItem(index)}>
        <Entypo name="circle-with-cross" size={24} color="#55BCF6" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backcontainer}
        >
          <Image
            style={{ width: RFValue(5), height: RFValue(8) }}
            source={require("../../assets/icons/back.png")}
          />
        </TouchableOpacity>

        <View style={styles.myOrderListContainer}>
          <Text style={styles.myOrderList}>My order list</Text>

          <View>
            <FlatList
              contentContainerStyle={{ marginTop: RFValue(30) }}
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerInputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
          placeholder="Write a task"
          placeholderTextColor={"#C0C0C0"}
        />

        <AntDesign onPress={addItem} name="plus" size={32} color="#C0C0C0" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
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
    marginLeft: RFValue(25),
    marginTop: RFValue(30),
  },
  myOrderListContainer: {
    marginTop: 100,
  },
  myOrderList: {
    color: "#1A1A1A",
    fontSize: RFValue(22),
    fontFamily: "Bold",
    marginLeft: RFValue(20),
  },
  orderListItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(20),
    width: WIDTH - RFValue(45),
    height: RFValue(50),
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: RFValue(30),
    alignSelf: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: WIDTH / 1.5,
    height: RFValue(42),
    borderRadius: 60,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    backgroundColor: "#fff",
  },
  footerInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: RFValue(20),
  },
});
