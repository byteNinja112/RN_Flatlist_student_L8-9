import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeparator";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import defaultStyles from "../styles/defaultStyles";
import { dataType, DATA } from "@/data/appData";

export default function Index() {

  const [selectedId, setSelectedId] = useState<string>("1")

  // create a simple function to call when an  item is selected
  // pass a parameter of the item that was clicked on

  const handleRowPress = (item: dataType) => {
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
            extraData={selectedId}
            ItemSeparatorComponent={() => (<ListItemSeparator />)}
            renderItem={({ item }) => (
            <ListItem
              item={item}
              isSelected={item.id === selectedId}
              onPress={handleRowPress}
            />
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
