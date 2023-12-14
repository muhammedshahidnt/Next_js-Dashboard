import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
const Productpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for Products....' />
        <Link href="/dashboard/product/add ">
          <button className={styles.addbutton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Created At</th>
            <th className={styles.th}>Stock</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.user}>
              <img className={styles.userimage}
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" width="40" height="40" />
              Iphone
            </div></td>
            <td>$999</td>
            <td>10.05.2004</td>
            <td>Admin</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>

                <Link href='/dashboard/product/view'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>

  )
}

export default Productpage