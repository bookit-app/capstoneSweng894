import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonCustom = ({ onPress, children, buttonStyle, textStyle,text}) => {
return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} text={text}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export {ButtonCustom}
