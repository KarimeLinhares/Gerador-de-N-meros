import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {

  // constante para o número, e próximo número gerado
  const [numero, setNumero] = useState(0)

  function handleNumero(){

    //gerador de números aleatórios (até 100)
    const novo_numero = Math.floor(Math.random() * 100);

    //função set para aparecer o novo número
    setNumero(novo_numero);

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={styles.botao}>
        <Text>Clique para gerar um número!</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#be50be',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 40,
  },
  botao: {
    backgroundColor: '#ffffff',
    width: '70%',
    fontSize: 15, 
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
});
