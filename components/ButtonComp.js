import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

export default class CustomButton extends React.Component {

  constructor(props) {
    super(props);
  }
  render() { 
    return (
            <TouchableOpacity
                onPress={this.Props.onPress}
                style={styles.touchable}>
                <Text style={styles.txt}>{this.Props.text}</Text>
                {this.Props.icon}
            </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = { text: PropTypes.string.isRequired, onPress: PropTypes.func.isRequired, icon: PropTypes.object };