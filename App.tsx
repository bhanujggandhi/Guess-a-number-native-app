import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";

import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";

import fetchFonts from "./utils/fetchFonts";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  const newGameHanlder = () => {
    setGuessRounds(0);
    setUserNumber(undefined);
  };

  const startGameHandler = (selectedNumber: number | undefined) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={newGameHanlder}
      />
    );
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
