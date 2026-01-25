'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.title}>Get In <span className={styles.highlight}>Touch</span></h2>

                <div className={styles.content}>
                    <p className={styles.text}>
                        I’m currently open to new opportunities and collaborations.
                        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>

                    <form className={styles.form} onClick={(e) => e.preventDefault()}>
                        <div className={styles.group}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="John Doe" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" className={styles.textarea} placeholder="Hello, I'd like to talk about..."></textarea>
                        </div>

                        <button className={styles.submitBtn}>Send Message</button>
                    </form>

                    <div className={styles.socials}>
                        <a href="mailto:contact@example.com" className={styles.socialLink}>
                            <Mail size={32} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <Github size={32} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <Linkedin size={32} />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <Twitter size={32} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
