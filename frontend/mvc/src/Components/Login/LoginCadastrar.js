import React from 'react'
import styles from './LoginCadastrar.module.css'
import { useFormulario } from '../../Hooks/useFormulario'
import { Button } from '../Formulario/Button'
import { Error } from '../Ajuda/Error'
import { Input } from '../Formulario/Input'
import { USER_POST } from '../../api'
import { UserContext } from '../../UserContext'
import { useFetch } from '../../Hooks/useFetch'


export const LoginCadastrar = () => {

  const username = useFormulario()
  const email = useFormulario('email')
  const password = useFormulario()

  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })

    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className={`animeLeft formulario ${styles.cadastro}`}>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />

      </form>
    </section >
  )
}
