import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Words from './words';

class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedWord: null,
    };
  }

  wordGenerator = () => {
    let i = Math.floor(Math.random() * 12303);
    this.setState({
      generatedWord: Words[i],
    });
  };

  render() {
    return (
      <View>
        <View style={styles.generatorContainer}>
          <Text style={styles.generatedWord}>{this.state.generatedWord}</Text>
        </View>
        <TouchableOpacity onPress={this.wordGenerator}>
          <Text style={styles.touchableText}>Generate New Word</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  generatorContainer: {
    marginTop: 50,
    height: 'auto',
    width: 'auto',
  },
  generatedWord: {
    fontSize: 60,
    height: 200,
    width: 375,
    textAlign: 'center',
  },
  touchableText: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: '#F6E481',
  },
});

export default Generator;
