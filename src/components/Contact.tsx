'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };
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

                    {/* Show success message or form */}
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={styles.successMessage}
                        >
                            <h3>Message Sent!</h3>
                            <p>Thanks for reaching out. I'll get back to you soon.</p>
                            <button onClick={() => setStatus('idle')} className={styles.submitBtn} style={{ marginTop: '1rem' }}>
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.group}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Hello, I'd like to talk about..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
                        </form>
                    )}

                    <div className={styles.socials}>
                        <a href="mailto:kpmisthah@gmail.com" className={styles.socialLink}>
                            <Mail size={32} />
                        </a>
                        <a href="https://github.com/kpmisthah" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            <Github size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/misthah-kp-05a866275/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            <Linkedin size={32} />
                        </a>
                        <a href="https://x.com/MisthahK19841" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            <Twitter size={32} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
