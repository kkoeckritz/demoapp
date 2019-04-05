import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginTop: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 5,
    height: 30,
    width: 30,
  },
});

const ListItem = ({ placeName, placeImage, onItemPressed }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Image
        source={placeImage}
        style={styles.placeImage}
        resizeMode="contain"
      />
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;
