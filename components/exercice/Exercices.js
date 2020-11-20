import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Alert, TouchableOpacity, TextInput, SafeAreaView, FlatList } from 'react-native';
import LifeCycle from '../lifeCycle'
import CustomButton from '../Button';

import axios from 'axios';

import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const createButtonAlert = (msg) =>
  Alert.alert(
    "Boîte de dialogue",
    msg,
    [
      { text: "Okay...", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

export function Exo1() {
    return (
      <View style={[styles.square, { backgroundColor: 'rgb(80,80,225)' }]}>
        <Text style={{color: 'white', fontFamily: 'Montserrat-Bold'}}>Hello World !</Text>
      </View>
    )
}

export function Exo2() {
    return (
      <Button
        title="Cliquez sur moi !"
        onPress={() => createButtonAlert('Bonjour !')}
        style={styles.btnBack}>
      </Button>
    )
}

function CustumButton({ onPress, text, icon }) {
    icon = icon ? icon : null
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: 'center', padding: 15, backgroundColor: 'rgb(80,80,225)', borderRadius: 5}}>
          <Text style={{color: '#fff', fontFamily: 'Montserrat-Bold'}}>{text}</Text>
          {icon}
      </TouchableOpacity>
    )
}

export function Exo3() {
    return (
      <CustomButton  onPress={() => createButtonAlert('Bonjour !')} text="Custom button" />
    )
}

export function Exo4() {
    const [num, onChangeNum] = React.useState(0);
    let icon = <View style={{padding: 10, borderRadius: 100, backgroundColor: '#fff', marginLeft: 15}}><AntDesign name="plus" size={24} color="rgb(80,80,225)" /></View>
  
    return (
      <View>
        <Text style={styles.title}>Vous avez cliqué {num} fois</Text>
        <CustomButton onPress={() => onChangeNum(num + 1)} text={"Incrémenter le compteur"} icon={icon} />
      </View>
    )
}

export function Exo5() {
    return (
      <View style={[styles.container, {width: '100%', flexDirection: 'row', justifyContent: 'space-around'}]}>
        <View style={[styles.square, {backgroundColor: 'rgb(80,80,225)'}]}><Text>First</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,225,80)'}]}><Text>Second</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(225,80,80)'}]}><Text>Third</Text></View>
      </View>
    )
}

