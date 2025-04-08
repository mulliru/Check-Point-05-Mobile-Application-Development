import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { buscarAnimais } from '../services/petfinder';

export default function ListaAnimais({ navigation }) {
  const [animais, setAnimais] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarAnimais();
        setAnimais(dados);
      } catch (err) {
        console.error('Erro ao buscar animais:', err);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (carregando) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 50 }} />;
  }

  return (
    <FlatList
      data={animais}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {item.photos[0] ? (
            <Image source={{ uri: item.photos[0].medium }} style={styles.imagem} />
          ) : (
            <Text>Sem imagem</Text>
          )}
          <Text style={styles.nome}>{item.name}</Text>
          <Text style={styles.raca}>{item.breeds.primary}</Text>

          <Button
            title={`Quero adotar ${item.name}`}
            onPress={() => navigation.navigate('Formulário', { nomeAnimal: item.name })}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  imagem: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  raca: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});
