import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import ListItem from '../ListItem/ListItem';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

const PlaceList = ({ places, onItemSelected }) => (
  <FlatList
    style={styles.listContainer}
    data={places}
    renderItem={info => (
      <ListItem
        placeName={info.item.name}
        placeImage={info.item.image}
        onItemPressed={() => onItemSelected(info.item.key.toString())}
      />
    )}
  />
);

export default PlaceList;
