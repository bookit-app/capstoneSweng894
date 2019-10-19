import React from 'react';
import { Platform, TextInput, View, Text } from 'react-native';

const InputCustom = ({ label, value, onChangeText, placeholder, secureTextEntry, 
    error, inputStyle, labelStyle, containerStyle, textAlign}) => {
  return (
    <View style={containerStyle} >
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        underlineColorAnroid={Platform.Os === 'ios' ? '' : 'transparent'}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        textAlign={textAlign}
        onChangeText={onChangeText}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = {
  error: {
    marginTop: 10,
    position: "absolute",
    bottom: 0,
    color: "red",
    fontSize: 10,
    textAlign: 'center',
    backgroundColor:  '#ffffff'
  }
};

export { InputCustom };
