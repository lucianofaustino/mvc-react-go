import React from 'react'
import styles from './Login.modules.css'
import { Route, Routes } from 'react-router-dom'
import { LoginFormulario } from './LoginFormulario'
import { LoginCadastrar } from './LoginCadastrar'
import { LoginPerdeuSenha } from './LoginPerdeuSenha.js'


export const Login = () => {
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
