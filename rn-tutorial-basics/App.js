import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import ProductsScreen from './src/screens/productsScreen/ProductsScreen';

export default function App() {
  const arr = [1, 2, 3, 4];
  console.log(Platform);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={'orange'} />
      <View style={styles.container}>
        <ProductsScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : 0,
  },
});
