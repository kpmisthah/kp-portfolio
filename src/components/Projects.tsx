'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-featured online store with cart functionality, user authentication, and payment gateway integration using Stripe.',
        tags: ['Next.js', 'Redux Toolkit', 'Stripe', 'MongoDB'],
        github: '#',
        demo: '#',
        image: '/project1.jpg' // Would need real images
    },
    {
        title: 'Task Management System',
        description: 'A collaborative project management tool with drag-and-drop Kanban boards, team workspaces, and real-time updates.',
        tags: ['React', 'NestJS', 'PostgreSQL', 'Socket.io'],
        github: '#',
        demo: '#',
        image: '/project2.jpg'
    },
    {
        title: 'Real-time Chat Application',
        description: 'Scalable chat application supporting private messaging, group chats, and media sharing with end-to-end encryption.',
        tags: ['Node.js', 'Socket.io', 'Redis', 'React'],
        github: '#',
        demo: '#',
        image: '/project3.jpg'
    },
    {
        title: 'SaaS Dashboard',
        description: 'Comprehensive analytics dashboard for SaaS businesses featuring data visualization charts and reporting tools.',
        tags: ['Full Stack', 'D3.js', 'Express', 'Mongoose'],
        github: '#',
        demo: '#',
        image: '/project4.jpg'
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.title}>Featured <span className={styles.highlight}>Projects</span></h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imageContainer}>
                                {/* Fallback to simple gradient if no image */}
                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #1e202e, #2a2d40)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Folder size={48} color="#704df4" />
                                </div>
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>

                                <div className={styles.tags}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                                        <Github className={styles.icon} /> Code
                                    </a>
                                    <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className={styles.icon} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
