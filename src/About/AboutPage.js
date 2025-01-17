import React from 'react';
import image1 from './certify.png';
import image2 from './recommendation.png';
import image3 from './army1.jpeg';
import image4 from './army2.jpeg';
import image6 from './army4.jpeg';
import image7 from './advantage2.png';
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
                <ul className='table-project-item '>
                  <li>Node.js: 서버구축 및 token 및 key값 관리, 트래픽관리</li>
                  <li>리엑트: 프론트엔드 구축과 부트스트랩, 동적환경 구축</li>
                  <li>리눅스: NGINX, Docker를 통한 컨테이너 관리, 로드밸런싱</li>
                  <li>JAVA: JAVA 코드 활용하여 클라이언트 / 서버 구축</li>
                  <li>JSP: JSP를 통한 백엔드 구축</li>
                  <li>SQL: MySQL, MongoDB</li>
                  <li>AWS: 3tier 구축 및 서비스배포, 로드밸런싱</li>
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
          <h3>○ 육군 장교복부(ROTC#53)</h3>
          <ul className='about-project-item'>
          <li>직책: 지휘관, 참모과장</li>
          <li>병과: 보병</li>
          <li>기간: 2015.03 ~ 2024.06 (총 9년 4개월)</li>
          </ul>

          <h4 className='subtitle'>○ 주요 업무 :</h4>
          <ul className='about-project-item'>
            <li>지휘관으로 조직관리 및 계획수립</li>
            <li>참모과장으로 기획, 재정관리, 군수관리 등의 업무 수행</li>
          </ul>
          <h4  className='subtitle'>○ 주요 성과:</h4>
          <ul className='about-project-item'>
            <li>16개 중대 중 1등 선봉중대 달성</li>
            <li>여단급 명령하달 경연대회 1등 수상</li>
            <li>각종 감사 우수 유공(보안,재정,동원감사)</li>
            <li>OBC 교육과정 우수 교육사령관 표창 (백분률 상위 18%) </li>
            <li>개인평가 최우수 특급전사 달성 </li>
            <li>안정적이고 능동적인 조직관리</li>
            <li>다양한 참모경험으로 조직기여</li>
          </ul>
          <h4  className='subtitle'>○ 기여할 수 있는 점:</h4>
          <ul className='about-project-item'>
            <li>새로운 일, 다양한 일에 대해서 극복하고 적응할 수 있는 힘이 있습니다.</li>
            <li>매순간 최선을 다하고 성과를 이뤄내는 경험이 있습니다.</li>
            <li>다양한 신분, 연령이 있는 조직에서 일을 통해 팀업무 수행에 자신있습니다.</li>
            <li>상급자의 요구사항을 잘 파악하여 사전에 준비하고 해결해낼 수 있습니다. </li>
            <li>위 경험을 통해 내실 있는 신입 개발자가 되도록 하겠습니다.  </li>
 

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
    <table >
      <thead>
        <tr >
          <th>Stack</th>
          <th>기능</th>
          <th>사용 기술 및 내용</th>
        </tr>
      </thead>
      <tbody >
        <tr> 
          <td>React</td>
          <td>프론트엔드 개발 - 사용자 인터페이스 최적화</td>
          <td>
            <ul className='about-project-item'>
              <li><strong>오픈소스 활용 : </strong>네이버로그인. 카카오맵, coolsms(SNS인증) </li>
              <li><strong>웹 구성 : </strong>메인페이지, 헤더, 사이드바, 로그인, 회원가입, 게시판, 방명록, JWT Token, key값 호출</li>
              <li><strong>동적 기능 : </strong>React Router, Pagination, navigate, 배열, Hooks, Axios, Event Handling, 토스트메세지</li>
              <li><strong>token 디코딩 : </strong>서버에 토큰을 요청하고 디코딩하여 정보를 추출함</li>
              <li><strong>사용자 관리 : </strong>추출한 토큰정보로 게시글 관리</li>
              <li><strong>Redux  : </strong>dispatch(getOrder())를 통해 주문 데이터를 가져오는 요청이 Redux 스토어로 전달</li>

            </ul>
          </td>
        </tr>
        <tr>
          <td>Node.js</td>
          <td>백엔드 서버 - 서버 및 API 기반 구축</td>
          <td>
            <ul className='about-project-item'>
              <li><strong>bcrypt : </strong> 비밀번호 Hash로 변경하여 저장 </li>
              <li><strong>JWT : </strong>인증, 인가를 통한 로그인, 게시판작성, 방명록 작성 관리(auth.controller.js)</li>
              <li><strong>TINY_MCE_API : </strong>게시판 라이브러리, API KEY 값 관리</li>
              <li><strong>회원가입 / 로그인 : </strong>유효성검사, 중복체크, token 저장</li>
              <li><strong>방명록 : </strong>token값에 따른 CURD 관리</li>
              <li><strong>캐싱 : </strong>sessionStorage와 localStorage 저장방식 선택</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>MySQL / MongoDB</td>
          <td>데이터베이스 관리 - 데이터베이스 설계 및 성능 최적화</td>
          <td>
            <ul className='about-project-item'>
              <li><strong>정규화 : </strong> 안정적 데이터관리, 데이터 업데이트를 위한 정규화를 위해 조별 토의와 의견수렴</li>
              <li><strong>ERD : </strong> 독립적인 데이터가 생기지 않도록 관계형데이터 구현하도록 설계</li>
              <li><strong>ORM 사용 (Sequelize):</strong> 데이터베이스와 상호작용을 직관적으로 처리하며 코드 유지보수성을 높였음.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Linux</td>
          <td>서버 운영 관리 - 서버 환경 설정 및 관리 효율성 증대</td>
          <td>
            <ul className='about-project-item'> 
              <li><strong>Telnet : </strong> xinetd를 통한 텔넷 원격운용</li>
              <li><strong>ssh : </strong> ssh_config, sshd_config를 통한 ssh설정과 mobaxterm연결을 해봤습니다.</li>
              <li><strong>RAID : </strong> 디스크 로드밸런싱을 위한 디스크 설정을 해보았습니다.</li>
              <li><strong>LVM : </strong> 손쉬운 디스크 용량확장을 위해 설정했으며 VG에 증설하였습니다.</li>
              <li><strong>DNS: </strong> bind와 ZONE을 구성하여 DNS설정하여 가비아 도메인과 연결하였습니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Docker</td>
          <td>컨테이너화 및 배포 - 컨테이너화 및 서비스 배포 일원화</td>
          <td>
            <ul className='about-project-item'>
              <li><strong>Docker Nginx : </strong> Nginx를 활용한 컨테이너 proxy기능 활용</li>
              <li><strong>Docker Compose : </strong> Docker compose YAML 코드 작성과 3-Tier 배포 활용</li>
              <li><strong>Docker image : </strong> 간편한 배포와 유지보수를 위해 docker hub로 배포</li>
              <li><strong>ECS 구성 : </strong> AmazonECS를 활용한 컨테이너 서비스 배포</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>AWS</td>
          <td>클라우드 배포 및 관리 - 확장성 높은 서버 관리 및 서비스 제공</td>
          <td>
            <ul className='about-project-item'>
              <li><strong>Amazon S3 (정적 웹 호스팅):</strong> 리엑트 웹에 관련된 영상, pdf, 정적요소들을 S3버킷에 저장</li>
              <li><strong>Amazon API Gateway (API 관리):</strong> HTTP API를 생성하여 외부 요청을 처리하며, CloudFront와 연계하여 API 요청을 처리하고 Lambda 함수와 통합하여 서버리스 아키텍처를 제공합니다.</li>
              <li><strong>Amazon RDS (데이터 관리):</strong> MySQL 데이터베이스를 활용하여 RDS 설정</li>
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
            <ul className='about-project-item'>
              <li><strong>Java:</strong> 일부 백엔드 서비스에 사용되며, Spring Boot 프레임워크를 통해 RESTful API를 간편하게 구축합니다.</li>
              <li><strong>Java의 멀티스레딩 기능:</strong> 강력한 멀티스레딩 기능을 통해 성능 최적화를 도모합니다.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>CI/CD</td>
          <td>자동화된 빌드 및 배포 프로세스 구축</td>
          <td>
            <ul className='about-project-item'>
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


    </div>
  );
}

export default App;
