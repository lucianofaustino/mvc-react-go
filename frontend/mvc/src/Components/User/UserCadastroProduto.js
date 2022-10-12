import React from 'react'
import styles from './UserCadastroProduto.module.css'
import { useFormulario } from '../../Hooks/useFormulario'
import { useNavigate } from 'react-router-dom'
import { Input } from '../Formulario/Input'
import { Error } from '../Ajuda/Error'
import { Loading } from '../Ajuda/Loading'
import { Button } from '../Formulario/Button'
import { useFetch } from '../../Hooks/useFetch'
import { PRODUTO_POST } from '../../api'

export const UserCadastrarProduto = () => {

const nome = useFormulario()
const quantidade = useFormulario('number') 
const descricao = useFormulario('text') 

const { data, error, loading, request } = useFetch()
const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        const { url, options } = PRODUTO_POST({
            nome: nome.value,
            quantidade: quantidade.value,
            descricao: descricao.value,
        })

        const { response } = await request(url, options)
    }

    // if (error) return <Error error={error} />
    // if (loading) return <Loading />
    // if (data)

    return (
        <section className={`${styles.UserCadastroProduto} formulario`}  >

            {/* <h2>Formulário de cadastro de produto</h2> */}

            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Quantidade" type="number" name="quantidade" {...quantidade} />

                {loading ? (
                    <Button disabled>Enviando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}
                <Error error={error} />

            </form>

        </section>
    )
}
