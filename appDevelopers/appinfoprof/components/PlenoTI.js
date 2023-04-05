import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView  } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function PlenoTI() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Função de um Pleno em TI </Text>
      <ScrollView>
      <Text style={estilo.conceito}>
        {' '}
        É um profissional com média experiência, seja na área de tecnologia da informação, área financeira ou outras áreas quaisquer. Assim como o júnior a definição de uma quantidade de anos pode não ser tão precisa, mas algo entre 2 e 5 anos é aceitável como designar um profissional como pleno.{' '}
      </Text>
      <Image
        style={estilo.img}
        resizeMode={'contain'}
        source = {require('../assets/programi.jpg')}
      />
      <Text style={estilo.subtitulo}> Empregos: </Text>
      <View style={estilo.fundo}>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Programdor Pleno </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Desenvolvedor Fron-End Pleno </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Desenvolvedor Back-End Pleno </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Analista de dados Pleno </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Cloud Pleno </Text>
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
