import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/component/Button';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Subscribe to Coding Every Day & Hit the like button</Text>
      <MyButton title={"Subscribe"}/>
      <Text>Like btn</Text>
      <MyButton title={"Like"}/>
      <Text>share btn</Text>
      <MyButton title={"Share"}/>
      <StatusBar style="auto" />
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
});
