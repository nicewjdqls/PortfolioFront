import React, { useEffect } from 'react';
import p5 from 'p5';
import './Fireworks.css'; // 폭죽 관련 CSS를 여기에 정의

const withFireworks = (WrappedComponent) => {
    return (props) => {
        useEffect(() => {
            const sketch = (p) => {
                let fireworks = [];
                let gravity;

                p.setup = () => {
                    const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
                    canvas.style('position', 'fixed');
                    canvas.style('top', '0');
                    canvas.style('left', '0');
                    canvas.style('z-index', '-1'); // 배경으로 설정
                    gravity = p.createVector(0, 0.2);
                };

                p.draw = () => {
                    p.background(255, 255, 255, 25);
                    if (p.random(1) < 0.05) {
                        fireworks.push(new Firework());
                    }
                    for (let i = fireworks.length - 1; i >= 0; i--) {
                        fireworks[i].update();
                        fireworks[i].show();
                        if (fireworks[i].done()) {
                            fireworks.splice(i, 1);
                        }
                    }
                };

                class Firework {
                    constructor() {
                        this.firework = new Particle(p.random(p.width), p.height, true);
                        this.exploded = false;
                        this.particles = [];
                    }

                    update() {
                        if (!this.exploded) {
                            this.firework.applyForce(gravity);
                            this.firework.update();
                            if (this.firework.vel.y >= 0) {
                                this.exploded = true;
                                this.explode();
                            }
                        }
                        for (let i = this.particles.length - 1; i >= 0; i--) {
                            this.particles[i].applyForce(gravity);
                            this.particles[i].update();
                            if (this.particles[i].done()) {
                                this.particles.splice(i, 1);
                            }
                        }
                    }

                    explode() {
                        for (let i = 0; i < 100; i++) {
                            const particle = new Particle(this.firework.pos.x, this.firework.pos.y, false);
                            this.particles.push(particle);
                        }
                    }

                    done() {
                        return this.exploded && this.particles.length === 0;
                    }

                    show() {
                        if (!this.exploded) {
                            this.firework.show();
                        }
                        for (let particle of this.particles) {
                            particle.show();
                        }
                    }
                }

                class Particle {
                    constructor(x, y, firework) {
                        this.pos = p.createVector(x, y);
                        this.firework = firework;
                        this.lifespan = 255;

                        if (this.firework) {
                            this.vel = p.createVector(0, p.random(-12, -8));
                        } else {
                            this.vel = p.createVector(p.random(-3, 3), p.random(-3, 3));
                        }
                        this.acc = p.createVector(0, 0);
                    }

                    applyForce(force) {
                        this.acc.add(force);
                    }

                    update() {
                        if (!this.firework) {
                            this.vel.mult(0.9);
                            this.lifespan -= 4;
                        }
                        this.vel.add(this.acc);
                        this.pos.add(this.vel);
                        this.acc.mult(0);
                    }

                    done() {
                        return this.lifespan < 0;
                    }

                    show() {
                        if (!this.firework) {
                            p.strokeWeight(4);
                            p.stroke(255, 150, 150, this.lifespan);
                        } else {
                            p.strokeWeight(8);
                            p.stroke(255, 150, 0);
                        }
                        p.point(this.pos.x, this.pos.y);
                    }
                }
            };

            const myP5 = new p5(sketch);

            return () => {
                myP5.remove(); // 컴포넌트 언마운트 시 p5 인스턴스 제거
            };
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withFireworks;
