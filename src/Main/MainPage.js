import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        alert("이력서를 보여드립니다.");
        navigate('/about'); 
    };

    const handleBlogClick = () => {
        window.open('https://blog.naver.com/nicewjdqls', '_blank');
    };

    const handleGitClick = () => {
        window.open('https://github.com/nicewjdqls', '_blank');
    };

    return (
        <div className="main-page">
            <h1 className="attention-title">□ 저를 소개합니다</h1>
            <div id="about-and-cards-section" className="about-and-cards-section">
                <div className="about-image" onClick={handleClick}>
                    <img src="/vivi.png" alt="구정빈" className="profile-image" />
                </div>
                <div id="about-section" className="about-section">
                    {/* 폭죽이 배경으로 나타날 영역 */}
                    <div className="about-content">
                        <p>• 이름: 구정빈</p>
                        <p>• 나이: 만33세</p>
                        <p>• 학사: 배재대학교 전자공학과 졸업</p>
                        <p>• 석사: 건국대학교 방위사업학과 졸업</p>
                        <p>• 수료 내역: 2024.6.27 - 2024.12.27</p>
                        <p>• KGitbank DevSecOps수료 (팀장/우수 수료생 선정)</p>
                        <p>• 경력 사항: 2015.3 - 2024.6 육군 대위전역</p>
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

            <h1 className="attention-title">□ Project</h1>
            <div className="cards-section">
                <Link to="/portfolio" className="card">
                    <img src="/daslogo.png" alt="백엔드 엔지니어" />
                </Link>
                <div className="card" onClick={handleBlogClick}>
                    <img src="/blog.png" alt="블로그" target="_blank"/>
                </div>
                <div className="card" onClick={handleGitClick}>
                    <img src="/git.png" alt="백엔드 엔지니어" />
                </div>
            </div>

            <h1 className="attention-title">□ Main stack</h1>
            <div className="main-stack-section">
                <img src="/stack.png" alt="Tech Stack"/>
            </div>
        </div>
    );
};

export default MainPage;
