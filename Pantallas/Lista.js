import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import { collection, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore';
import firebase from '../BasedeDatos/Firebase';

const Lista = ({ navigation }) => {
  const [carros, setCarros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCarros() {
      const carrosCol = collection(firebase, 'Carros');
      const carrosSnapshot = await getDocs(carrosCol);
      const carroList = carrosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCarros(carroList);
      setIsLoading(false);
    }
    getCarros();
  }, []);

  const eliminarCarro = async (carroId) => {
    try {
      await deleteDoc(doc(firebase, 'Carros', carroId));
      // Actualizar la lista de carros después de eliminar
      const carrosCol = collection(firebase, 'Carros');
      const carrosSnapshot = await getDocs(carrosCol);
      const carroList = carrosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCarros(carroList);
    } catch (error) {
      console.error('Error al eliminar el carro:', error);
    }
  };

  const DetallesCarro = async (carroId) => {
    try {
      const ref = doc(firebase, 'Carros', carroId);
      const docSnap = await getDoc(ref);
      const carroData = docSnap.data();
      navigation.navigate('Detalles', { carro: carroData });
    } catch (error) {
      console.error('Error al obtener los detalles del carro:', error);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Cargando carros...</Text>
      </View>
    );
  }

  if (carros.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No se encontraron carros.</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {carros.map((carro) => (
        <View style={styles.container} key={carro.id}>
          <View style={styles.carroContainer}>
            <Text style={styles.text}>Marca: {carro.Marca}</Text>
            <Text style={styles.text}>Modelo: {carro.Modelo}</Text>
            <Text style={styles.text}>Altura: {carro.Altura} metros</Text>
            <Text style={styles.text}>Ancho: {carro.Ancho} metros</Text>
            <Text style={styles.text}>Color: {carro.Color}</Text>
            <Text style={styles.text}>Longitud: {carro.Longitud} metros</Text>
            <Text style={styles.text}>Peso: {carro.Peso} kilogramos</Text>
            <View style={styles.button}>
              <Button title="Ver carro" onPress={() => DetallesCarro(carro.id)} />
            </View>
            <View style={styles.button}>
              <Button title="Borrar carro" onPress={() => eliminarCarro(carro.id)} />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Lista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  carroContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    minWeight: 150
  },
  contenedorcolor: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  text: {
    marginBottom: 5
  },
  accordionTitle: {
    fontWeight: 'bold'
  },
  button: {
    margin: 5
  }
});