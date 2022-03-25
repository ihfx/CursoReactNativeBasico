import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Aula02_calculadora_basica() {
  
  const [painel, setPainel] = useState('');
  const [resultadoParcial, setResultadoParcial] = useState('');
  const [resultadoAuxiliar, setResultadoAuxiliar] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [soma, setSoma] = useState(false);
  const [subtrai, setSubtrai] = useState(false);

  const ReiniciarVariaveis = () => {
    setResultadoAuxiliar(0);
    setResultadoParcial('');
    setSoma(false);
    setSubtrai(false);
  }

  const Calcular = (strValor) =>{
    setPainel(painel + strValor);
    
    if(strValor == '+'){      
      setSoma(true);
      setResultadoAuxiliar(parseFloat(resultadoParcial));
      setResultadoParcial('');
    }else if (strValor == '-'){
      setSubtrai(true);
      setResultadoAuxiliar(parseFloat(resultadoParcial));
      setResultadoParcial('');
    }else if (strValor == '='){
      let result = 0;
      if(soma == true){
        result = resultadoAuxiliar + parseFloat(resultadoParcial);
      }else if(subtrai == true){
        result = resultadoAuxiliar - parseFloat(resultadoParcial);
      }
      setResultado(result);
      ReiniciarVariaveis();
    }else if (strValor == 'C'){
      ReiniciarVariaveis();
      setPainel('');
      setResultado(0);
    }else{
      if(painel.indexOf('=') !== -1){
        setPainel(strValor);
      }
      setResultadoParcial(resultadoParcial + strValor);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>Aula 2 Calculadora</Text>

      <Text>
        Operação: {painel}
      </Text>

      <Text>
        Resultado: {resultado}
      </Text>

      <TouchableOpacity
        onPress={()=>{Calcular('1')}}>
        <Text>
          1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('2')}}>
        <Text>
          2
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('3')}}>
        <Text>
          3
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('4')}}>
        <Text>
          4
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('5')}}>
        <Text>
          5
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('6')}}>
        <Text>
          6
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('7')}}>
        <Text>
          7
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('8')}}>
        <Text>
          8
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('9')}}>
        <Text>
          9
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('0')}}>
        <Text>
          0
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('+')}}>
        <Text>
          +
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('-')}}>
        <Text>
          -
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('=')}}>
        <Text>
          =
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{Calcular('C')}}>
        <Text>
          C
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
