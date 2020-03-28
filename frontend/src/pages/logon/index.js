import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { FiLogIn } from 'react-icons/fi'

import HeroesImg from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'
import  '../../global.css'
import './style.css'

export default function Logon() {
    const [id , setId] = useState();
    const history = useHistory();
    
    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await api.post('sessions', { id });
            console.log(response.data.name)

            localStorage.setItem('ongName', response.data.name);
            localStorage.setItem('ongId', id);
            
            history.push('/profile');


        } catch{
            alert('Erro no login, Tente novamente.')
        }
    }
    

    return (
        <div className="logon-container">

            <section className="form">
                <img src={Logo} alt="logo"/>
                <form onSubmit={handleLogin}>

                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        vallue={id}
                        onChange={e => setId(e.target.value)}
                        
                    />

                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="./Register">
                        <FiLogIn size={18} color={"#E02021"} />
                        Cadastra-se já
                </Link>

                </form>

            </section>

            <img src={HeroesImg} alt="heroes" />
        </div>


    );
}