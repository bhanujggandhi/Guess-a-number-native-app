import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();

  const startGameHandler = (selectedNumber: number | undefined) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
