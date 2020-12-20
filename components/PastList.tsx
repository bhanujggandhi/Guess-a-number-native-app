import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import PastListItem from "./PastListItem";

type PastListProps = {
  pastGuesses: number[];
};

const PastList = ({ pastGuesses }: PastListProps) => {
  return (
    <ScrollView contentContainerStyle={styles.list}>
      {pastGuesses.map((pastGuess, idx) => (
        <PastListItem
          key={pastGuess}
          pastGuess={pastGuess}
          numOfRounds={pastGuesses.length - idx}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default PastList;
