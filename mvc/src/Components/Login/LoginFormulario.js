import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Formulario/Button'
import { Input } from '../Formulario/Input'
import { useFormulario } from '../../Hooks/useFormulario'
import { TOKEN_POST, USER_GET } from '../../api'

export const LoginFormulario = () => {
    const username = useFormulario()
    const password = useFormulario()

    React.useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            getUser(token);
        }
    }, [])

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
    }

    async function handleLogin(event) {
        event.preventDefault()

        if (username.validate() && password.validate()) {
            const { url, options } = TOKEN_POST({
                username: username.value,
                password: password.value,
            });

            const response = await fetch(url, options);
            const json = await response.json();
            window.localStorage.setItem('token', json.token);
            getUser(json.token);
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