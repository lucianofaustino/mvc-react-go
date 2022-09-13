import React from 'react'
import { UserHeader } from './UserHeader'
import { Routes, Route } from 'react-router-dom';
import { UserCadastrarProduto } from './UserCadastroProduto';
import { UserPesquisarProduto } from './UserPesquisarProduto';


export const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes >
                <Route path="CadastrarProduto" element={<UserCadastrarProduto />} />
                <Route path="PesquisarProduto" element={<UserPesquisarProduto />} />
            </Routes>
        </section>
    )
}
