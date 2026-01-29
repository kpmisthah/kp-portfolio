"use client";

import React, { useState, useRef, useEffect } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    opacity: number;
    twinkleSpeed: number;
}

const StarBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((window.innerWidth * window.innerHeight) / 4000); // Responsive density
            const newStars: Star[] = [];
            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.2 + 0.5, // 0.5 to 1.7px
                    vx: Math.random() * 0.2 - 0.1, // Slow movement
                    vy: Math.random() * 0.2 - 0.1,
                    opacity: Math.random(),
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                });
            }
            setStars(newStars);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw stars
            const updatedStars = stars.map((star) => {
                // Move
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                // Twinkle
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                // Draw
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity)})`;
                ctx.fill();

                return star;
            });

            // Simple way to keep state without re-rendering component
            // Actually mapping is not persisting changes to the state variable for next frame in this setup
            // We should mutate the array in place for performance in animation loop usually, but here 'stars' is state.
            // Better: Use a ref for stars to avoid React render loop, use state only for init.

            animationFrameId = requestAnimationFrame(animate);
        };

        // Ref-based animation implementation to avoid React state updates on every frame
        const starsRef = { current: [] as Star[] };

        // Re-init with Ref
        const initStarsRef = () => {
            const starCount = Math.floor((window.innerWidth * window.innerHeight) / 4000);
            const newStars: Star[] = [];
            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    vx: Math.random() * 0.15 - 0.075,
                    vy: Math.random() * 0.15 - 0.075,
                    opacity: Math.random(),
                    twinkleSpeed: Math.random() * 0.01,
                });
            }
            starsRef.current = newStars;
        };

        const animateRef = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.1) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                // Clamp opacity for safety
                const alpha = Math.max(0, Math.min(1, Math.abs(star.opacity)));

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animateRef);
        };

        // Override the previous resize/init logic
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStarsRef();
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        animateRef();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1, // Behind everything
                pointerEvents: "none",
                background: "transparent", // Let the CSS gradient show through
            }}
        />
    );
};

export default StarBackground;
