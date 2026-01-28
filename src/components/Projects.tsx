'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import Image from 'next/image';
import styles from './Projects.module.css';

interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    frontendRepo?: string;
    backendRepo?: string;
    demo: string;
    image: string;
}

const projects: Project[] = [
    {
        title: 'Wayfare',
        description: 'Wayfare is a travel planning SAAS platform where users can compare travel agencies, book trips, get AI-generated itineraries, and connect with travelers visiting the same destination through chat and video calls.',
        tags: ['Next.js', 'NestJS', 'Stripe', 'PostgreSQL', 'MongoDB', 'Redis', 'WebRtc', "socket.io", "Docker", "CI/CD", "AWS", "Vercel"],
        // github: '#', // Replaced by specific repos below
        frontendRepo: 'https://github.com/kpmisthah/wayfare-frontend',
        backendRepo: 'https://github.com/kpmisthah/wayfare-backend',
        demo: 'https://wayfare.misthah.site/',
        image: '/project-wayfare.png'
    },
    {
        title: 'Real-time Chat Application',
        description: 'Real-time polling and chat application. Users can vote live and see instant poll updates, chat in real time with usernames, and view typing indicators. Designed to demonstrate WebSocket-based real-time communication.',
        tags: ['Node.js', 'Socket.io', 'React'],
        github: 'https://github.com/kpmisthah/realtime-polling-chat-app',
        demo: '#',
        image: '/project-chat.png'
    },
    {
        title: 'Stackseed',
        description: 'SeedStack is a CLI tool that helps developers quickly bootstrap a clean and scalable Node.js backend. It generates a ready-to-use project structure with TypeScript, authentication, security setup, and clean architecture using the repository pattern so developers can focus on building features instead of repeating boilerplate setup.',
        tags: ['Node.js', 'TypeScript', 'MongoDB'],
        github: 'https://github.com/kpmisthah/stackseed',
        demo: "",
        image: '/project-stackseed.png'
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
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #1e202e, #2a2d40)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Folder size={48} color="#704df4" />
                                    </div>
                                )}
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
                                    {/* Handle single GitHub link */}
                                    {project.github && (
                                        <a href={project.github} className={styles.link} target="_blank" rel="noopener noreferrer">
                                            <Github className={styles.icon} /> Code
                                        </a>
                                    )}

                                    {/* Handle separate Frontend/Backend links */}
                                    {project.frontendRepo && (
                                        <a href={project.frontendRepo} className={styles.link} target="_blank" rel="noopener noreferrer">
                                            <Github className={styles.icon} /> Frontend
                                        </a>
                                    )}
                                    {project.backendRepo && (
                                        <a href={project.backendRepo} className={styles.link} target="_blank" rel="noopener noreferrer">
                                            <Github className={styles.icon} /> Backend
                                        </a>
                                    )}

                                    {project?.demo && (
                                        <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className={styles.icon} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
