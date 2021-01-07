//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
 

//Create custom components
const App = () => {

  //Declare variable
  //var counter = 0;
  const [color, setColor] = useState('black');
  
  return (
    <View style={styles.container}>
      <Text style = {{color: color}}>Current Count</Text>
      <Button title="Change color"
      onPress={()=>{
        //counter++;
        setColor('rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
        console.log(color);
      }}
      />
      {/* <Button title="Decrement"
      onPress={()=>{
        //counter--;
        setCounter(counter - 1);
        console.log(counter);
      }}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

//Export 
export default App;

//Apply Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
