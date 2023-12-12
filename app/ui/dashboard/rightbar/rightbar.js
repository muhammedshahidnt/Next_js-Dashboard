import React from 'react'
import styles from './rightbar.module.css'
import { MdPlayCircle } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgcontainer}>
          <img src="https://wallpapers.com/images/hd/cartoon-pictures-99b9skxa9r0o80xm.jpg1" alt="" fill/>

        </div>
        <div className={styles.texts}>
          <span className={styles.botification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new vertion of the admin dashboard?</h3>
         <span className={styles.subtitle}>Take 4 minutes to learn</span>
         <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
         <button  className={styles.button}>

         <MdPlayCircle />
         Watch
         </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgcontainer}>
          <img src="https://wallpapers.com/images/hd/cartoon-pictures-99b9skxa9r0o80xm.jpg1" alt="" fill/>

        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Comming Soon</span>
          <h3 className={styles.title}>How to use the new vertion of the admin dashboard?</h3>
         <span className={styles.subtitle}>Take 4 minutes to learn</span>
         <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
         <button  className={styles.button}>
         <MdPlayCircle />
         Watch
         </button>
      
        </div>
      </div>
    </div>
  )
}

export default Rightbar