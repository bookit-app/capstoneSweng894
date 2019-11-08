import React from 'react'
import { View, FlatList} from 'react-native'
import { SafeAreaView } from 'react-navigation'

const AppointmentList = (props) => {
    // console.log('AppointmentList currentData', props.currentData);
    // console.log('AppointmentList extraData', props.extraData);
    // console.log('AppointmentList renderItem', props.renderItem);
    // console.log('AppointmentList listHeader', props.listHeader);
    // console.log('AppointmentList', props);
    
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    contentContainerStyle={{ width: '98%'}}
                    scrollEnabled={props.scrollEnabled}
                    data={props.currentData}
                    extraData={props.extraData}
                    renderItem={props.renderItem}
                    ListHeaderComponent={props.listHeader}
                    ListEmptyComponent={props.listEmpty}
                    ItemSeparatorComponent={props.separator}
                    keyExtractor={item => item.aid}
                    onEndReachedThreshold={0.1}
                    initialScrollIndex={0}
                    // onEndReached={props.onEndReached}
                />
            </View>
        </SafeAreaView>
    )
}

export {AppointmentList}