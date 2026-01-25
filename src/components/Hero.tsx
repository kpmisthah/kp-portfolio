'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { resumeBase64 } from '@/data/resumeData';

export default function Hero() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${resumeBase64}`;
        link.download = 'KP_Misthah_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                    <button onClick={handleDownload} className={styles.secondaryBtn}>
                        Download Resume <Download size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
