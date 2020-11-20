import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Exercice from './components/exercice/ExerciceScreen';
import ExerciceList from './components/exercice/ExerciceList';



function HomeScreen({ navigation }) {
  return (
    <ExerciceList navigation={navigation} />
  );
}

function ExerciceScreen({ navigation, route }) {
  return (
    <Exercice navigation={navigation} route={route} />
  )
}

const Stack = createStackNavigator();

function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-ExtraBold': require('./assets/Montserrat/Montserrat-ExtraBold.ttf')
  });

  let headerTitleStyle = { fontFamily: 'Montserrat-ExtraBold', fontSize: 18 };
  let headerTitle = ( title ) => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <MaterialCommunityIcons name="shield-home" size={30} color="rgb(80,80,225)" />
      <Text style={[headerTitleStyle, {marginLeft: 10}]}>{title}</Text>
    </View>
  )

  return fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: headerTitle('Liste des exercices') }} />
        <Stack.Screen name="Exercice" component={ExerciceScreen} options={{ headerTitleStyle: headerTitleStyle, headerBackTitleStyle: headerTitleStyle }} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

export default App;