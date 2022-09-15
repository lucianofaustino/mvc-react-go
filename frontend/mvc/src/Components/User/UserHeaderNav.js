import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useMedia } from '../../Hooks/useMedia'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'


export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);


  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive
            }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive
          }`}
      >
        <NavLink to="/conta/cadastrarProduto">Cadastrar produto</NavLink>
        <NavLink to="/conta/pesquisarProduto">Pesquisar produto</NavLink>
        <button onClick={userLogout}>Sair</button>
      </nav>
    </>

  )
}
