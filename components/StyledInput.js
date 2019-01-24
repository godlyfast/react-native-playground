import React from 'react';
import { Text, Input } from 'react-native';

export default class StyledInput extends React.Component {
  render() {
    return <View style={{
        // borderLeftWidth: 4,
        // borderRightWidth: 4,
        marginTop: 10,
        // padding: 100,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 50,
        height: 70
    }}>
    <TextInput
      style={{height: 100, flex: 1, marginLeft: 10, fontSize: 30}}
      placeholder="INPUT YOUR TEXT HERE!!"
      onChangeText={(text) => this.setState({text})}
    />
  </View>
  }
}
