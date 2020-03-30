import React, { useState, useEffect } from 'react';
import { useNavigation} from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'



import imgLogo from '../../assets/logo.png';
import styles from './style'
import api from '../../services/api';


export default function Incidents(){

    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total , setTolal] = useState(0);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    function NavigatetoDetail( incident ) {
        navigation.navigate('Details', {incident});
    }

    async function loadIncidents() {
        if(loading){
            return
        };
        if(total > 0 & incidents.length == total){
            return
        }

        const response = await api.get('incidents');
        

        setLoading(true);
        setIncidents([...incidents, ...response.data]);
        setTolal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    };

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imgLogo} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} casos</Text>
                </Text>
            </View>
            <Text style={styles.titleText} >Bem-Vindo!</Text>
            <Text style={styles.descriptionText}>Escolha um dos casos abaixo e salve o dia.</Text>
        

        <FlatList 
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.1}
       
        renderItem={({ item: incident }) => (
            
                <View style={styles.incidents}>
                    <Text style={styles.incidentsProperty}>ONG:</Text>
                    <Text style={styles.incidentsValue}>{incident.name}</Text>

                    <Text style={styles.incidentsProperty}>CASO:</Text>
                    <Text style={styles.incidentsValue}>{incident.title}</Text>

                    <Text style={styles.incidentsProperty}>Valor:</Text>
                    <Text style={styles.incidentsValue}>
                        {Intl.NumberFormat('pt-br', {
                             style:'currency',
                             currency:'BRL'
                        }).format(incident.value)}
                    </Text>
                    <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={() =>NavigatetoDetail(incident)}>
                        <Text style={styles.detailsButtonText}>Ver mais Detalhes </Text>
                        <Feather name="arrow-right" size={16} color={"#E02041"} />
                    </TouchableOpacity>
                </View>
            
        )} />
        </View>
        
        
    );
}