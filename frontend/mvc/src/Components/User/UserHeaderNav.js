import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'


export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta/cadastrarProduto">Cadastrar produto</NavLink>
      <NavLink to="/conta/pesquisarProduto">Pesquisar produto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  )
}
