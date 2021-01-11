import { Platform, StyleSheet } from "react-native";
import Colors from "../constants/color";

export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
  },
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});
