import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>KP Misthah</Link>
                <div className={styles.links}>
                    <Link href="#about">About</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
