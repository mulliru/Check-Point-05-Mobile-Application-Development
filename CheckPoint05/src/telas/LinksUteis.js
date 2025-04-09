import React from 'react';
import { View, Text, Button, Linking, StyleSheet, ScrollView } from 'react-native';

export default function LinksUteis() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Links úteis sobre adoção</Text>

      <View style={styles.linkBox}>
        <Button
          title="AdoteVica - Centro de Adoção"
          onPress={() => Linking.openURL('https://www.instagram.com/adotevica/')}
          color="#4CAF50"
        />
      </View>

      <View style={styles.linkBox}>
        <Button
          title="Instituto Caramelo - Cuidado Animal"
          onPress={() => Linking.openURL('https://amparanimal.org.br')}
          color="#4CAF50"
        />
      </View>

      <View style={styles.linkBox}>
        <Button
          title="Cão Sem Dono (SP)"
          onPress={() => Linking.openURL('https://www.caosemdono.com.br/')}
          color="#4CAF50"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
  linkBox: {
    marginBottom: 15,
  },
});
