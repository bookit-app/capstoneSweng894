import React from 'react'
import { Platform, Picker, PickerIOS, View, Text } from 'react-native'

const PickerList = ({ label, value, onChangeText, list }) => {
    const { labelStyle, containerStyle } = styles   

    const PickerRender = () => {     
        // console.log('PickerRender',list);
          
        if(Platform.OS === 'ios'){
            return (
                <PickerIOS
                    selectedValue={value}
                    onValueChange={onChangeText}
                >
                 {list.map( (item) => {
                        return <PickerIOS.Item 
                            key={item.Id}
                            label={item.Name}
                            value={item.Value}
                        />
                    })
                 }
                </PickerIOS>
            )
        } else {
            return (
                <Picker
                    selectedValue={value}
                    onValueChange={onChangeText}
                >
                    {list.map((item) => {
                            return <Picker.item
                                key={parseInt(item.Id)}
                                label={item.Name}
                                value={item.Value}
                            />
                        })
                    }
                </Picker>
            )
        }
    };

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            {/* <PickerRender /> */}
            {/* {PickerRender()} */}
            
            <Picker
                    selectedValue={value}
                    onValueChange={onChangeText}
                >
                    {list.map((item) => {
                            return <Picker.item
                                key={parseInt(item.Id)}
                                label={item.Name}
                                value={item.Value}
                            />
                        })
                    }
                </Picker>
        </View>
    )
}

const styles = {
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
}

export {PickerList}