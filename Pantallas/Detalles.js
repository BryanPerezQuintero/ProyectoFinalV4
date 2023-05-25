import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-web';

const Detalles = ({navigation, route}) => {
  const { carro } = route.params;

  if (!carro) {
    return (
      <View style={styles.container}>
        <Text>No se pudieron cargar los datos del carro.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.carroContainer} key={carro.id}>
        <Text style={styles.text}>Marca: {carro.Marca}</Text>
        <Text style={styles.text}>Modelo: {carro.Modelo}</Text>
        <Text style={styles.text}>Altura: {carro.Altura} metros</Text>
        <Text style={styles.text}>Ancho: {carro.Ancho} metros</Text>
        <Text style={styles.text}>Color: {carro.Color}</Text>
        <Text style={styles.text}>Longitud: {carro.Longitud} metros</Text>
        <Text style={styles.text}>Peso: {carro.Peso} kilogramos</Text>
      </View>
      <View>
        <Button
        title="Regresar" onPress={() => navigation.goBack()}/>
      </View>
    </View>
  );
};

export default Detalles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carroContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    minWeight: 150
},
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
