import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'

export default function Header () {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    useEffect(()=> {
        setOpen(false)
    }, [router.route])
    return (
        <div className={open? styles.navbar + " "+ styles.navbar__open: styles.navbar}>
            <div className={styles.flex__1}>
                <Link href="/"><a className={styles.nav__link +" "+ styles.logo}>LOGO</a></Link>
            </div>
            <button className={styles.flex__1 + " "+ styles.menu__btn} onClick={()=> setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="21" viewBox="0 0 40 21">
                <g id="Groupe_15" data-name="Groupe 15" transform="translate(-2611 -2520)">
                    <rect id="Rectangle_33" data-name="Rectangle 33" width="40" height="5" rx="2.5" transform="translate(2611 2520)" fill="#7a4abf"/>
                    <rect id="Rectangle_34" data-name="Rectangle 34" width="40" height="5" rx="2.5" transform="translate(2611 2528)" fill="#7a4abf"/>
                    <rect id="Rectangle_35" data-name="Rectangle 35" width="40" height="5" rx="2.5" transform="translate(2611 2536)" fill="#7a4abf"/>
                </g>
            </svg>
            </button>
            <div className={styles.flex__1}>
                <button className={styles.menu__btn} onClick={()=> setOpen(false)} style={{textAlign: "center"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45.795" height="22.024" viewBox="0 0 45.795 22.024">
                    <path id="Tracé_4" data-name="Tracé 4" d="M2610.9,2495.862l19.937,16,18.819-16" transform="translate(-2607.385 -2492.338)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"/>
                </svg>
                </button>
                <Link href="/"><a className={`${styles.nav__link} ${router.pathname === "/"? styles.nav__active: null}`}>Home</a></Link>
                <Link href="/store"><a className={`${styles.nav__link} ${router.pathname === "/store"? styles.nav__active: null}`}>Shop</a></Link>
                <Link href="/contact"><a className={`${styles.nav__link} ${router.pathname === "/contact"? styles.nav__active: null}`}>Contact</a></Link>
                <Link href="/privacy"><a className={`${styles.nav__link} ${router.pathname === "/privacy"? styles.nav__active: null}`}>Privacy</a></Link>
            </div>
        </div>
    )
}