import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

    export default StyleSheet.create({
    container:{
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
       
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    incidents:{
        marginTop:50,
        padding:24,
        backgroundColor:'#FFF',
        borderRadius: 8,
        marginBottom:15
    },
    incidentsProperty:{
    fontSize:14,
    color:'#41414d',
    fontWeight:'bold'
    },
    incidentsValue:{
        marginTop:8,
        marginBottom:15,
        fontSize:15,
        color:'#737380'
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonStyle:{
        backgroundColor:'#E02041',
        marginTop:15,
        width:'48%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    boxDescription:{
        backgroundColor:'#FFF',
        padding:24,
        borderRadius:8
    },
    textBox:{
    fontSize:20,
    fontWeight:'bold'
    },
    contactText:{
        marginTop:10,
        color:'#73737a'
    },
    textButton:{
        color:'#FFF'
    }
});