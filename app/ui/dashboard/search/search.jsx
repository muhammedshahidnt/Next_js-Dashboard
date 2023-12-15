"use client"
import React from 'react'
import styles from './search.module.css'
import { usePathname,useSearchParams, useRouter } from 'next/navigation';
import { MdSearch } from "react-icons/md";


const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handlesearch = ( term) => {
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set('query',term);
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`);



        // console.log('====================================');
        // console.log(params);
        // console.log('====================================');
    }

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={(e) => {handlesearch(e.target.value)}} 
            defaultValue={searchParams.get('query')?.toString} />

        </div>
    )
}

export default Search