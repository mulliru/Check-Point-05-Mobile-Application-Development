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
    return <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 50 }} />;
  }

  return (
    <FlatList
      style={styles.lista}
      contentContainerStyle={{ paddingBottom: 20 }}
      data={animais}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {item.photos[0] ? (
            <Image source={{ uri: item.photos[0].medium }} style={styles.imagem} />
          ) : (
            <Text style={styles.semImagem}>Sem imagem</Text>
          )}
          <Text style={styles.nome}>{item.name}</Text>
          <Text style={styles.raca}>{item.breeds.primary}</Text>

          <Button
            title={`Quero adotar ${item.name}`}
            onPress={() => navigation.navigate('Formulário de Adoção', { nomeAnimal: item.name })}
            color="#4CAF50"
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#F9F9F9',
  },
  card: {
    alignItems: 'center',
    padding: 15,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imagem: {
    width: 200,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  semImagem: {
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  raca: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
});
