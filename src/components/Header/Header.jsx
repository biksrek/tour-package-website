import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import Button from "../Button.jsx/Button";
export default function Header(){
    const [open,setOpen]=useState(false);
    const[scrolled,setScrolled]=useState(false);
    useEffect(()=>{
    function handleScrolled (){
        setScrolled(window.scrollY>50)
    }
    window.addEventListener("scroll",handleScrolled)
    return ()=>{
        window.removeEventListener("scroll",handleScrolled)
    }
    })

    return <header className={`${styles.header} ${scrolled ? styles.scroll :""}`}>
        <div className={styles.logo}>My Website</div>
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
        </div>
        <nav className={`${styles.nav} ${open ? styles.open: ''}`}>
            <ul className="">
                <li><a href="#">Packages</a></li>
                <li><a href="#">Custom Tours</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Theme</a></li>
                <li><Button text="Book Now" onClick={()=>{}}/></li>
            </ul>
        </nav>
    </header>
}