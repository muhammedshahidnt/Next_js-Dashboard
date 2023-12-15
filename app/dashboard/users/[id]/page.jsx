import React from 'react'
import styles from '../../../ui/dashboard/users/singleuser/singleuser.module.css'

const Singleuser = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infocontainer}>
            <div className={styles.imagecontainer}>
            <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="  width="100%" height="300"  alt="user" />
            </div>
            Shahid
        </div>
        <div className={styles.formcontainer}>
            <form action="" className={styles.form}>

            <label > Username</label>
            <input type="text" name='username' placeholder='Shahid' />
            <label > Email</label>
            <input type="email" name='email' placeholder='shahid@gmail.com' />
            <label > Password</label>
            <input type="password" name='password' placeholder='Shahid' />
            <label > Phone</label>
            <input type="text" name='phone' placeholder='+25698314' />
            <label > Address</label>
            <textarea type="text" name='address' placeholder='New York' />
            <label > is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label > is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option></select>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Singleuser