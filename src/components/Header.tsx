import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import styles from './styles/header.module.less'

const Header: FC = () => (
  <header className={styles.header}>
    <div className={`container ${styles.content}`}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" exact>
          首页
        </NavLink>
        <NavLink to="/post" exact>
          Post
        </NavLink>
      </nav>
    </div>
  </header>
)

export default Header
