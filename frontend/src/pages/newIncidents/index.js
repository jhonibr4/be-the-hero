import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import api from '../../services/api'

import './style.css';

export default function Incident(){

    const ongId = localStorage.getItem('ongId')
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleIncents(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
        try{
        const response = await api.post('incidents', data,{
            headers:{
                Authorization:ongId
            }
        })
        history.push('/profile')
        console.log(response)
        } catch(err){
            alert('Erro ao cadastrar caso, tente novamente.')
        }

    }

    return(
        <div className="incidents-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Logotipo"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to='../Profile'>
                        <FiArrowLeft size={16} color={"#E02021"}/>
                        Voltar para a home
                    </Link>
                </section>

                <form onSubmit={handleIncents}>
                    <input placeholder="Titulo do Caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                    <textarea  placeholder="Descrição" 
                    title={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor em Reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                    
                    <button type="submit" className="button" >Cadastrar</button>

                </form>
            </div>
        </div>
    );
}