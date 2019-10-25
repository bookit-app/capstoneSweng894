import React from 'react';
import { Platform, TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, error }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

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
        textAlign={'center'}
        onChangeText={onChangeText}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#00000',
    backgroundColor:  '#fff',
    fontSize: 18,
    lineHeight: 3,
    flex: 2,
    width: 293,
    height: 38,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    //marginTop: 100,

  },
  labelStyle: {
    fontSize: 16,
    flex: 1
  },
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    backgroundColor:  '#ffffff',
    alignItems: 'flex-start'
  },
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

export { Input };
