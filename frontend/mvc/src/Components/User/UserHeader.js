import React from 'react'
import { UserHeaderNav } from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

export const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/conta/cadastrarProduto':
        setTitle('Novo cadastro')
        break
      case '/conta/pesquisarProduto':
        setTitle('Ítens cadastrados')
        break
      default:
        setTitle('Home Sistema')
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title" >{title}</h1>
      <UserHeaderNav />

    </header>
  )
}
