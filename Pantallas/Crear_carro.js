import React, { useRef } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import db from '../BasedeDatos/Firebase';
import { Button, Icon } from '@rneui/themed';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Crear_carro = (props) => {
  const formRef = useRef(null);

  const handleGuardar = async (values) => {
    await addDoc(collection(db, 'Carros'), values);
    alert('Se guardó el carro correctamente');
    formRef.current.resetForm();
  };

  const validationSchema = Yup.object().shape({
    Altura: Yup.number().required('Campo requerido'),
    Ancho: Yup.number().required('Campo requerido'),
    Color: Yup.string().required('Campo requerido'),
    Longitud: Yup.number().required('Campo requerido'),
    Marca: Yup.string().required('Campo requerido'),
    Modelo: Yup.string().required('Campo requerido'),
    Peso: Yup.number().required('Campo requerido'),
  });

  return (
    <ScrollView style={styles.container}>
      <Formik
        innerRef={formRef}
        initialValues={{
          Altura: '',
          Ancho: '',
          Color: '',
          Longitud: '',
          Marca: '',
          Modelo: '',
          Peso: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleGuardar}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <View style={styles.inputGroup}>
              <Text>Introduzca la altura en metros</Text>
              <TextInput
                placeholder="1.133"
                onChangeText={handleChange('Altura')}
                value={values.Altura}
              />
              {errors.Altura && <Text style={styles.error}>{errors.Altura}</Text>}
            </View>
            <View style={styles.inputGroup}>
              <Text>Introduzca el ancho en metros</Text>
              <TextInput
                placeholder="1.955"
                onChangeText={handleChange('Ancho')}
                value={values.Ancho.toString()}
              />
              {errors.Ancho && <Text style={styles.errorText}>{errors.Ancho}</Text>}
            </View>
            <View style={styles.inputGroup}>
              <Text>Introduzca el color</Text>
              <TextInput
                placeholder="Red carbon"
                onChangeText={handleChange('Color')}
                value={values.Color}
              />
              {errors.Color && <Text style={styles.errorText}>{errors.Color}</Text>}
            </View>
            <View style={styles.inputGroup}>
              <Text>Introduzca la longitud en metros</Text>
              <TextInput
                placeholder="4.752"
                onChangeText={handleChange('Longitud')}
                value={values.Longitud.toString()}
              />
              {errors.Longitud && <Text style={styles.errorText}>{errors.Longitud}</Text>}
            </View>
            <View style={styles.inputGroup}>
              <Text>Introduzca la marca</Text>
              <TextInput
                placeholder="Bugatti"
                onChangeText={handleChange('Marca')}
                value={values.Marca}
              />
              {errors.Marca && <Text style={styles.errorText}>{errors.Marca}</Text>}
            </View>
            <View style={styles.inputGroup}>
              <Text>Introduzca el modelo</Text>
              <TextInput
                placeholder="Bugatti Vision Gran Turismo Gr.1"
                onChangeText={handleChange('Modelo')}
                value={values.Modelo}
              />
              {errors.Modelo && <Text style={styles.errorText}>{errors.Modelo}</Text>}
            </View>
            <View style={styles.inputGroup}>
              <Text>Introduzca el peso en kilogramos</Text>
              <TextInput
                placeholder="987"
                onChangeText={handleChange('Peso')}
                value={values.Peso.toString()}
              />
              {errors.Peso && <Text style={styles.errorText}>{errors.Peso}</Text>}
            </View>

            <View>
              <Button onPress={handleSubmit}>Guardar carro</Button>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Crear_carro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  error: {
    color: 'red',
  },
});