import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import MainButton from "../components/MainButton";
import Colors from "../constants/color";
import defaultStyles from "../constants/default-styles";

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
    <ScrollView>
      <View style={styles.screen}>
        <Text style={defaultStyles.titleText}>Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.resultTextContainer}>
          <Text style={{ ...defaultStyles.bodyText, ...styles.resultText }}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <MainButton
          onPress={() => {
            onRestart();
          }}
        >
          NEW GAME
        </MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
    borderRadius: (Dimensions.get("window").width * 0.8) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  resultTextContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 40,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
