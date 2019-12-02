import React from 'react'
import { View, FlatList} from 'react-native'
import { SafeAreaView } from 'react-navigation'

const AppointmentList = (props) => {    
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
                    keyExtractor={props.keyExtractor}
                    onEndReachedThreshold={0.1}
                    initialScrollIndex={0}
                />
            </View>
        </SafeAreaView>
    )
}

export  {AppointmentList}