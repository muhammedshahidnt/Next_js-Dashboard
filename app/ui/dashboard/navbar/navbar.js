"use client"
import React from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import {
  MdSearch,
  MdOutlineChat,
  MdNotificationsActive,
  MdPublic

} from "react-icons/md";


const Navbar = () => {
  const pathname = usePathname()
  // console.log('====================================');
  // console.log(pathname);
  // console.log('====================================');
  return (
    <div className={styles.container}>
      <div className={styles.tintle} >{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder='search...' />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotificationsActive size={20} />
          <MdPublic size={20} />

        </div>
      </div>
    </div>
  )
}

export default Navbar