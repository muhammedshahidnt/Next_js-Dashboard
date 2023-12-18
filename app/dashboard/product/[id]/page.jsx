import React from 'react'
import styles from '../../../ui/dashboard/product/singleproduct/singleproduct.module.css'

const Singleproduct = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <div className={styles.imagecontainer}>
                    <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" width="100%" height="300" alt="user" />
                </div>
                Iphone
            </div>
            <div className={styles.formcontainer}>
                <form action="" className={styles.form}>
                    <label > Title</label>
                    <input type="text" name='title' placeholder='Shahid' />
                    <label > Price</label>
                    <input type="number" name='price' placeholder='shahid@gmail.com' />
                    <label > Stock</label>
                    <input type="number" name='stock' placeholder='22' />
                    <label > Color</label>
                    <input type="text" name='color' placeholder='red' />
                    <label > Size</label>
                    <textarea type="text" name='size' placeholder='New York' />
                    <label >Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="Computer">Computer</option>
                    </select>
                    <label >Discription</label>
                        <textarea name="desc" id="desc"  rows="10" placeholder='Discription'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Singleproduct