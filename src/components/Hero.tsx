'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

import { resumeBase64 } from '@/data/resumeData';

export default function Hero() {
    const handleDownload = () => {
        // Create a Blob from the base64 string
        const byteCharacters = atob(resumeBase64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });

        // Create download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'KP_Misthah_Resume.pdf';
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
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
