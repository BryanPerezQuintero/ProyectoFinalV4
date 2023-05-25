import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import imagen from '../assets/Imágenes/Android_logo_2019_(stacked).svg.png'

export default function Acerca() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Creador de la aplicación: Bryan Jair Pérez Quintero.</Text>
                <Text>Materia: Desarrollo de aplicaciones móviles.</Text>
                <Text>Semestre: Enero - Junio 2023</Text>
            </View>
            <Image
                style={EstiloImagen.container}
                source={imagen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const EstiloImagen = StyleSheet.create({
    container: {
        width: 220,
        height: 190,
        resizeMode: 'center',
        marginTop:20
    }
});