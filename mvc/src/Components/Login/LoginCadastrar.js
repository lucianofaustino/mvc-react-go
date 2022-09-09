import React from 'react'
import { useFormulario } from '../../Hooks/useFormulario'
import { Button } from '../Formulario/Button'
import { Input } from '../Formulario/Input'
import { USER_POST } from '../../api'
import { UserContext } from '../../UserContext'


export const LoginCadastrar = () => {

  const username = useFormulario()
  const email = useFormulario('email')
  const password = useFormulario()

  const { userLogin } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })

    const response = await fetch(url, options)
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft formulario">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}
