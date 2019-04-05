import React from 'react';
import {
  View,
  Modal,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    alignItems: 'center',
  },
});

const PlaceDetail = ({ selectedPlace, onItemDeleted, onModalClosed }) => {
  let modalContent = null;
  if (selectedPlace) {
    modalContent = (
      <View>
        <Image source={selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={!!selectedPlace} onRequestClose={onModalClosed} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon name="ios-trash" size={30} color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

export default PlaceDetail;
