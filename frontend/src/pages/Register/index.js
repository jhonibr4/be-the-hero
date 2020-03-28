import React, { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

import Logo from '../../assets/logo.svg'
import '../../global.css'
import './style.css'

 export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
   async function handleRegister(e){
    e.preventDefault();

    const data = {
        name,
        email,
        whatsapp,
        city,
        uf
    }
    
    try{
    
    const response = await api.post('ongs', data)

    alert(`Seu ID de acesso: ${response.data.id}`)
    history.push('/')
    }
    catch(err){
        alert('Ocorreu algum erro ao cadastrar ONG, Tente novamente.')
    }
}

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Logotipo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to='../'>
                        <FiArrowLeft size={16} color={"#E02021"}/>
                        Voltar ao Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsApp(e.target.value)}
                    />
                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                            />
                        <input placeholder="UF"
                        style={{ width:80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button" >Cadastrar</button>

                </form>
            </div>
        </div>
    );
}