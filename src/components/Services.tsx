'use client';

import { motion } from 'framer-motion';
import { Code, Server, Globe, Cpu, Layers, Zap } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Full Stack Development',
        description: 'Building complete web applications from scratch using MERN/Next.js stack with focus on scalability and performance.',
        icon: <Globe size={30} />
    },
    {
        title: 'API Development',
        description: 'Designing and implementing robust RESTful and GraphQL APIs using Node.js, Express, and NestJS.',
        icon: <Server size={30} />
    },
    {
        title: 'Frontend Architecture',
        description: 'Creating responsive, interactive, and accessible user interfaces with React, Next.js, and modern CSS.',
        icon: <Code size={30} />
    },
    {
        title: 'Database Design',
        description: 'Modeling and optimizing database schemas for MongoDB and SQL databases to ensure data integrity and speed.',
        icon: <Layers size={30} />
    },
    {
        title: 'DevOps & Deployment',
        description: 'Setting up CI/CD pipelines, Docker containerization, and deploying applications to cloud platforms.',
        icon: <Cpu size={30} />
    },
    {
        title: 'Performance Optimization',
        description: 'Auditing and improving application performance, loading times, and SEO rankings.',
        icon: <Zap size={30} />
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.title}>What I <span className={styles.highlight}>Offer</span></h2>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
