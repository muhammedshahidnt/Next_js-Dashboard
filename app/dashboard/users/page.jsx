import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search'
const Userspage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for user....' />
        <button className={styles.addbutton}>Add New</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Created</th>
            <th className={styles.th}>Role</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.user}>
              <img className={styles.userimage} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" width="40" height="40" />
              Shahid
            </div></td>
            <td>john@gmail.com</td>
            <td>10.05.2004</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>

                <Link href='/'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Userspage