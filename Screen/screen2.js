import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Screen2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.smallContainer}><Text>tttttt</Text></View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4E8E1',
  },
  smallContainer: {
    paddingTop: 76,
    paddingBottom: 10,
    paddingLeft: 11,
    paddingRight: 11,
    backgroungColor: "#A6D2EB",
    borderRadius: 10
  },


});
export default Screen2; 
