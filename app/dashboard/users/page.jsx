import React from 'react'
import styles from '../../ui/dashboard/users/users.module.css'
import Link from 'next/link'
// import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Pagination from '../../ui/dashboard/pagination/pagination'
import Search from '../../ui/dashboard/search/search'
import { FetchUsers } from '../../lib/data'

const Userspage = async () => {


  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const users = await res.json();

  const users = await FetchUsers();
  console.log('====================================');
  console.log(users);
  console.log('=================================');

  // console.log('==============================z======');
  // console.log(users);
  // console.log('====================================');

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for user....' />
        {/* <div>
        <Suspense key={query + currentPage} >
      </Suspense>
        </div> */}
        <Link href="/dashboard/users/add ">
          <button className={styles.addbutton}>Add New</button>
        </Link>
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
          {users.map((user) => (
            

            <tr key={user.id}>
              <td><div className={styles.user}>
                <img className={styles.userimage} src={user.img} alt="user" width="40" height="40" />
               {user.username}
              </div></td>
        
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>

                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
    ))}
    
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Userspage