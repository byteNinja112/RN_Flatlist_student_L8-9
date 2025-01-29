import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";

export default function Index() {

  type dataType = {
    id: string; // unique identifier for each element in a list (ex: student id number)
    title: string; // what I display (ex: George [when there are multiple Georges])
  }

  const DATA: dataType[] = [
    {id: "1", title: "First"},
    {id: "2", title: "Second"},
    {id: "3", title: "Third"},
    {id: "4", title: "Fourth"},

  ];

  const [selectedId, setSelectedId] = useState<string>("1")

  // create a simple function to call when an  item is selected
  // pass a parameter of the item that was clicked on

  const selectedList = (item: dataType) => {
    console.log("Selected " + item.title)
    setSelectedId(item.id)
  }


  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Mobile Apps Flat List App</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data = {DATA}
            keyExtractor={(item: dataType) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectedList(item)} >
                <View style={[styles.titleContainer, 
                  {backgroundColor: item.id === selectedId ? colors.primary : colors.secondary}]}>
                  <Text style={[styles.titleText, {color: item.id === selectedId ? colors.text.light : colors.text.dark}]}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },

  // these are styles for each row of flatlist
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#ADD8E6',
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
