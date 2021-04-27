import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function App() {
  const[facts, setFacts] = useState([])
  const[count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
      .then((response) => response.json())
      .then((json) => setFacts(json.map(cat => cat.text)))
      .catch((error) => console.error(error))
  }, []);

  console.log(facts)
  return (
    <SafeAreaView style={styles.container}>
      <Text>{facts[count]}</Text>
      <StatusBar style="auto" />
      <Button title='Next Fact' onPress ={() => count == 4 ? setCount(0) : setCount(count + 1)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
