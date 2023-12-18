"use client"
import React from 'react'
import styles from './search.module.css'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handlesearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);

        //  console.log('====================================');
        //  console.log(params);
        //  console.log('====================================');
        params.set('page', 1);

        if (term) {
            params.set('q', term);
        } else {
            params.delete('q')
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300)

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text"
                placeholder={placeholder}
                className={styles.input}
                onChange={(e) => { handlesearch(e.target.value) }}
                defaultValue={searchParams.get('query')?.toString} />

        </div>
    )
}

export default Search