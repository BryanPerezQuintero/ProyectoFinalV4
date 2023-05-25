import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import { Audio } from "expo-av";

const canciones = [
  { id: 1, title: 'Fly Away', cover: require('../assets/Imágenes/Forza5.jpg'), audio: require('../assets/ost/Urbandawn-Fly-Away.mp3') },
  { id: 2, title: 'Cheese Land', cover: require('../assets/Imágenes/Cheese_Land_MKSC_icon.jpg'), audio: require('../assets/ost/Cheese_Land-Mario_Kart_Super_Circuit_Restored.mp3') },
  { id: 3, title: 'GT4 Arcade Mode', cover: require('../assets/Imágenes/GT4.jpg'), audio: require('../assets/ost/GT4_Arcade_mode.mp3') },
  { id: 4, title: 'SNES Donut Plains', cover: require('../assets/Imágenes/MKSC_Box_Art.jpg'), audio: require('../assets/ost/SNES_Donut_Plains-Mario_Kart_Super_Circuit_Restored.mp3') },
  { id: 5, title: 'Rainbow Road', cover: require('../assets/Imágenes/Rainbow_Road_MKSC_icon.jpg'), audio: require('../assets/ost/Super_Mario_Kart-Rainbow_Road.mp3') },
  { id: 6, title: 'Tokyo Drift', cover: require('../assets/Imágenes/ab67616d0000b273aac3b3863e8f7a43a9b65a19.jpg'), audio: require('../assets/ost/Tokyo_Drift-Fast_Furious.mp3') },
  { id: 7, title: 'Yoshi Desert', cover: require('../assets/Imágenes/Yoshi_Desert_MKSC_icon.jpg'), audio: require('../assets/ost/Yoshi_Desert-Mario_Kart_Super_Circuit_Restored.mp3') },
];

const Configuración = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSound, setCurrentSound] = useState(null);

  const playSong = async (song) => {
    try {
      if (currentSong && currentSong.id === song.id) {
        if (currentSound) {
          await currentSound.pauseAsync();
        }
        setCurrentSound(null);
        setCurrentSong(null);
      } else {
        if (currentSound) {
          await currentSound.pauseAsync();
        }

        const soundObject = new Audio.Sound();
        await soundObject.loadAsync(song.audio);
        await soundObject.playAsync();

        setCurrentSound(soundObject);
        setCurrentSong(song);
      }
    } catch (error) {
      console.log('Error al reproducir:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoinst}>Instrucciones:</Text>
      <Text style={styles.textoinst}>Toca una canción para reproducirla. Vuelve a tocar para pausar.</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {canciones.map((cancion) => (
          <TouchableOpacity
            key={cancion.id}
            style={styles.cancionContainer}
            onPress={() => playSong(cancion)}>
            <ImageBackground source={cancion.cover} style={styles.imageBackground} />
            <Text style={styles.cancionText}>{cancion.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cancionContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    width: 250,
    alignItems: 'center',
  },
  cancionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  textoinst: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 10,
  },
  imageBackground: {
    width: 200,
    height: 200,
  },
});

export default Configuración;