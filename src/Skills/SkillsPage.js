import React, { useState } from 'react';
import './SkillsPage.css';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h3 onClick={toggle} className="accordion-title">
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▶</span> {title}
      </h3>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      {/* 대주제: 프론트엔드 개발 */}
      <AccordionItem title="대주제: 프론트엔드 개발 - React">
        <AccordionItem title="소주제: React">
          <p>React는 다소스튜디오 카페의 메인 UI 개발에 주로 사용되며, 컴포넌트 기반 구조로 개발하여 유연성과 확장성을 유지하며 코드 재사용성을 높입니다. 상태 관리 및 라이프사이클 메서드를 활용하여 사용자 경험을 동적으로 제공합니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: React Router">
          <p>React Router는 페이지 간 원활한 이동과 라우팅을 지원하여 사용자가 필요한 정보를 쉽게 찾을 수 있도록 돕습니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: React Hooks">
          <p>React Hooks (useState, useEffect)는 상태 관리 및 사이드 이펙트를 효율적으로 관리하고 코드의 가독성과 유지보수성을 향상시킵니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 백엔드 서버 */}
      <AccordionItem title="대주제: 백엔드 서버 - Node.js">
        <AccordionItem title="소주제: Node.js">
          <p>Node.js는 Express.js와 함께 RESTful API 설계에 사용되며, 비동기 처리를 통해 데이터 처리 효율성을 높입니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: JWT">
          <p>JWT는 사용자 인증 및 세션 관리를 강화하여 보안성을 높입니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: Socket.io">
          <p>Socket.io는 실시간 채팅 기능을 구현하여 사용자 간의 실시간 소통을 지원합니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 데이터베이스 관리 */}
      <AccordionItem title="대주제: 데이터베이스 관리 - MySQL">
        <AccordionItem title="소주제: MySQL">
          <p>MySQL은 관계형 데이터베이스로, 데이터 구조 설계 및 관리에 최적화되어 있습니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: SQL 최적화">
          <p>SQL 쿼리 최적화는 인덱스를 사용하여 대량 데이터를 효율적으로 처리하고 검색 성능을 향상시킵니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: Sequelize ORM">
          <p>Sequelize는 ORM을 통해 데이터베이스와의 상호작용을 직관적으로 처리하며 코드 유지보수성을 높입니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 서버 운영 관리 */}
      <AccordionItem title="대주제: 서버 운영 관리 - Linux">
        <AccordionItem title="소주제: Linux">
          <p>Linux는 서버 배포 및 유지관리에 활용되며, 파일 시스템 구조를 이해하고 서버 성능을 최적화합니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: Shell Script">
          <p>Shell Script는 자동화 작업을 위해 Bash 스크립트를 활용하여 반복 작업의 효율성을 증가시킵니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 컨테이너화 및 배포 */}
      <AccordionItem title="대주제: 컨테이너화 및 배포 - Docker">
        <AccordionItem title="소주제: Docker">
          <p>Docker는 서비스 환경의 일관성을 유지하며, 다양한 환경에서도 동일한 성능을 보장합니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: Docker Compose">
          <p>Docker Compose는 여러 서비스 간의 의존성을 관리하여 동시에 설정하고 관리할 수 있습니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 클라우드 배포 및 관리 */}
      <AccordionItem title="대주제: 클라우드 배포 및 관리 - AWS">
        <AccordionItem title="소주제: Amazon S3">
          <p>Amazon S3는 정적 웹 호스팅을 통해 웹사이트를 구성하며 파일을 안전하게 저장하고 배포합니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: Amazon API Gateway">
          <p>Amazon API Gateway는 HTTP API를 생성하여 외부 요청을 처리하고, CloudFront와 연계하여 API 요청을 처리합니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: AWS Lambda">
          <p>AWS Lambda는 서버리스 아키텍처를 통해 이벤트 기반으로 비즈니스 로직을 자동으로 처리합니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: GitHub Actions">
          <p>GitHub Actions는 소스 코드 변경 시 자동으로 빌드하고 배포하도록 CI/CD 파이프라인을 구축합니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 자동화된 빌드 및 배포 프로세스 */}
      <AccordionItem title="대주제: 자동화된 빌드 및 배포 프로세스 - CI/CD">
        <AccordionItem title="소주제: GitHub Actions">
          <p>GitHub Actions는 코드를 GitHub에 푸시할 때마다 자동으로 빌드하고 S3에 배포하는 프로세스를 설정했습니다.</p>
        </AccordionItem>
        <AccordionItem title="소주제: YAML 파일 구성">
          <p>YAML 파일을 사용하여 GitHub 워크플로우에서 자동 배포를 트리거하도록 설정합니다.</p>
        </AccordionItem>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
