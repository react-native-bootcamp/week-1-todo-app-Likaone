import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {MyInput, MyButton, ListItem} from './components';

const Todo = () => {
  const [entry, setEntry] = useState('');
  const [list, setList] = useState([]);

  changeText = text => {
    setEntry(text);
  };

  addToList = () => {
    let newList = [list];
    newList.push({myEntry: entry});
    setList(newList);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={({item}) => <ListItem data={item} />}
          />
          <MyInput
            textChange={changeText}
            myPlace="Yapmak istediginizi yazin"
          />
          <MyButton myTitle=" Listeye Ekle " myPress={addToList} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listStyle: {
    flex: 1,
    backgroundColor: '#ff7979',
    width: Dimensions.get('window').width / 2,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    fontSize: 15,
  },
  doneStyle: {
    backgroundColor: '#6ab04c',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
});

export default Todo;
