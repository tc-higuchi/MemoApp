import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonlabel}>{children}</Text>
    </View>
  );
}

CircleButton.props = {
  children: string.isRequired,
};

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
