import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.myPress}>
      <Text style={styles.textStyle}>{props.myTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#40739e',
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export {MyButton};
