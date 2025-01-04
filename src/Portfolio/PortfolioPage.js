import React from 'react';
import './PortfolioPage.css'; // 새로운 CSS를 적용합니다.
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div className="section">
    <h1 className="process-title">᥸ {title}</h1>
    <div className="section-content">{children}</div>
  </div>
);

const List = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <p key={index} className="list-item">
        - {item}
      </p>
    ))}
  </div>
);

const Card = ({ to, imgSrc, title, description }) => (
  <Link to={to} className="card" target="_blank">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </Link>
);

const VideoPlayer = () => {
  const responsibilities = [
    '팀장(PM)',
    '백엔드 구성 및 통합테스트',
    '프로젝트 전체 관리(기획, PPT, 보고서 작성[총괄])',
    'Docker를 통한 컨테이너 개발 환경 구축 및 Docker Hub를 통한 컨테이너 이미지 공유 환경 구성',
    'Grafana, Prometheus를 통한 메트릭 수집 및 모니터링 환경 구축',
    'AWS Webpage Deploy Infra Architect (비용 효율적 & CI/CD)',
    'GIthub Organization을 통한 통합 개발 환경 구축 및 S3 연동(Git-Action)',
    'AWS Organization & AWS Identity Center를 통한 조직화 구현 및 업무 분장',
    'CloudFront - S3 정적페이지 호스팅 및 Route53을 통한 사용자 지정 도메인 적용',
    'MySQL 데이터베이스 작업 내역 RDS 동기화',
    'CloudFront - API Gateway 연동 및 Lambda 통합',
  ];

  const projectSummary = [
    '클라이언트가 인증을 통해 예약사이트를 사용하도록 하며',
    '서버관리자는 고객정보, 시스템관리, 데이터 관리 등을 통해 유지보수 할 수 있어야 한다.',
  ];

  return (
    <div className="portfolio-page">
      {/* 비디오 배경 */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://d24dfoqyk6a0hx.cloudfront.net/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hosting Page */}
      <Section title="Hosting page">
      <div className="hosting-page">
  <a href="https://dasomstudy.site/" target="_blank" rel="noopener noreferrer">
    https://dasomstudy.site/
  </a>
  <p>(Route53 - CloudFront - S3)</p>
</div>
      </Section>

      {/* Main Process */}
      <Section title="MainProcess">
        <img src="/process.png" alt="프로세스 이미지" className="header-image" />
      </Section>

      {/* Project Summary */}
      <Section title="프로젝트 개요">
        <List items={projectSummary} />
      </Section>

      {/* Responsibilities */}
      <Section title="담당업무">
        <List items={responsibilities} />
      </Section>

      {/* Related Documents */}
      <Section title="관련자료">
        <div className="cards-section">
          <Card to="/pdf1" imgSrc="/PDF.png" title="DasomStudyCafe PDF" description="발표자료" />
          <Card to="/pdf2" imgSrc="/PDF.png" title="DasomStudyCafe PDF" description="발표자료" />
          <Card to="/pdf3" imgSrc="/PDF.png" title="DasomStudyCafe PDF" description="발표자료" />
        </div>
      </Section>
    </div>
  );
};

export default VideoPlayer;
