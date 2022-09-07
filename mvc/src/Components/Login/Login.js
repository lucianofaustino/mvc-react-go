import React from 'react'
import styles from './Login.modules.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginFormulario } from './LoginFormulario'
import { LoginCadastrar } from './LoginCadastrar'
import { LoginPerdeuSenha } from './LoginPerdeuSenha.js'
import { UserContext } from '../../UserContext'


export const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />  
  return (
    <div className={`${styles.login} container`} >
      <Routes >
        <Route path="/" element={<LoginFormulario />} />
        <Route path="/cadastrar" element={<LoginCadastrar />} />
        <Route path="/perdeu" element={<LoginPerdeuSenha />} />
      </Routes>
    </div >
  )
}
