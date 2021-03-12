import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import  firebase, {Auth} from 'firebase/app';
import 'firebase/auth'

export const Recuperar = () => {

    const [usuario, setUser] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        recuperar(usuario)
        
    }

    return(
        <div className = 'row'>
        <div className ='col-md-4'>

            <form className = 'card card-bady' onSubmit = {handleSubmit}>
                <div className = 'mb-3'>
                    <label className = 'form-label'>Usuario</label>
                    <input type = 'email' className = 'form-control'
                    onChange = {e => setUser(e.target.value)}
                    value = {usuario}/>
                </div>
               
                <button type = 'submit' className = 'btn btn-primary'>Entrar</button>
            </form>

        </div>
    </div>
    )

}

function recuperar(usuario)
{
    firebase.auth().sendPasswordResetEmail(usuario).then(res => {
        alert("abra su bandeja de correo para resetear la contraseña")})
    .catch(e =>{console.log(e.message)})
}