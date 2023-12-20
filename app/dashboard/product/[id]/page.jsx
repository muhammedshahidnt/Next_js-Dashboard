import React from 'react'
import styles from '../../../ui/dashboard/product/singleproduct/singleproduct.module.css'
import { FetchProduct } from '../../../lib/data'
import { updateProduct } from '../../../lib/actions'

const Singleproduct = async ({ params }) => {
    const { id } = params;

    const product = await FetchProduct(id);
    // console.log('====================================');
    // console.log(product);
    // console.log('=========a===========================');
  
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <div className={styles.imagecontainer}>
                    <img src={product.img ||"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} width="100%" height="300" alt="user" />
                </div>
                {product.title}
            </div>
            <div className={styles.formcontainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden" name='id'  value={product.id}/>
                    <label > Title</label>
                    <input type="text" name='title' placeholder=   {product.title} />
                    <label > Price</label>
                    <input type="number" name='price' placeholder={product.price} />
                    <label > Stock</label>
                    <input type="number" name='stock' placeholder={product.stock} />
                    <label > Color</label>
                    <input type="text" name='color' placeholder={product.color} />
                    <label > Size</label>
                    <textarea type="text" name='size' placeholder={product.size} />
                    <label >Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="Computer">Computer</option>
                    </select>
                    <label >Discription</label>
                    <textarea name="desc" id="desc" rows="10" placeholder={product.desc}></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Singleproduct