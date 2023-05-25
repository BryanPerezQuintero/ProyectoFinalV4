import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Istereg = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Imágenes/cars.gif")}
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    width: 200,
    height: 200,
  },
});

export default Istereg;