import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextBold(props){
  return (
    <Text style={[styles.text, {fontSize: props.size || 14}]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text:{
    fontWeight: "bold"
  }
});