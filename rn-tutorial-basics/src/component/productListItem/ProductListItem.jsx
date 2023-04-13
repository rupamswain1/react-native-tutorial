import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ProductListItem = ({ id, title, price, image }) => {
  return (
    <View style={styles.productBox}>
      <View>
        <Image source={{ uri: image }} style={styles.imageDimension} />
      </View>
      <View style={styles.prodTitleBox}>
        <Text style={styles.boldText}>{title}</Text>
        <Text>
          Price:
          <Text style={styles.boldText}> Rs. {price}/-</Text>
        </Text>
        <TouchableOpacity onPress={() => console.log('clicked on ', title)}>
          <View style={styles.addToCartBtn}>
            <Text style={styles.boldText}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productBox: {
    margin: 5,

    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 15,
  },
  prodTitleBox: {
    marginLeft: 15,
    flex: 1,
  },
  boldText: {
    fontWeight: '500',
    fontSize: 15,
    marginVertical: 5,
  },
  imageDimension: {
    width: 100,
    height: 100,
    margin: 5,
  },
  addToCartBtn: {
    width: 100,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
});
export default ProductListItem;
