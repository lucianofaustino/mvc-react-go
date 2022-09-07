import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Formulario/Button'
import { Input } from '../Formulario/Input'
import { useFormulario } from '../../Hooks/useFormulario'
import { UserContext } from '../../UserContext'

export const LoginFormulario = () => {
    const username = useFormulario()
    const password = useFormulario()

    const { userLogin, error, loading } = React.useContext(UserContext)

    async function handleLogin(event) {
        event.preventDefault()

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleLogin}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )}
                {error && <p>{error}</p>}
            </form>
            <Link to='/login/cadastrar'>Cadastrar</Link>
        </section >
    )
}