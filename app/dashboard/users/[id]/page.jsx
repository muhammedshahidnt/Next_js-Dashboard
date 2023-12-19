import React from 'react'
import styles from '../../../ui/dashboard/users/singleuser/singleuser.module.css'
import { FetchUser } from '../../../lib/data';
import { updateUser } from '../../../lib/actions';
const Singleuser = async ({params}) => {
    const {id} = params;
    const user = await FetchUser(id);
    
  return (
    <div className={styles.container}>
        <div className={styles.infocontainer}>
            <div className={styles.imagecontainer}>
            <img src={user.img ||"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="}  width="100%" height="300"  alt="user" />
            </div>
            {user.username}
        </div>
        <div className={styles.formcontainer}>
            <form action={updateUser} className={styles.form}>
            <input type="hidden"  name='id' value={user.id}/>
            <label > Username</label>
            <input type="text" name='username' placeholder={user.username}/>
            <label > Email</label>
            <input type="email" name='email' placeholder={user.email} />
            <label > Password</label>
            <input type="password" name='password' placeholder={user.password} />
            <label > Phone</label>
            <input type="text" name='phone' placeholder={user.phone} />
            <label > Address</label>
            <textarea type="text" name='address' placeholder={user.address} />
            <label > is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true} selected={user.isAdmin}>Yes</option>
                <option value={false} selected={!user.isAdmin}>No</option>
            </select>
            <label > is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true} selected={user.isActive}>Yes</option>
                <option value={false} selected={user.isActive}>No</option></select>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Singleuser