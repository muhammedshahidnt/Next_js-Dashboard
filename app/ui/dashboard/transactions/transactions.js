import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Amound</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>

                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" width="50" height="50" className={styles.image} />

                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Prnding</span>
            </td>
            <td>
              20.05.2004
            </td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>

                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" width="50" height="50" className={styles.image} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>
              20.05.2004
            </td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>

                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" width="50" height="50" className={styles.image} />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>
              20.05.2004
            </td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions