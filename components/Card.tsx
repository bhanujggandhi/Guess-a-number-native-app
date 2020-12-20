import React from "react";
import { View, StyleSheet } from "react-native";

type CardProps = {
  children: React.ReactNode;
  style: object;
};

const Card = (props: CardProps) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 15,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
