import React from 'react'
import styles from '../../ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Pagination from '../../ui/dashboard/pagination/pagination'
import Search from '../../ui/dashboard/search/search'
import { FetchUsers } from '../../lib/data'
import { deleteUser } from '../../lib/actions'



const Userspage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await FetchUsers(q, page);

  // console.log('====================================');
  // console.log(count);
  // console.log('====================================');

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for user....' />

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
            // console.log('====================================');
            // console.log(user);
            // console.log('====================================');

            <tr key={user.id}>
              <td><div className={styles.user}>
                <img className={styles.userimage} src={user.img || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="user" width="40" height="40" />
                {user.username}
              </div></td>

              <td>{user.email}</td>
              <td>{user.createdAt?.toString()}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>

                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default Userspage