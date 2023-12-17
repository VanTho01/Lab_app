import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Screen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style = {styles.button}><Text style = {styles.titleButton}>Scanner</Text></TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4E8E1',
  },
  button: {
    width: 182,
    height: 61,
    flex: 0,
    borderRadius: 10,
    backgroundColor: "#E19191",
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 370,
    marginTop: 370
  },
  titleButton: {
    fontSize: 24,
    paddingLeft: 62,
    paddingRight: 62,
    paddingBottom: 16,
    paddingTop: 16


  }


});
export default Screen1; 
