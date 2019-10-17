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
    txtSelected: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,        
        justifyContent: 'center',
        alignItems: 'center',
      },
    btnSelected: {
        flex: 1,
        backgroundColor:'blue' ,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtNotSelected: {
        alignSelf: 'center',
        color: 'blue',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNotSelected: {
        flex: 1,
        backgroundColor:'white' ,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subHeaderText: {
        color: 'blue',
        fontSize: 15
    }
}