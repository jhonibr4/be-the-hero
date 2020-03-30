import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

    export default StyleSheet.create({
    container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight + 20,
    },
    
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        fontSize:15,
        color:'#737380'
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    titleText:{
        fontSize:30,
        marginTop:48,
        marginBottom:16,
        color:'#13131a',
        fontWeight:'bold'
    },
    descriptionText:{
        fontSize:16,
        lineHeight:24,
        color:'#737380',
    },
    incidentsList:{
        marginTop:32
    },
    incidents:{
        marginTop:15,
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
    detailsButton:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    },
    detailsButtonText:{
        color:'#E02041',
        fontSize:15
    }
});



