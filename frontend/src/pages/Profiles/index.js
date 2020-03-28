import React, {useState ,  useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import Logo from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile(){
    
    const [incidents, setIncidents] = useState([])

    const nameOng = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory();

    useEffect(() =>{
        api.get('profile',{
            headers:{
                Authorization:ongId,
            }
        }).then(response => {
            setIncidents(response.data)
    });
    }, [ongId])  

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
            headers:{
                Authorization:ongId
            }});
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert('Erro ao deletar, Tente novamente.')
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Logotipo"/>
                <span>Bem Vinda, {nameOng}</span>
                    
                <Link className="button" to="./incidents/new">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="submit">
                    <FiPower size={18} color="#E02021" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Caso:</strong>
                    <p>{incident.title}</p>
                    <strong>Descrição:</strong>
                    <p>{incident.description}</p>
                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-br', {style:'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type="submit">
                        <FiTrash2 size={16} color="#a8a8b3"/>
                    </button>

                </li>
                ))}
                
            </ul>


           
        </div>
    );

}