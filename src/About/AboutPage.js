import React from 'react';
import './AboutPage.css';  // CSS 파일 이름을 수정했습니다.

function App() {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="profile">
          <img src="/profile.jpg" alt="Profile" className="about-profile-pic" />
        </div>
        <div className="about-personal-info">
          <h1>구정빈</h1>
          <p>남, 1992년 (만 32세)</p>
          <p>010-3570-9435</p>
          <p>nicewjdqls@naver.com</p>
          <p>경기 김포시 구래동</p>
        </div>
      </header>

      <section className="about-education">
        <h2>□ 교육</h2>
        <table>
          <thead>
            <tr>
              <th>기관</th>
              <th>기간</th>
              <th>과목 및 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KG아이티뱅크</td>
              <td>2024.06 ~ 2024.12</td>
              <td>
                <ul>
                  <li>리눅스: 웹관리, 데이터관리, 도커를 통한 컨테이너 관리</li>
                  <li>JAVA: JAVA 코드 활용하여 클라이언트 / 서버 구축</li>
                  <li>JSP: JSP를 통한 백엔드 구축</li>
                  <li>SQL: 데이터베이스 숙달</li>
                  <li>Python: FastAPI를 통해 HTML과 클라이언트 / 서버 구축</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="about-experience">
        <h2>□ 경력</h2>
        <div className="about-experience-item">
          <h3>육군본부</h3>
          <p><strong>직책:</strong> 그룹장</p>
          <p><strong>기간:</strong> 2015.03 ~ 2024.07 (총 9년 5개월)</p>
          <p><strong>연봉:</strong> 3,800만원</p>
          <h4>주요 업무:</h4>
          <ul>
            <li>리더, 과장 직책을 통한 조직 관리 및 다양한 업무 경험</li>
            <li>기획, 재정관리, 군수관리 등의 업무 수행</li>
          </ul>
          <h4>주요 성과:</h4>
          <ul>
            <li>조직관의 관계 관리</li>
            <li>다양한 업무 수행을 통한 문제 해결 능력 향상</li>
          </ul>
        </div>
      </section>

      <section className="about-projects">
        <h2>□ 프로젝트 경험</h2>
        <div className="about-project-item">
          <h3>Node.js 백엔드 구축</h3>
          <p><strong>사용 기술:</strong> Node.js, Linux, Docker, AWS, MySQL</p>
          <p>서버와 WAS를 구축하고, Docker를 이용하여 컨테이너 관리 및 AWS에 3-tier 아키텍처로 배포.</p>
        </div>
        <div className="about-project-item">
          <h3>리액트 프론트엔드 개발</h3>
          <p><strong>사용 기술:</strong> React, DOM, CSS</p>
          <p>리액트를 이용하여 사용자 인터페이스를 구축하고 DOM을 효율적으로 구성.</p>
        </div>
        <div className="about-project-item">
          <h3>데이터베이스 관리</h3>
          <p><strong>사용 기술:</strong> MySQL, SQL</p>
          <p>데이터베이스 정규화 및 사전 명세서 작성, 다이어그램을 통한 데이터 관리.</p>
        </div>
      </section>

      <footer className="about-footer">
        <p>위의 모든 기재사항은 사실과 다름없음을 확인합니다.</p>
        <p>작성자: 구정빈</p>
        <p>이 이력서는 2024년 09월 24일 (화)에 최종 수정된 이력서 입니다.</p>
        <p>
          위조된 문서를 등록하여 취업활동에 이용 시 법적 책임을 지게 될 수 있습니다.
          잡코리아(유)는 구직자가 등록한 문서에 대해 보증하거나 별도의 책임을 지지 않으며,
          첨부된 문서를 신뢰하여 발생한 법적 분쟁에 책임을 지지 않습니다.
        </p>
      </footer>
    </div>
  );
}

export default App;
