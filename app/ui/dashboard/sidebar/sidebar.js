import React from 'react'
import styles from './sidebar.module.css'
import {
    MdDashboard,
    MdOutlineSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from "react-icons/md";
import Menulink from './menulink/Menulink';

const menuItems = [
    {
        title: "pages",
        list: [
            {

                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />

            },
            {

                title: "Users",
                path: "/dashboard/users",
                icon: <MdOutlineSupervisedUserCircle />

            },
            {

                title: "Products",
                path: "/dashboard/product",
                icon: <MdShoppingBag />

            },
            {

                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />
            },

        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            },
        ],
    }


]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>

                <img className={styles.userimage} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" width="50" height="50" />
                <div className={styles.userdetails}>

                    <span className={styles.username}>John Doe</span>
                    <span className={styles.usertitle}>Administator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {
                            cat.list.map((item) => (

                                <Menulink item={item} key={item.title} />
                            ))
                        }
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout</button>
        </div>
    )
}

export default Sidebar