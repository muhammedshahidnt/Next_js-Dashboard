"use client";
import React from 'react';
import styles from './menulink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menulink = ({ item }) => {
    const pathname = usePathname()
    // console.log('====================================');
    // console.log(pathname);
    // console.log('====================================');
    return (
        <div>
            <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
                  {item.icon}
                  {item.title}
            </Link>
        </div>
    );
};

export default Menulink;
