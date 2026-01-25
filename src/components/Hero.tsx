'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section} id="hero">
            <div className={styles.container}>
                <motion.div
                    className={styles.badge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Full-Stack Web Developer
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Building Digital <br />
                    <span className={styles.highlight}>Experiences That Matter</span>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I&apos;m KP Misthah, a MERN/Next/Nest Stack Developer focusing on scalable web apps.
                    I turn complex problems into simple, user-friendly solutions.
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href="#projects" className={styles.primaryBtn}>
                        View Work <ArrowRight size={20} />
                    </Link>
                    <a href="/resume.zip" className={styles.secondaryBtn} download="KP_Misthah_Resume.zip">
                        Download Resume (ZIP) <Download size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
