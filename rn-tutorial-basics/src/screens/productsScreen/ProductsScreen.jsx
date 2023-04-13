import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ProductListItem from '../../component/productListItem/ProductListItem';
import { prodData } from './data';
const ProductsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {prodData.map((data) => (
          <ProductListItem {...data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductsScreen;
