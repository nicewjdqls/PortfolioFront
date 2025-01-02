import React from 'react';
import './MainPage.css'; // CSS 파일을 추가하여 스타일 적용

const MainPage = () => {
    const handleClick = () => {
        alert("더 많은 정보를 확인하세요!");
    };

    return (
        <div className="main-page">
                                <h2 className="attention-title">Projects</h2>

            {/* 두 섹션을 나누기 위한 flex 컨테이너 */}
            <div className="about-and-cards-section">
            <div className="about-image" onClick={handleClick}>
                        <img src="/Certificate_01.png" alt="김지민" className="profile-image" />
                    </div>
                {/* About Me 섹션 */}
                <div className="about-section">

                    <div className="about-content">
                        <h2 className="about-title">About me</h2>
                        <p>이름: 구정빈</p>
                        <p>나이: 만33세</p>
                        <p>학사: 대학교 (배재대학교 전자공학과 졸업)</p>
                        <p>석사: 대학원 (건국대학교 방위사업학과 졸업)</p>
                        <p>수료 내역: 2024.6.27 - 2024.12.27</p>
                        <p>KGitbank DevSecOps수료 (팀장/우수 수료생 선정)</p>
                        <p>경력 사항: 2011.3 - 2024.6 육군 대위전역</p>
                        <p>프로젝트 : DasomStudy Cafe 웹사이트 (5개월)</p>
                        <button className="click-button" onClick={handleClick}>CLICK HERE!</button>
                    </div>
                </div>

                {/* 카드 섹션 */}
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
                    
                    <div className="tags">
                <span className="tag">#경력</span>
                <span className="tag">#웹퍼블리셔</span>
                <span className="tag">#웹디자이너</span>
                <span className="tag">#김지민</span>
                <span className="tag">#웹기획</span>
                <span className="tag">#취미는 디자인</span>
                <span className="tag">#특기는 코딩</span>
            </div>
                </div>
            </div>


        </div>
    );
};

export default MainPage;
