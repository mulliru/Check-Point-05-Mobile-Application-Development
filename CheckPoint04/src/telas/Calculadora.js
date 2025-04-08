import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Calculadora({ route }) {
  const { nomeProduto, valor, percentual } = route.params;
  const aumento = (valor * percentual) / 100;
  const novoValor = valor + aumento;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.resultado}>Produto: {nomeProduto}</Text>
      <Text style={styles.resultado}>Valor Original: R$ {valor.toFixed(2)}</Text>
      <Text style={styles.resultado}>Aumento: {percentual}%</Text>
      <Text style={styles.resultado}>Valor do Aumento: R$ {aumento.toFixed(2)}</Text>
      <Text style={styles.resultado}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#212121',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C1C1C1',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    color: '#C1C1C1',
    marginBottom: 5,
  },
});
