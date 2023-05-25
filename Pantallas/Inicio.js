import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Bienvenido a la aplicación de carros</Text>
      <Image
        source={require('../assets/Imágenes/Mercedes-Benz_SLS_AMG_GT3_11_(GT7).jpg')}
        style={styles.image}
      />
      <Text>Mercedes-Benz SLS AMG GT3 '11</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  text1: {
    marginTop: 20,
  },
});

export default Inicio;