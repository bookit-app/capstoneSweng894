import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styles from '../styles/DisplayResult.styles'

const DisplayResults = (props) => {
    console.log('DisplayResults', props);
    
    if(props.errorMessage){
        return (
            <View style={styles.Column}>
                <Text style={styles.headerTxt}>{props.headerText}</Text> 
                <Text style={styles.errorFormTextStyle}>{props.noRecordsFound}</Text>
            </View>
        )
    } else {
        return (
            <SafeAreaView  style={{flex: 1}}>
                <Text style={styles.headerTxt}>{props.headerText}</Text>  
                <View style={styles.Column}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 100}}
                        data={props.currentData}
                        extraData={props.extraData}
                        renderItem={item => props.renderItem(item)}
                        keyExtractor = { item => item.providerId }
                        onEndReachedThreshold={0.1}
                        onEndReached={props.onEndReached}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export {DisplayResults}