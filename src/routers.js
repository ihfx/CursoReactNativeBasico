import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importacao das views
import Home from "./screens/home";
import Aula01_criacao_projeto from "./screens/aula01_criacao_projeto";
import Aula02_calculadora_basica from "./screens/aula02_calculadora_basica";
import Aula03_componentes from "./screens/aula03_componentes";

//Declaracao do stack para a navegacao
const Stack = createNativeStackNavigator();

export default function Routers(){
  //Declaracao do objeto que contem a estilizacao do header da navegacao
  const optionsHeaders = {
    headerStyle: {
      backgroundColor: '#290E45',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white',
    },
    
  }
  return (
    //Componentes container da lib para envolver as views
    <NavigationContainer>
      {/* Declaracao das views, informando que por default inicia na view de nome Home */}
      <Stack.Navigator initialRouteName="Home">
        {/* Declaracao da view Home */}
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{...optionsHeaders, title: 'CursoReactNativeBasico'}}
        />
        {/* Declaracao da view Aula01_criacao_projeto */}
        <Stack.Screen 
          name="Aula01_criacao_projeto" 
          component={Aula01_criacao_projeto}
          options={optionsHeaders}
        />
        {/* Declaracao da view Aula02_calculadora_basica */}
        <Stack.Screen 
          name="Aula02_calculadora_basica" 
          component={Aula02_calculadora_basica} 
          options={optionsHeaders}
        />
        {/* Declaracao da view Aula03_componentes */}
        <Stack.Screen 
          name="Aula03_componentes" 
          component={Aula03_componentes} 
          options={optionsHeaders}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}