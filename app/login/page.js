import React from 'react'
import styles from '../ui/login/login.module.css'
import LoginForm from "../ui/login/loginForm/loginForm";
const login = () => {
  return (
    <div className={styles.container}>
     <LoginForm />
    </div>
  )
}

export default login