import React from 'react';
import { Platform, TextInput, View, Text } from 'react-native';

const CustomInput = ({ value, onChangeText, placeholder, 
     inputStyle, containerStyle, textAlign}) => {
  return (
    <View style={containerStyle} >
      <TextInput
        placeholder={placeholder}
        underlineColorAnroid={Platform.Os === 'ios' ? '' : 'transparent'}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        textAlign={textAlign}
        onChangeText={onChangeText}
      />
    </View>
  );
};


export { CustomInput };
