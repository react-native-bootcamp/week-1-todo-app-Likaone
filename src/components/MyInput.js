import React from 'react';
import {StyleSheet, Dimensions, TextInput, View} from 'react-native';

const MyInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType={props.type}
        autoCapitalize="none"
        placeholder={props.myPlace}
        onChangeText={props.textChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#d4d7d8',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    width: Dimensions.get('window').width,
  },
});
export {MyInput};
