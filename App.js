import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View,TextInput,TouchableHighlight,Image} from 'react-native';

export default function calculador(){
  const[peso,setPeso]=useState(0);
  const[altura,setAltura]=useState(0);
  const[imc,setImc]=useState(0);


  const calcularImc=()=>{
    if(peso==0 || !peso){
      alert('Por favor informe seu peso')
      return
    } else if(altura==0 || !altura){
      alert('Por favor informe sua altura')
      return
    }
    const resultadoImc= peso/(Math.pow(altura,2))
    setImc(resultadoImc.toFixed(2))
  }


  return (
  <SafeAreaView style={estilos.corpo}>
    <View style={estilos.paraVieW}>
      <Text>Calculador de IMC</Text>
    </View>
    
    <View style={estilos.paraVieW}>
      <Text>Informe seu Peso:</Text>
      <TextInput style={estilos.texto} autoFocus={true} keyboardType={'numeric'} onChangeText={text=>setPeso(text)}>

      </TextInput>
    </View>
    <View style={estilos.paraVieW}>
      <Text>Informe seu Altura:</Text>
      <TextInput style={estilos.texto} autoFocus={false} keyboardType={'numeric'} onChangeText={text=>setAltura(text)}>

      </TextInput>
    </View>
    <View style={estilos.paraVieW}>
      <TouchableHighlight style={estilos.btncalcular} onPress={()=>calcularImc()}>
        <Text style={estilos.btnTexto}>Calcular IMC</Text>
      </TouchableHighlight>
      
    </View>
    <View style={estilos.paraVieW}>
        <Text>Seu IMC: {imc}</Text>
    </View>
    <View style={estilos.paraVieW}>
      <Image style={estilos.paraImagem} source={require('./imagens/tabela_imc.png')}/>
    </View>

    
  </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  corpo:{
    padding:10
  },
  paraVieW:{
    marginBottom: 20
  },
  texto:{
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
  },
  btncalcular:{
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
    borderRadius: 20
  },
  btnTexto:{
    fontSize:15,
    textTransform: 'uppercase',
    color: '#fff'
  },
  paraImagem:{
    width:'100%',
    resizeMode: 'center',
    marginTop: -23,
    height: 200
  }
});

