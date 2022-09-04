import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Formulario/Button'
import { Input } from '../Formulario/Input'
import { useFormulario } from '../../Hooks/useFormulario'

export const LoginFormulario = () => {

    const username = useFormulario()
    const password = useFormulario()

    function handleLogin(event) {
        event.preventDefault()

        if (username.validate() && password.validate()) {

            fetch('#', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),
            })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
                .then((json) => {
                    console.log(json)
                })
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleLogin}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button>Entrar</Button>
            </form>
            <Link to='/login/cadastrar'>Cadastrar</Link>
        </section>
    )
}