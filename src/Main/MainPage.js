import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import p5 from 'p5';

const MainPage = () => {
    const handleClick = () => {
        alert("더 많은 정보를 확인하세요!");
    };

    useEffect(() => {
        const sketch = (p) => {
            let fireworks = [];
            let gravity;

            p.setup = () => {
                const container = document.getElementById('about-and-cards-section');
                if (container) {
                    const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
                    canvas.parent(container); // 캔버스를 섹션에 추가
                }

                gravity = p.createVector(0, 0.1); // 중력 효과
            };

            p.windowResized = () => {
                const container = document.getElementById('about-and-cards-section');
                if (container) {
                    p.resizeCanvas(container.offsetWidth, container.offsetHeight);
                }
            };

            p.draw = () => {
                p.background(255); // 하얀색 배경

                // 새로운 폭죽 추가
                if (p.random(1) < 0.03) {
                    fireworks.push(new Firework());
                }

                // 폭죽 업데이트 및 표시
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
                        p.strokeWeight(30);
                        p.stroke(255, this.lifespan);
                    } else {
                        p.strokeWeight(30);
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

    return (
        <div className="main-page">
            <h1 className="about-section">저를 소개합니다</h1>
            <div id="about-and-cards-section" className="about-and-cards-section">
                <div className="about-image" onClick={handleClick}>
                    <img src="/vivi.png" alt="구정빈" className="profile-image" />
                </div>
                <div className="about-section">
                    <div className="about-content">
                        <p>• 이름: 구정빈</p>
                        <p>• 나이: 만33세</p>
                        <p>• 학사: 배재대학교 전자공학과 졸업</p>
                        <p>• 석사: 건국대학교 방위사업학과 졸업</p>
                        <p>• 수료 내역: 2024.6.27 - 2024.12.27</p>
                        <p>• KGitbank DevSecOps수료 (팀장/우수 수료생 선정)</p>
                        <p>• 경력 사항: 2011.3 - 2024.6 육군 대위전역</p>
                        <p>• 프로젝트 : DasomStudy Cafe 웹사이트 (5개월)</p>
                        <div className="tags">
                        <span className="tag">#구정빈</span>
                        <span className="tag">#신입 개발자</span>
                        <span className="tag">#자신감</span>
                        <span className="tag">#취미는 바이올린</span>
                        <span className="tag">#특기는 농구</span>
                    </div>
                        <button className="click-button" onClick={handleClick}>CLICK HERE!</button>
                    </div>
                    
                </div>
                
            </div>
            
             <div className="main-stack-section">
             <h1 className="about-section">Project</h1>
             <div className="cards-section">
                    <div className="card" onClick={handleClick}>
                        <img src="/dasom.png" alt="백엔드 엔지니어" />
                        <h3>팀 프로젝트</h3>
                        <p>포스타임</p>
                        <p>서울 강남구 · 경력 2-7년</p>
                    </div>
                    <div className="card" onClick={handleClick}>
                        <img src="/dasom.png" alt="백엔드 엔지니어" />
                        <h3>팀 프로젝트</h3>
                        <p>포스타임</p>
                        <p>서울 강남구 · 경력 2-7년</p>
                    </div>
                    <div className="card" onClick={handleClick}>
                        <img src="/dasom.png" alt="백엔드 엔지니어" />
                        <h3>팀 프로젝트</h3>
                        <p>포스타임</p>
                        <p>서울 강남구 · 경력 2-7년</p>
                    </div>
                    </div>
                </div>
            <div className="main-stack-section">
                <h1 className="about-section">Main stack</h1>
                <img src="/stack.png" />
            </div>
        </div>
    );
};

export default MainPage;
