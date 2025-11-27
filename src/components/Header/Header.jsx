import { useState } from "react"
import styles from "./Header.module.css"
export default function Header(){
    const [open,setOpen]=useState(false);
    return <header className={styles.header}>
        <div className={styles.logo}>My Website</div>
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
        </div>
        <nav className={`${styles.nav} ${open ? styles.open: ''}`}>
            <ul className="">
                <li><a href="/">Packages</a></li>
                <li><a href="/">Packages</a></li>
                <li><a href="/">Packages</a></li>
                <li><a href="/">Packages</a></li>
                <li><a href="/">Packages</a></li>
                <li><a href="/">Packages</a></li>
            </ul>
        </nav>
    </header>
}