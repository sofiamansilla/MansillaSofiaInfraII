
import React, { useState } from 'react'
import { Card } from '../Card'
import './Form.style.css'


/**
 * 
 * @return {React.Component} A form component with two inputs and a submit button
 */

export const Form = () => {

    const [user, setUser] = useState({
        name: '',
        game: '',
        console: ''
    })
 

    const [showSuccess, setShowSuccess] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
   
        if(user.name.length >= 3 && user.name[0]!=" "){
            setShowSuccess(true)
            setHasError(false)
        } else {
            setHasError(true)
        }
    }

    const onChangeName = (e) => {
        setUser({
            ...user,
            name: e.target.value
        })

    }

    const onChangeGame = (e) => {
        setUser({
            ...user,
            game: e.target.value
        })

    }

    const onChangeConsole = (e) => {
        setUser({
            ...user,
            console: e.target.value
        })

    }


  return (
    <div className='form-component'>
        {!showSuccess &&
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='name' onChange={onChangeName}/>
                <input type="text" placeholder='game' onChange={onChangeGame} />
                <input type="text" placeholder='console' onChange={onChangeConsole}/>
                <button>Enviar</button>
            </form>
        }
        {showSuccess ? 
            <>
                <Card name={user.name} game={user.game} console={user.console}/>           
            </>
        : <p>Cuentanos cual es tu juego favorito y en que consola es desplegado.</p>}
        {hasError ? <p style={{color: 'red'}}>Debe colocar la información correctamente</p> : null}
    </div>
  )
}

