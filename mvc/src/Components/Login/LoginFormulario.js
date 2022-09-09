import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Formulario/Button'
import { Input } from '../Formulario/Input'
import { useFormulario } from '../../Hooks/useFormulario'
import { UserContext } from '../../UserContext'
import { Error } from '../Ajuda/Error'
import styles from './LoginFormulario.module.css'
import stylesBtn from '../Formulario/Button.module.css'

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
        <section className={`animeLeft ${styles.gridLoginForm}`} >
            
            <div className={styles.cadastro} >
                <h1 className={` title ${styles.subtitle} `}>Cadastre-se</h1>
                <p>Realize seu cadastro para conhecer as funcionalidades do sistema.</p>
                <Link className={stylesBtn.button} to='/login/cadastrar'>Cadastrar</Link>
            </div>

            <div className={`${styles.login} formulario`} >
                <h1 className="title">Login</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <Input label="Usuário" type="text" name="username" {...username} />
                    <Input label="Senha" type="password" name="password" {...password} />
                    {loading ? (
                        <Button disabled>Carregando...</Button>
                    ) : (
                        <Button>Entrar</Button>
                    )}
                    <Error error={error} />
                </form>
                <Link className={styles.perdeu} to="/login/perdeu">
                    Perdeu a senha?
                </Link>
            </div>
        </section >
    )
}