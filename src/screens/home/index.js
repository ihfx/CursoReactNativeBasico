import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Funcao Home recebe um objeto que possui uma propriedade navigation,
// que vai ser através dele que o salto de tela irá acontecer
export default function Home({navigation}) {
  return (
    // Container principal
    <View style={styles.container}>

      {/* Botao para acessar a view com o projeto da Aula01_criacao_projeto */}
      <TouchableOpacity 
        style={styles.botton}
        onPress={() => navigation.navigate('Aula01_criacao_projeto')}
      >
        <Text 
          style={styles.textBotton}
        >
          Aula01_criacao_projeto
        </Text>
      </TouchableOpacity>

      {/* Botao para acessar a view com o projeto da Aula02_calculadora_basica */}
      <TouchableOpacity 
        style={styles.botton}
        onPress={() => navigation.navigate('Aula02_calculadora_basica')}
      >
        <Text
          style={styles.textBotton}
        >
          Aula02_calculadora_basica
        </Text>
      </TouchableOpacity>

      {/* Botao para acessar a view com o projeto da Aula03_componentes */}
      <TouchableOpacity 
        style={styles.botton}
        onPress={() => navigation.navigate('Aula03_componentes')}
      >
        <Text
          style={styles.textBotton}
        >
          Aula03_componentes
        </Text>
      </TouchableOpacity>
      
      {/* Definicao da statusBar, onde aparece a bateria do smartphone */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#C6B0DE'
  },  
  botton:{
    margin: 5,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#561F91',
    width: 300,
    height: 50,
    borderRadius: 10
  },
  textBotton:{
    color:'white',
    fontSize: 22
  }
})