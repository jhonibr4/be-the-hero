import React, { useState, useEffect } from 'react';

import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './style';
import { useNavigation, useRoute  } from '@react-navigation/native';
import imgLogo from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

import api from '../../services/api';

export default function Details(){

    const navigation = useNavigation();
    const route = useRoute();
    const incidents = route.params.incident;
    const message = `Olá ${incidents.name}, estou entrando em contato pois gostaria de no caso: "Cadelinha atropelada" com o valor de R$ 150,00`
    

    function NavigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incidents.title}`,
            recipients:[`${incidents.email}`],
            body: message
        });
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incidents.whatsapp}&text=${message}`);
    }

    

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imgLogo}/>
                <TouchableOpacity onPress={NavigateBack}>
                    <Feather name="arrow-left" size={40} color={'#E02041'}/>
                </TouchableOpacity>
            </View>

            <View style={styles.incidents}>
                    <Text style={styles.incidentsProperty}>ONG:</Text>
                    <Text style={styles.incidentsValue}>{incidents.name} de {incidents.city}/{incidents.uf} </Text>

                    <Text style={styles.incidentsProperty}>CASO:</Text>
    <Text style={styles.incidentsValue}>{incidents.title}</Text>

                    <Text style={styles.incidentsProperty}>Valor:</Text>
                    <Text style={styles.incidentsValue}>
                    {Intl.NumberFormat('pt-br', {
                             style:'currency',
                             currency:'BRL'
                        }).format(incidents.value)}
                    </Text>
            </View>
            <View style={styles.boxDescription}>
                <Text style={styles.textBox}>Salve o dia!</Text>
                <Text style={styles.textBox}>Seja o herói desse caso.</Text>

                <Text style={styles.contactText}>Entre em contato:</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={sendWhatsApp}
                    >
                        <Text style={styles.textButton}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={sendMail}
                    >
                        <Text style={styles.textButton}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}