import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/color";
import defaultStyles from "../constants/default-styles";

type NumberContainerProps = {
  children: JSX.Element | number | undefined;
};

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.number, ...defaultStyles.bodyText }}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
