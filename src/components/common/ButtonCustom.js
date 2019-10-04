import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonCustom = ({ onPress, children, buttonStyle, textStyle }) => {
return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export {ButtonCustom}
