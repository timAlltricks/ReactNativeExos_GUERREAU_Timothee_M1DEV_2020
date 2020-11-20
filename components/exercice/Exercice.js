import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Exo1, Exo2, Exo3, Exo4, Exo5, Exo6, Exo7, Exo8, Exo9, Exo10, Exo11, Exo12 } from './Exercices';

import { AntDesign } from '@expo/vector-icons';

const exos = [<Exo1 />, <Exo2 />, <Exo3 onPress={() => createButtonAlert('Bonjour !')} text="Custom button"/>, <Exo4 />, <Exo5 />, <Exo6 />, <Exo7 />, <Exo8 />, <Exo9 />, <Exo10 />, <Exo11 />, <Exo12 />]


function Exercice({ navigation, route}) {

    const [id, onChangeText] = React.useState(route.params.id);
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: id === '' ? 'Exercice' : 'Exercice n°' + id,
      });
    }, [navigation, id]);
  
    return (
      <View style={styles.container}>
        <View style={[styles.container, {padding: 10, justifyContent: 'center'}]}>
          {exos[id - 1]}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.btnBack}>
            <AntDesign name="back" size={22} color="white" />
            <Text style={{ color: '#fff', fontFamily: 'Montserrat-Bold', fontSize: 18, paddingLeft: 20 }}>Retour</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
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
  }
})

export default Exercice;