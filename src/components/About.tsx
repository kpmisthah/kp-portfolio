'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.title}>About <span className={styles.highlight}>Me</span></h2>

                <div className={styles.content}>
                    <p>
                        I’m a <strong>Full Stack Developer</strong> with a strong interest in building real world, scalable web applications.
                        Currently, I focus on full-stack development using <strong>MongoDB, Express.js, React, Next.js, Node.js, NestJS, Docker, and CI/CD pipelines</strong>.
                    </p>
                    <p>
                        I enjoy turning complex problems into simple, user friendly solutions. I have hands on experience building complete applications including SAAS applications.
                        I strongly believe in learning by building, which is why I work continuously on projects that reflect real industry use cases rather than only tutorials.
                    </p>
                    <p>
                        I pay close attention to logic, clean code, and correct implementation, and I enjoy understanding <em>why</em> something works, not just <em>how</em>.
                    </p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Projects Built</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Commitment</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>24/7</span>
                        <span className={styles.statLabel}>Learner</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
