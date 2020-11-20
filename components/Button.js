import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Button({ onPress, text, icon }) {
    icon = icon ? icon : null
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.touchable}>
          <Text style={styles.txt}>{text}</Text>
          {icon}
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchable: { 
        flexDirection: 'row', 
        alignItems: 'center',  
        justifyContent: 'center', 
        padding: 15, 
        backgroundColor: 'rgb(80,80,225)', 
        borderRadius: 5
    },
    txt: {
        color: '#fff', 
        fontFamily: 'Montserrat-Bold'
    }
})

export default Button;