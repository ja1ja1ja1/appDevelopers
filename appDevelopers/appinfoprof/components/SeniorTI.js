import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView  } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function SeniorTI() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Função de um Senior em TI </Text>
      <ScrollView>
      <Text style={estilo.conceito}>
        {' '}
        É um termo com origem latina que significa idoso ou ancião e é usado neste contexto de profissões e trabalho para designar uma pessoa com muita experiência. Juntado a outros fatores expostos anteriormente, o sênior é um profissional que um dia foi júnior e pleno, mas juntou experiências e vivências na área de atuação e agora somando diversos anos de trabalho, detêm uma visão mais ampla daquilo que faz, desenvolveu competências e habilidades que pode ser traduzido em maturidade profissional.{' '}
      </Text>
      <Image
        style={estilo.img}
        resizeMode={'contain'}
        source = {require('../assets/responsa.jpeg')}
      />
      <View style={estilo.fundo}>
      <Text style={estilo.subtitulo}> Empregos: </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Programdor Senior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Desenvolvedor Fron-End Senior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Desenvolvedor Back-End Senior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Analista de dados Senior </Text>
      <Text style={estilo.topicos}><AntDesign name="user" size={24} color="black" />
       Cloud Senior </Text>
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
