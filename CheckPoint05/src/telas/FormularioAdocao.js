import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function FormularioAdocao({ navigation }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const route = useRoute();
  const { nomeAnimal } = route.params || {};

  function enviarFormulario() {
    if (!nome || !telefone || !mensagem) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Formulário Enviado',
      `Obrigado por querer adotar ${nomeAnimal || 'um animal'}, ${nome}! Entraremos em contato pelo número ${telefone}.`,
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Principal');
            setNome('');
            setTelefone('');
            setMensagem('');
          },
        },
      ]
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {nomeAnimal && (
        <Text style={styles.intro}>
          Você está adotando: <Text style={{ fontWeight: 'bold' }}>{nomeAnimal}</Text>
        </Text>
      )}

      <Text style={styles.label}>Nome completo:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="(11) 99999-9999"
        keyboardType="phone-pad"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Por que você quer adotar?</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Fale um pouco sobre você..."
        multiline
        placeholderTextColor="#888"
      />

      <View style={styles.botao}>
        <Button title="Enviar" onPress={enviarFormulario} color="#4CAF50" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9', // fundo da tela
    flexGrow: 1,
  },
  intro: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  botao: {
    marginTop: 20,
  },
});
