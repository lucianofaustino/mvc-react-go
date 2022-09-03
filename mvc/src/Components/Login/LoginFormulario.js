import React from 'react'
import { Link } from 'react-router-dom'


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
                <input
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)} />
                <input
                    type="text"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)} />
                <button>Entrar</button>
            </form>
            <Link to='/login/cadastrar'>Cadastrar</Link>
        </section>
    )
}