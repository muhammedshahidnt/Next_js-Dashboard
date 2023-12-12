import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Lama Dev
            </div>
            <div className={styles.text}>
                All rights reseved
            </div>
        </div>
    )
}

export default Footer