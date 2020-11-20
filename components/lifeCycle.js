import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

export default class LifeCycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentWillUnmount() {
      this.setState({count: 'bye bye !'})
  }

  render() {
    let icon = this.props.icon ? this.props.icon : null
    return (
        <View>
            <Text style={styles.title}>{'Vous avez cliqué ' + this.state.count + ' fois'}</Text>
            <TouchableOpacity
                onPress={() => this.setState({ count: this.state.count +1 })}
                style={styles.touchable}>
                <Text style={styles.txt}>{this.props.text}</Text>
                {icon}
            </TouchableOpacity>
        </View>
    )
  }

}

LifeCycle.propTypes = { text: PropTypes.string.isRequired, icon: PropTypes.object };

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
    },
    title: { 
        fontFamily: 'Montserrat-Bold', 
        fontSize: 22, 
        textAlign: 'center', 
        marginBottom: 25
      }
})