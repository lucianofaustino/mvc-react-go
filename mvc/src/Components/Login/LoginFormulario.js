import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Formulario/Button'
import { Input } from '../Formulario/Input'


export const LoginFormulario = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleLogin(event) {
        event.preventDefault()
        fetch('#', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((json) => {
                console.log(json)
            })
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleLogin}>
                <Input label="Usuário" type="text" name="username" />
                <Input label="Senha" type="password" name="password"  />
                <Button disabled  >Entrar</Button>
            </form>
            <Link to='/login/cadastrar'>Cadastrar</Link>
        </section>
    )
}
