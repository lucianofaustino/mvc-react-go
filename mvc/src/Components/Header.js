import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../Assets/logo.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Logo - Home">
                    <Logo />
                </Link>
                <Link className={styles.login} to="/login" aria-label="login" > Login / Cadastrar</Link>
            </nav>
        </header>
    )
}
