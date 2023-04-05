import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView  } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function JuniorTI() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Função de um Junior em TI </Text>
      <ScrollView>
      <Text style={estilo.conceito}>
        {' '}
        O Desenvolvedor Júnior é o profissional que está em início de carreira,
        possuindo experiência mínima com o mercado de trabalho e conhecimento
        suficiente para suprir as necessidades das empresas em tarefas básicas,
        como, por exemplo, corrigir bugs pequenos e não tão importantes dentro
        de um sistema.{' '}
      </Text>
      <Image
        style={estilo.img}
        resizeMode={'contain'}
        source = {require('../assets/developerJ.jpeg')}
      />
      <Text style={estilo.subtitulo}> Empregos: </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Programdor Junior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Desenvolvedor Fron-End Junior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Desenvolvedor Back-End Junior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Analista de dados Junior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Cloud Junior </Text>
       </View>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#00BFFF'
  },
  conceito: {
    fontSize:18,

    margin:20
  },
  fundo:{
    backgroundColor: '#0fB',
    width:largura -40,
    margin:20,
    borderRadius:5
  },
  titulo: {
    fontSize:30,
    marginTop: 30,
    marginBottom: 20,
    marginLeft:10
  },

  subtitulo: {
    fontSize:25,
    marginLeft:10

  },

  topicos: {
    fontSize:20,
    marginLeft:20
  },

  img: {
    width: largura,
    height:400
  },
});
