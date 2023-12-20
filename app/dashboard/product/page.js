import React from 'react'
import styles from '../../ui/dashboard/users/users.module.css'
import Search from '../../ui/dashboard/search/search'
import Pagination from '../../ui/dashboard/pagination/pagination'
import { FetchProducts } from '../../lib/data'
import { deleteProduct } from '../../lib/actions'



// import Pagination from '../../ui/dashboard/pagination/pagination.module.css'
import Link from 'next/link'
const Productpage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await FetchProducts(q, page);

  // console.log('====================================');
  // console.log(products);
  // console.log('====================================');
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
          {products.map(product=>(

            <tr key={product.id}>
            <td><div className={styles.user}>
              <img className={styles.userimage}
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" width="40" height="40" />
              {product.title}
            </div></td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td></td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>

                <Link href={`/dashboard/product/${product.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <form action={deleteProduct}>
<input type="hidden" name='id' value={product.id} />
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

export default Productpage