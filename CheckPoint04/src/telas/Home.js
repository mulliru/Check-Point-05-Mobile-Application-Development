import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valor, setValor] = useState('');
  const [percentual, setPercentual] = useState('');

  const handleCalcular = () => {
    if (nomeProduto && valor && percentual) {
      navigation.navigate('Calculadora', { nomeProduto, valor: parseFloat(valor), percentual: parseFloat(percentual) });
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/fiap_logo.png')} style={styles.logo} />
      
      {/* Título e Créditos */}
      <Text style={styles.titulo}>Calculadora de Aumento</Text>
      <Text style={styles.desenvolvido}>Desenvolvido por Murillo</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        placeholderTextColor="#C1C1C1"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor Original (R$)"
        keyboardType="numeric"
        placeholderTextColor="#C1C1C1"
        value={valor}
        onChangeText={(text) => setValor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Aumento (%)"
        keyboardType="numeric"
        placeholderTextColor="#C1C1C1"
        value={percentual}
        onChangeText={(text) => setPercentual(text)}
      />

      
      <TouchableOpacity style={styles.botao} onPress={handleCalcular}>
        <Text style={styles.botaoTexto}>Calcular</Text>
      </TouchableOpacity>
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
  logo: {
    width: 120,
    height: 50,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C1C1C1',
    marginBottom: 10,
  },
  desenvolvido: {
    fontSize: 16,
    color: '#C1C1C1',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#303030',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#303030',
    color: '#C1C1C1',
  },
  botao: {
    backgroundColor: '#C1C1C1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  botaoTexto: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
