import * as React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { exos } from './Exercices';


import { AntDesign } from '@expo/vector-icons';

function ExoItem({ id, navigation }){
    return (
      <TouchableOpacity
          onPress={() => navigation.navigate('Exercice', {id: (id + 1)})}>
          <View style={styles.listItem}>
            <Text style={{color:"white", fontWeight: 'bold', fontFamily: 'Montserrat-Bold', fontSize: 16}}>{'Exercice n°' + (id + 1)}</Text>
            <View style={{padding: 8, borderRadius: 100, backgroundColor: 'white'}}>
              <AntDesign name="arrowright" size={24} color="rgb(80,80,225)" />
            </View>
            </View>
        </TouchableOpacity>
    )
}

function ExerciceList({ navigation }) {
    return (
        <ScrollView >
            {exos.map((value, index) => {
                return <ExoItem id={index} key={index} navigation={navigation} />
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: 'rgb(80,80,225)',
      borderBottomColor: 'rgba(255,255,255,.75)',
      borderBottomWidth: 1
    }
  })

export default ExerciceList