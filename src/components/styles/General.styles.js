export default {
    Row: {
        display: 'flex',
        flexDirection: 'row',
    },
    Column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10
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
        // color: 'blue',
        textAlign:'center',
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        margin: 5,
        backgroundColor:  '#ffffff'
    },
    errorTextStyle: {
        fontSize: 10,
        alignSelf: 'center',
        color: 'red',
        backgroundColor:  '#ffffff',
        justifyContent: 'center'
      },
  generalStyle: {
    color: '#000',
    backgroundColor:  '#ffffff',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 20,
    fontSize: 18,
    lineHeight: 3,
    flex: 2
  }
}