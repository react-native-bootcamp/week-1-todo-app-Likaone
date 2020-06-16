import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const ListItem = props => {
  const [done, setDone] = useState(false);
  const styles = done ? doneStyles : undoneStyles;

  doneItem = () => {
    setDone(!done);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={doneItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.dot} />
        <Text style={styles.textStyle}>{props.data.myEntry}</Text>
        {done && <Text style={styles.textStyle}>Yapıldı!</Text>}
      </View>
    </TouchableOpacity>
  );
};

const doneStyles = StyleSheet.create({
  container: {
    backgroundColor: '#6a1b9a',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

const undoneStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ff8A80',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    marginLeft: 10,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export {ListItem};
