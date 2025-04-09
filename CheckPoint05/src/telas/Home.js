import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao AdotePet!</Text>
      <Text style={styles.subtitulo}>
        Explore animais disponíveis e ajude a transformar vidas! 🐾
      </Text>

      <Image source={require('../assets/logo.png')} style={styles.imagem} />
      <Image source={require('../assets/cachorro1.png')} style={styles.imagem} />

      <View style={styles.botao}>
        <Button title="Links úteis" onPress={() => navigation.navigate('Links Úteis')} color="#4CAF50" />
      </View>

      <View style={styles.botao}>
        <Button title="Sobre os desenvolvedores" onPress={() => navigation.navigate('Desenvolvedores')} color="#4CAF50" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000000',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  imagem: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  botao: {
    marginVertical: 10,
    width: '100%',
  },
});
