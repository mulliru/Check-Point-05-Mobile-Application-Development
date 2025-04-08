import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Desenvolvedores() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Equipe de Desenvolvimento</Text>

      <View style={styles.devBox}>
        <Image source={require('../assets/dev1.png')} style={styles.imagem} />
        <Text style={styles.nome}>Murilo</Text>
        <Text style={styles.funcao}>Desenvolvedor Frontend</Text>
      </View>

      <View style={styles.devBox}>
        <Image source={require('../assets/dev2.png')} style={styles.imagem} />
        <Text style={styles.nome}>João</Text>
        <Text style={styles.funcao}>Designer e Apoio Técnico</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  devBox: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  funcao: {
    fontSize: 16,
    color: '#555',
  },
});
