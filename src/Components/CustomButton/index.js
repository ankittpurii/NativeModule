import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import propTypes from 'prop-types';

const CustomButton = ({title, onPress, journeyItem}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
  journeyItem: propTypes.shape({
    journeyId: propTypes.oneOfType([propTypes.string, propTypes.number]),
    destination: propTypes.string,
  }),
};

export default CustomButton;
