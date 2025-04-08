import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';

export default function FormularioAdocao() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarFormulario() {
    if (!nome || !telefone || !mensagem) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Formulário Enviado',
      `Obrigado por querer adotar, ${nome}! Entraremos em contato pelo número ${telefone}.`
    );

    // Limpa os campos após envio
    setNome('');
    setTelefone('');
    setMensagem('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome completo:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="(11) 99999-9999"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Por que você quer adotar?</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Fale um pouco sobre você..."
        multiline
      />

      <Button title="Enviar" onPress={enviarFormulario} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
});
