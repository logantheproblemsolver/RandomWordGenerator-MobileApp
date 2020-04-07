import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Generator from './Generator';

class RandomWordGenerator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Random Word Generator! 🤘🏼</Text>
        <Generator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 150,
  },
});

export default RandomWordGenerator;
