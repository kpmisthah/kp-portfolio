'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <Layout size={24} />,
        skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Redux', 'TypeScript']
    },
    {
        title: 'Backend',
        icon: <Server size={24} />,
        skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
        title: 'Database',
        icon: <Database size={24} />,
        skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose', 'Prisma']
    },
    {
        title: 'DevOps & Tools',
        icon: <Settings size={24} />,
        skills: ['Docker', 'CI/CD', 'Git', 'GitHub', 'AWS', 'Vercel']
    }
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.title}>My <span className={styles.highlight}>Skills</span></h2>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className={styles.categoryTitle}>
                                {category.icon}
                                {category.title}
                            </h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className={styles.skillBadge}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
