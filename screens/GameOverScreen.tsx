import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

type GameOverScreenProps = {
  roundsNumber: number;
  userNumber: number | undefined;
  onRestart: () => void;
};

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onRestart,
}: GameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over!!</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button
        title='NEW GAME'
        onPress={() => {
          onRestart();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