export function Exo6() {
    return (
      <ScrollView contentContainerStyle={{width: '100%'}}>
        <View style={[styles.square, {backgroundColor: 'rgb(80,80,225)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>First</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,225,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>Second</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(225,80,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>Third</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,80,225)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>4</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,225,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>5</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(225,80,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>6</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,80,225)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>7</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,225,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>8</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(225,80,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>9</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,80,225)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>10</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,225,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>11</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(225,80,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>12</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,80,225)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>13</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(80,225,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>14</Text></View>
        <View style={[styles.square, {backgroundColor: 'rgb(225,80,80)'}]}><Text style={{fontFamily: 'Montserrat-Bold'}}>15</Text></View>
      </ScrollView>
    )
}

export function Exo7() {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    let icon = <FontAwesome name="send" size={22} color="white" style={{marginLeft: 15}} />
  
    return (
      <View style={{width: '100%'}}>
        <Text style={styles.title}>Quel est votre prénom ?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <CustomButton onPress={() => createButtonAlert(value)} text={'Envoyer'} icon={icon} />
      </View>
    );
}

export function Exo8() {

    const DATA = [
      {
        id: '1',
        Nom: 'First',
        Prenom: 'Item'
      },
      {
        id: '2',
        Nom: 'Ricard',
        Prenom: 'Jean'
      },
      {
        id: '3',
        Nom: 'Vodka',
        Prenom: 'Steven'
      },
      {
        id: '4',
        Nom: 'Jager',
        Prenom: 'Philippe'
      },
      {
        id: '5',
        Nom: 'Malibu',
        Prenom: 'Sophie'
      },
      {
        id: '6',
        Nom: 'Old Nick',
        Prenom: 'Emannuel'
      },
      {
        id: '7',
        Nom: 'Stella-Artois',
        Prenom: 'Lisa'
      },
      {
        id: '8',
        Nom: 'Skoll',
        Prenom: 'Tim'
      },
      {
        id: '9',
        Nom: 'Huit-six',
        Prenom: 'Marie'
      },
      {
        id: '10',
        Nom: 'Seize-Quatre',
        Prenom: 'Piotr'
      },
      {
        id: '11',
        Nom: 'Fischer',
        Prenom: 'Brandon'
      },
      {
        id: '12',
        Nom: 'Leffe',
        Prenom: 'Rudy'
      },
      {
        id: '13',
        Nom: 'Iakov',
        Prenom: 'Paul'
      },
      {
        id: '14',
        Nom: 'Gibsons',
        Prenom: 'Roro'
      },
      {
        id: '15',
        Nom: 'Ciroc',
        Prenom: 'Ihab'
      },
      {
        id: '16',
        Nom: 'Caprisun',
        Prenom: 'Vita'
      },
      {
        id: '17',
        Nom: 'Caprisun',
        Prenom: 'Banapple'
      },
      {
        id: '18',
        Nom: 'Camel',
        Prenom: 'Massa'
      },
      {
        id: '19',
        Nom: 'Moula',
        Prenom: 'Enesprit'
      },
      {
        id: '20',
        Nom: 'Tarterets',
        Prenom: 'Malik'
      }
    ];
  
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  
    const renderItem = ({ item }) => (
      <Item title={item.Prenom + ' ' + item.Nom} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  
}

export function Exo9(){
  
    const [data, onChangeData] = React.useState('');
  
    React.useEffect(() => {
      axios.get(`https://randomuser.me/api/?results=100&inc=name`)
      .then(res => {
        onChangeData(res.data.results);
      })
      .catch(error => {
        console.log(error)
      });
    }, [data]);
  
    const Item = ({ data }) => (
      <View style={{ width: '100%' }}>
        <Text style={[styles.title, {textAlign: 'left'}]}>{data.title + ' ' + data.first + ' ' + data.last}</Text>
      </View>
    );
  
    const renderItem = ({ item }) => (
      <Item data={item.name} />
    );

    const _RenderListHeader = () => {
        return (
          <View>
            <Text style={[styles.title, {color: 'rgb(80,80,225)', marginBottom: 5}]}>{'Liste des noms'}</Text>
            <View style={{ height: 2, width: '100%', backgroundColor: 'rgb(80,80,225)', marginBottom: 25}}></View>
          </View>
        )
    }

    const _RenderListFooter = () => {
      return (
        <View style={{ height: 2, width: '100%', backgroundColor: 'rgb(80,80,225)', marginTop: 25}}></View>
      )
  }
   
    return data !== '' ? (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ width: '100%'}}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={_RenderListHeader}
          ListFooterComponent={_RenderListFooter}
          initialNumToRender={10}
          maxToRenderPerBatch={30}
        />
      </SafeAreaView>
    ) : (
      <Text style={styles.title}>Aucune donnée à afficher</Text>
    );
  
}

export function Exo10 () {
    return (
      <CustomButton onPress={() => createButtonAlert('hahaha')} text={'click me !'} icon={<Fontisto name="smiley" size={24} color="white" style={{marginLeft: 10}} />} />
    )
}

export function Exo11 () {
    const [count, onChangeCount] = React.useState(0);
    let icon = <View style={{padding: 10, borderRadius: 100, backgroundColor: '#fff', marginLeft: 15}}><AntDesign name="plus" size={24} color="rgb(80,80,225)" /></View>
  
    return (
      <View>
        <Text style={styles.title}>{'Vous avez cliqué ' + count + ' fois'}</Text>
        <CustomButton onPress={() => onChangeCount(count + 1)} text={'click me !'} icon={icon} />
      </View>
      )
}

export function Exo12() {
    return (
        <LifeCycle text={'click me !'} />
    )
}

export const exos = [<Exo1 />, <Exo2 />, <Exo3 onPress={() => createButtonAlert('Bonjour !')} text="Custom button"/>, <Exo4 />, <Exo5 />, <Exo6 />, <Exo7 />, <Exo8 />, <Exo9 />, <Exo10 />, <Exo11 />, <Exo12 />]

const styles = StyleSheet.create({
    square: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 77,
      width: 77,
      padding: 10,
      marginBottom: 20
    },
    btnBack: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'rgb(80,80,225)'
    },
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center'
    },
    textInput: { 
      width: '100%',
      height: 55,
      padding: 10,
      marginVertical: 10,
      backgroundColor: 'rgba(80,80,225,.1)', 
      borderColor: 'gray', 
      borderWidth: 1, 
      color: 'rgb(80,80,225)',
      fontFamily: 'Montserrat-Bold',
      borderRadius: 7
    },
    title: { 
      fontFamily: 'Montserrat-Bold', 
      fontSize: 22, 
      textAlign: 'center', 
      marginBottom: 25
    }
  })