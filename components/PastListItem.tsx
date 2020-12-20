import React from "react";
import { View, Text, StyleSheet } from "react-native";

import defaultStyles from "../constants/default-styles";

type PastListItemProps = {
  pastGuess: number;
  numOfRounds: number;
};

const PastListItem = ({ pastGuess, numOfRounds }: PastListItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={defaultStyles.bodyText}>#{numOfRounds}</Text>
      <Text style={defaultStyles.bodyText}>{pastGuess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default PastListItem;
