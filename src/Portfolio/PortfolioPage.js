import React from 'react';
import './PortfolioPage.css';
import { Link } from 'react-router-dom';

const VideoPlayer = () => {
    return (
        <div>
            <div className="header-image">
                <img src="/dasombaner.png" alt="헤더 이미지" className="header-banner" />
            </div>
            <div>
                <h1 className="about-section">
                    Hosting page :{' '}
                    <a href="https://dasomstudy.site/" target="_blank" rel="noopener noreferrer">
                        https://dasomstudy.site/ 
                    </a>
                    <p>(Route53 - CloudFront - S3)</p>
                </h1>
                <video width="600" controls>
                    <source src="https://d24dfoqyk6a0hx.cloudfront.net/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
            </div>
            
          
            <div>
                <h1 className="process-title">᥸ MainProcess</h1>
                <img src="/process.png" alt="헤더 이미지" className="portfolioPage-image" />
            </div>
            <div className="header-image">
            <h1 className="process-title">᥸ 프로젝트 개요</h1>
            <p>- 클라이언트가 인증을 통해 예약사이트를 사용하도록 하며</p>
                        <p>- 서버관리자는 고객정보, 시스템관리, 데이터 관리 등을 통해 유지보수 할수 있어야 한다.</p>
                        <h1 className="process-title">᥸ 담당업무</h1>
                        <p>- 팀장(PM)</p>
                        <p>- 백엔드 구성 및 통합테스트</p>
                <p>- 프로젝트 전체 관리(기획, PPT, 보고서 작성[총괄])</p>
                <p>- Docker를 통한 컨테이너 개발 환경 구축 및 Docker Hub를 통한 컨테이너 이미지 공유 환경 구성</p>
                <p>- Grafana, Prometheus를 통한 메트릭 수집 및 모니터링 환경 구축</p>
                <p>- AWS Webpage Deploy Infra Architect (비용 효율적 & CI/CD)</p>
                <p>- GIthub Organization을 통한 통합 개발 환경 구축 및 S3 연동(Git-Action)</p>
                <p>- AWS Organization & AWS Identity Center를 통한 조직화 구현 및 업무 분장</p>
                <p>- CloudFront - S3 정적페이지 호스팅 및 Route53을 통한 사용자 지정 도메인 적용</p>
                <p>- MySQL 데이터베이스 작업 내역 RDS 동기화</p>
                <p>- CloudFront - API Gateway 연동 및 Lambda 통합</p>
        </div>
        <div className="cards-section">
        <img src="/firstpage.png" alt="백엔드 엔지니어" />
            <Link to="/pdf1" className="card" target="_blank">
                <img src="/PDF.png" alt="백엔드 엔지니어" />
                <h3>DasomStudyCafe PDF</h3>
                <p>발표자료</p>
            </Link>
            <Link to="/pdf2" className="card" target="_blank">
                <img src="/PDF.png" alt="백엔드 엔지니어" />
                <h3>DasomStudyCafe PDF</h3>
                <p>발표자료</p>
            </Link>
            <Link to="/pdf3" className="card" target="_blank">
                <img src="/PDF.png" alt="백엔드 엔지니어" />
                <h3>DasomStudyCafe PDF</h3>
                <p>발표자료</p>
            </Link>
        </div>
        </div>

    );
};

export default VideoPlayer;
