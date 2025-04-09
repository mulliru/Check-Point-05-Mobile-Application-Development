import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Desenvolvedores() {
  const [tapCount, setTapCount] = useState(0);
  const [showQR, setShowQR] = useState(false);

  const handleDevPress = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);
    if (newCount === 3) {
      setShowQR(true);
      setTapCount(0); // reseta para permitir repetir depois
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Equipe de Desenvolvimento</Text>

      <View style={styles.devBox}>
        <TouchableOpacity onPress={handleDevPress}>
          <Image
            source={require('../assets/dev1.png')}
            style={styles.imagem}
          />
        </TouchableOpacity>
        <Text style={styles.nome}>Murillo</Text>
        <Text style={styles.funcao}>Desenvolvedor Frontend</Text>
      </View>

      <View style={styles.devBox}>
        <Image
          source={require('../assets/dev2.png')}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Mulliru</Text>
        <Text style={styles.funcao}>Designer e UX</Text>
      </View>

      {showQR && (
        <View style={styles.qrBox}>
          <Text style={styles.qrTexto}>
            Faça um Pix para apoiar o dev!
          </Text>
          <Image
            source={require('../assets/qrpix.jpg')}
            style={styles.qrImagem}
            resizeMode="contain"
          />
        </View>
      )}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
  },
  devBox: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    minHeight: 220,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    color: '#000000',
  },
  funcao: {
    fontSize: 16,
    color: '#555555',
  },
  qrBox: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 3,
  },
  qrTexto: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  qrImagem: {
    width: 200,
    height: 200,
  },
});
