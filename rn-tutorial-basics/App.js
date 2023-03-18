import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/component/Button';
export default function App() {
  const arr = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <Text>Subscribe to Coding Every Day & Hit the like button</Text>
      <MyButton title={'Subscribe'} />
      <Text>Like btn</Text>
      <MyButton title={'Like'} />
      <Text>share btn</Text>
      <MyButton title={'Share'} />
      <View>
        {arr.map((ele) => (
          <Text>{ele}</Text>
        ))}
      </View>
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
