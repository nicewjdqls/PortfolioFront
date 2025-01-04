import React from 'react';
import image1 from './certify.png';
import image2 from './recommendation.png';
import image3 from './army1.jpeg';
import image4 from './army2.jpeg';
import image6 from './army4.jpeg';
import image7 from './advantage.png';

import './AboutPage.css';  // CSS 파일 이름을 수정했습니다.

const certificates = [
    { name: "수료증", date: "2024-12-27", image: image1 },
    { name: "우수인재 추천서", date: "2024-12-27", image: image2 },
  ];

  const army = [
    { name: "1등 선봉중대", date: "2022-12-28", image: image4 },
    { name: "1등 명령하달", date: "2021-02-08", image: image6 },
    { name: "감사 우수", date: "2019-06-28", image: image3 },
  ];

  const adv = [
    { name: "장점", date: "2022-12-28", image: image7 }
  ];


  const MyComponent = () => {
    return (
      <div className="image-gallery">
        {certificates.map((cert, index) => (
          <div className="image-item" key={index}>
            <div className="image-text">
              <p>자격증명: {cert.name}</p>
              <p>취득일: {cert.date}</p>
            </div>
            <img src={cert.image} alt={cert.name} />
          </div>
        ))}
      </div>
    );
  };

  const MyArmy = () => {
    return (
      <div className="image-gallery">
        {army.map((cert, index) => (
          <div className="image-item" key={index}>
            <div className="image-text">
              <p>자격증명: {cert.name}</p>
              <p>취득일: {cert.date}</p>
            </div>
            <img src={cert.image} alt={cert.name} />
          </div>
        ))}
      </div>
    );
  };

  const MyAdv = () => {
    return (
      <div className="image-gallery">
        {adv.map((cert, index) => (
          <div className="image-item" key={index}>
            <div className="image-text">
              <p>자격증명: {cert.name}</p>
              <p>취득일: {cert.date}</p>
            </div>
            <img src={cert.image} alt={cert.name} />
          </div>
        ))}
      </div>
    );
  };


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
      <h2>□ 학력</h2>
        <table>
          <thead>
            <tr>
              <th>기간</th>
              <th>전공</th>
              <th>졸업유무</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2019. 06 ~ 2025. 02</td>
              <td>건국대학교 산업대학원(석사과정) 방위사업학과</td>
              <td>졸업(4.3/4.5)</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2011. 06 ~ 2015. 02</td>
              <td>배재대학교 전자공학과</td>
              <td>졸업(3.05/4.5)</td>
            </tr>
          </tbody>
        </table>   
    </section>

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
              <  td>2024.06 ~ 2024.12</td>
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
    <main className="chargeinfo-page">
      <p className="sub-title">Certificate</p>
      <h1 className="main-title">수료증</h1>
      <MyComponent />
    </main>      
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
        <main className="chargeinfo-page">
      <p className="sub-title">Certificate</p>
      <h1 className="main-title">상장</h1>
      <MyArmy />
    </main>     
      </section>

      <section className="about-projects">
        <h2>□ 프로젝트 경험</h2>
    <table>
      <thead>
        <tr>
          <th>Stack</th>
          <th>기능</th>
          <th>사용 기술 및 내용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>React</td>
          <td>프론트엔드 개발 - 사용자 인터페이스 최적화</td>
          <td>
            <ul>
              <li><strong>React:</strong> 다소스튜디오 카페의 메인 UI 개발에 주로 사용. 컴포넌트 기반 구조로 개발하여 유연성과 확장성을 유지하며 코드 재사용성을 높입니다. 상태 관리 및 라이프사이클 메서드를 활용하여 사용자 경험을 동적으로 제공합니다.</li>
              <li><strong>React Router:</strong> 페이지 간 원활한 이동과 라우팅을 지원하여 사용자가 필요한 정보를 쉽게 찾을 수 있게 해줍니다.</li>
              <li><strong>React Hooks:</strong> useState, useEffect와 같은 Hooks를 활용하여 컴포넌트의 상태 및 사이드 이펙트를 효율적으로 관리하고 코드 가독성과 유지보수성을 향상시킵니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Node.js</td>
          <td>백엔드 서버 - 서버 및 API 기반 구축</td>
          <td>
            <ul>
              <li><strong>Node.js:</strong> Express.js와 함께 RESTful API 설계에 사용되며, 비동기 처리를 통해 데이터 처리 효율성을 높입니다.</li>
              <li><strong>JWT:</strong> JSON Web Token을 통해 사용자 인증 및 세션 관리를 강화해 보안성을 높입니다.</li>
              <li><strong>Socket.io:</strong> 실시간 채팅 기능을 구현하여 사용자 간의 실시간 소통이 가능하도록 지원합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>MySQL</td>
          <td>데이터베이스 관리 - 데이터베이스 설계 및 성능 최적화</td>
          <td>
            <ul>
              <li><strong>MySQL:</strong> 관계형 데이터베이스로, 데이터 구조 설계 및 관리에 최적화되어 있습니다.</li>
              <li><strong>SQL 쿼리 최적화:</strong> 대량 데이터를 효율적으로 처리하기 위해 인덱스를 사용하여 검색 성능을 크게 향상시킵니다.</li>
              <li><strong>ORM 사용 (Sequelize):</strong> ORM을 통해 데이터베이스와의 상호작용을 직관적으로 처리하며 코드 유지보수성을 높입니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Linux</td>
          <td>서버 운영 관리 - 서버 환경 설정 및 관리 효율성 증대</td>
          <td>
            <ul>
              <li><strong>Linux:</strong> 서버 배포 및 유지관리에 리눅스를 활용하여 파일 시스템 구조를 이해하고 서버 성능을 최대화합니다.</li>
              <li><strong>Shell Script:</strong> 자동화 작업을 위해 Bash 스크립트를 활용, 반복 작업의 효율성을 증가시킵니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Docker</td>
          <td>컨테이너화 및 배포 - 컨테이너화 및 서비스 배포 일원화</td>
          <td>
            <ul>
              <li><strong>Docker:</strong> 서비스 환경의 일관성을 유지하며, 다양한 환경에서도 동일한 성능을 보장합니다.</li>
              <li><strong>Docker Compose:</strong> 여러 서비스 간의 의존성을 관리하여 동시에 설정하고 관리할 수 있습니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>AWS</td>
          <td>클라우드 배포 및 관리 - 확장성 높은 서버 관리 및 서비스 제공</td>
          <td>
            <ul>
              <li><strong>Amazon S3 (정적 웹 호스팅):</strong> S3 버킷을 생성하여 정적 웹 페이지를 호스팅합니다. 퍼블릭 액세스를 설정하고 파일을 업로드하여 웹사이트를 구성합니다.</li>
              <li><strong>Amazon API Gateway (API 관리):</strong> HTTP API를 생성하여 외부 요청을 처리하며, CloudFront와 연계하여 API 요청을 처리하고 Lambda 함수와 통합하여 서버리스 아키텍처를 제공합니다.</li>
              <li><strong>Amazon RDS (데이터 관리):</strong> 안정적인 데이터 관리 및 성능 최적화를 통해 데이터를 안전하게 운영합니다. 자동 백업 및 복원 기능을 활용하여 MySQL 데이터베이스를 설정합니다.</li>
              <li><strong>AWS Lambda (서버리스 기능 구현):</strong> 서버리스 아키텍처를 통해 이벤트 기반으로 비즈니스 로직을 자동으로 처리합니다.</li>
              <li><strong>GitHub Actions (CI/CD):</strong> 소스 코드 변경 시 자동으로 배포되도록 CI/CD 파이프라인을 구축합니다. GitHub에서 자동화된 워크플로우를 통해 코드가 푸시될 때마다 배포합니다.</li>
              <li><strong>NGINX (로드밸런싱 및 웹 관리):</strong> 웹 트래픽을 효율적으로 분산 처리하고 로드밸런서를 설정하여 여러 인스턴스에 트래픽을 분산합니다.</li>
              <li><strong>Prometheus와 Grafana (모니터링 및 성능 관리):</strong> 서버 및 애플리케이션 성능을 모니터링하고, Prometheus와 Grafana를 활용하여 메트릭스를 수집하고 시각화합니다.</li>
              <li><strong>AWS IAM (보안 관리):</strong> 리소스에 대한 접근 권한을 설정하여 보안을 강화합니다.</li>
              <li><strong>Amazon CloudFront (콘텐츠 배포):</strong> 글로벌 엣지 서버를 사용하여 콘텐츠를 빠르게 제공하며, S3와 연결하여 캐시된 콘텐츠를 제공하고 데이터 전송 비용을 절감합니다. HTTPS를 지원하여 데이터 전송을 암호화할 수 있습니다.</li>
              <li><strong>AWS WAF (웹 애플리케이션 방화벽):</strong> 웹 애플리케이션에 대한 공격을 방어하고 보안을 강화합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Java</td>
          <td>백엔드 서비스 추가 - 안정적인 서버 로직 구현</td>
          <td>
            <ul>
              <li><strong>Java:</strong> 일부 백엔드 서비스에 사용되며, Spring Boot 프레임워크를 통해 RESTful API를 간편하게 구축합니다.</li>
              <li><strong>Java의 멀티스레딩 기능:</strong> 강력한 멀티스레딩 기능을 통해 성능 최적화를 도모합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>CI/CD</td>
          <td>자동화된 빌드 및 배포 프로세스 구축</td>
          <td>
            <ul>
              <li><strong>GitHub Actions:</strong> 코드를 GitHub에 푸시할 때마다 자동으로 빌드하고 S3에 배포하는 프로세스를 설정했습니다.</li>
              <li><strong>AWS S3:</strong> 빌드된 애플리케이션 파일을 저장하고 관리합니다. AWS IAM Access Key를 사용하여 S3 버킷에 대한 접근 및 권한을 설정했습니다.</li>
              <li><strong>YAML 파일 구성:</strong> .github/workflows에 YAML 파일을 생성하여 메인 브랜치에 코드 변경이 발생할 때 트리거되는 워크플로우를 설정합니다.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <section className="about-experience">
        <h2>□ 나의 강점</h2>
        <div className="experience-icon">
          <img src={image7} alt="육군본부 경험" className="experience-icon" />
          </div>
 
      </section>


        
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
