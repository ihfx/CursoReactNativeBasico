import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ModalCustom from './components/ModalCustom';

export default function Aula05_modal(){
  const [hideModal, setHideModal] = useState(false);
  const [name, setName] = useState('José Aparecido');

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.text}>{`Nome: `}</Text>
        <Text>{name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setHideModal(!hideModal)}
        >
          <Text style={styles.textButton}>Editar</Text>
        </TouchableOpacity>

      </View>
      <ModalCustom
        hideModal={hideModal}
        setHideModal={setHideModal}
        name={name}
        setName={setName}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    flexDirection:'row', 
    alignItems:'center', 
    marginLeft: 20
  },
  text: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  button:{
    margin: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#561F91',
    width: 60,
    height: 50,
    borderRadius: 10
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
})
