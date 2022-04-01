import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function ModalCustom(props){
  const [name, setName] = useState(props.name);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.hideModal}
        onRequestClose={() => {
          props.setHideModal(!props.hideModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>CursoReactNativeBasico</Text>
            <TextInput
              mode='outlined'
              style={styles.input}
              label='Digite seu nome'
              onChangeText={(text)=>{setName(text)}}
              value={name}
              
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.setName(name)
                props.setHideModal(!props.hideModal)
              }}
            >
              <Text style={styles.textStyle}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250,250,250,.8)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input:{
    margin:10,
    height: 40,
    width: 250,
    fontSize: 18
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:200,
    backgroundColor:'#006E0F',
    marginTop: 15
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18
  }
})
