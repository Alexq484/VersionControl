import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const NewComp = () =>{
  return(
    
<Text>whats up Mark</Text>
    
  )
}

function AnotherComp() {
  return (
    <View style={styles.view}>
    <Text style={{color: 'white'}}>Hi alex</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! </Text>
      <StatusBar style="auto" />
      <NewComp/>
      <AnotherComp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
