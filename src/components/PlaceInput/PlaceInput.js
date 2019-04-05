import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

// const PlaceInput = ({ placeName }) => (
class PlaceInput extends React.Component {
  state = {
    placeName: '',
  };

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
    const { placeName } = this.state;
    const { onPlaceAdded } = this.props;

    if (placeName.trim() === '') {
      return;
    }

    onPlaceAdded(placeName);
  };

  render() {
    const { placeName } = this.state;

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Enter any city name"
          value={placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={(this.placeSubmitHandler)}
        />
      </View>
    );
  }
}

export default PlaceInput;
