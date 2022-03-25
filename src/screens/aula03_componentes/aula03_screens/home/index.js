import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Calculator from '../../components/Calculator';
import TextBold from '../../components/TextBold';

export default function Home() {

  return (
    <View style={styles.container}>

      <Text>Aula 3 Componentes</Text>

      <TextBold size={20} children={'Aula 3 Componentes'}/>

      <TextBold size={20}>
        Aula 3 Componentes
      </TextBold>

      <Calculator
        props_width={300}
        props_height={400}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
