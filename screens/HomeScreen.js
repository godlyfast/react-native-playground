import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { StyledText, StyledInput } from '../components/index.js';

console.log(StyledInput);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{...styles.test, backgroundColor: 'purple'}}>
            <Text style={styles.hello}>REGISTRATION</Text>
          </View>
          <StyledInput />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  test: {
    marginTop: 50,
    // width: 100,
    height: 100,
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  hello: {
    fontSize: 50,
    alignSelf: 'center',
    borderColor: 'black'

  }

});
