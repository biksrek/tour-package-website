import Button from "../Button.jsx/Button";
import styles from "./HeroSection.module.css";
export default function HeroSection(){
    return <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div>
            <h1>Discover the <br/>Majestic Himalayas</h1>
            <p>Experience the breathtaking beauty of Darjeeling <br/>and Sikkim with our expertly crafted tour packages. <br/>From tea gardens to mountain peaks,<br/> create memories that last a lifetime.</p>
            <Button text="Explore Packages" onClick={()=>{}}/>
            <Button text="Watch Video >" onClick={()=>{}}/>
        </div>
        
    </section>
}