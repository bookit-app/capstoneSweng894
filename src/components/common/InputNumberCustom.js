import React from 'react';
import { Platform, TextInput, View, Text } from 'react-native';

const InputNumberCustom = ({ label, value, onChangeText, placeholder, secureTextEntry, 
    error, inputStyle, labelStyle, containerStyle, errorStyle, textAlign}) => {
  return (
    <View style={containerStyle} >
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        underlineColorAnroid={Platform.Os === 'ios' ? '' : 'transparent'}
        keyboardType={Platform.OS == 'ios'? 'numbers-and-punctuation':'numeric'}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        textAlign={textAlign}
        onChangeText={onChangeText}
      />
      <Text style={errorStyle}>{error}</Text>
    </View>
  );
};


export { InputNumberCustom };