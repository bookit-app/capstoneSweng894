export default { 
    Row: {
        display: 'flex',
        flexDirection: 'row'
    },
    Column: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10
    },
    subHeaderText: {
        color: 'blue',
        fontSize: 15
    },
    inputStyle: {
        color: '#000',
        backgroundColor:  '#ffffff',
        fontSize: 18,
        lineHeight: 3,
        flex: 2,
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
            height: 10,
            width: 5,
        },
        elevation: 3,
    },
    labelStyle: {
        fontSize: 18,
        color: 'blue',
        textAlign:'left'
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        margin: 5,
        backgroundColor:  '#ffffff'
    },
    RowBtn: {
        flexDirection: 'row',
        paddingBottom: 15,
        alignItems: 'stretch'
    } 
}