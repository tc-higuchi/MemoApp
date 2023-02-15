// eslint-disable-next-line no-unused-vars
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { string, shape } from 'prop-types';

export default function CircleButton(props) {
  // eslint-disable-next-line react/prop-types
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonlabel}>{children}</Text>
    </View>
  );
}

CircleButton.props = {
  children: string.isRequired,
  style: shape(),
};

CircleButton.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 25,
    bottom: 40,

    // IOSしか対応していない
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    // Andoroidしか対応していない
    elevation: 8,
  },

  circleButtonlabel: {
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 30,
}
});
