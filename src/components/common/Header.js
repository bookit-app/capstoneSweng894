// Import libraries fro makig a Component
import React from 'react';
import { Text, View, Platform } from 'react-native';

// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        height: 60
      },
      android: {
        elevation: 2,
        position: 'relative',
        height: 50
      }
    })
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of App
export { Header };
