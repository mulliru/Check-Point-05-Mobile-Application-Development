import React from 'react';
import { View, Text, Button, Linking, StyleSheet, ScrollView } from 'react-native';

export default function LinksUteis() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Links úteis sobre adoção</Text>

      <View style={styles.linkBox}>
        <Button
          title="AdoteVica - Centro de Adoção "
          onPress={() => Linking.openURL('https://www.instagram.com/adotevica/')}
        />
      </View>

      <View style={styles.linkBox}>
        <Button
          title="instituto.caramelo - Instituto de cuidado animal"
          onPress={() => Linking.openURL('https://amparanimal.org.br')}
        />
      </View>

      <View style={styles.linkBox}>
        <Button
          title="Instituição Cão Sem Dono (SP) "
          onPress={() => Linking.openURL('https://www.caosemdono.com.br/')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  linkBox: {
    marginBottom: 15,
  },
});
