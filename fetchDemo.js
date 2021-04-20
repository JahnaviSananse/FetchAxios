import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const fetchDemo = () => {
  const [data, setData] = useState('');
  const [list, setList] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/jahnavisananse`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => setList(response.data))
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <>
      <View style={{flexDirection: 'column', backgroundColor: 'yellow'}}>
        <Text style={styles.textFont}> using fetch</Text>
        <Text style={styles.textFont}> ID : {data.id}</Text>
        <Text style={styles.textFont}> NAME : {data.name}</Text>
        <Text style={styles.textFont}> LOGIN : {data.login}</Text>
        <Text style={styles.textFont}> FOLLOWERS : {data.followers}</Text>
        <Text style={styles.textFont}> FOLLOWING : {data.following}</Text>
      </View>
      <View style={{flexDirection: 'column', backgroundColor: 'pink'}}>
        <Text style={styles.textFont}> using axios</Text>
        <Text style={styles.textFont}> UserID : {list.userId}</Text>
        <Text style={styles.textFont}> ID : {list.id}</Text>
        <Text style={styles.textFont}> TITLE : {list.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '90%',
  },
  textFont: {fontSize: 20},
});

export default fetchDemo;
