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
      <AccordionItem title="1. 로그인 (token)">
      <AccordionItem title="1-1. 주요 흐름">
  <p>1. 사용자가 로그인을 요청하면 이메일(userId)와 비밀번호(userPw)로 인증---(로그인폼)</p>
  <p>2. 인증 성공 시 서버는 사용자 정보를 포함한 JWT 토큰을 생성해서 반환---(인증 후 token 생성)* isMatch, bcrypt.compare, generateToken(user)</p>
  <p></p>
  <p>3. 이후 요청마다 클라이언트는 헤더에 토큰을 포함해 전달---(GET /user/me),(Authorization: Bearer 토큰)</p>
  <p>4. 서버는 이 토큰을 검증해 사용자를 확인하고 요청을 처리---(getUser)</p>
  <p>　</p>
  <p> (동작 원리)</p>
  <p>(1) 로그인 (POST /user/login)</p>
  <p>- 클라이언트가 userId와 userPw를 전송.</p>
  <p>- 서버는 데이터베이스에서 해당 ID를 가진 사용자를 찾음.</p>
  <p>- 비밀번호를 비교해서 일치하면:</p>
  <p>　* 사용자 정보를 담은 JWT 토큰 생성.</p>
  <p>　* 토큰과 사용자 정보를 클라이언트에 반환.</p>
  <p>　</p>
  <p>(2) 사용자 정보 조회 (GET /user/me)</p>
  <p>- 클라이언트는 요청 헤더에 Authorization: Bearer &lt;토큰&gt; 형태로 토큰 전달.</p>
  <p>- 서버는 미들웨어(authController.authenticate)를 통해:</p>
  <p>　* 토큰의 유효성 확인.</p>
  <p>　* 토큰이 유효하면 사용자 ID를 가져와 요청 객체(req.userId)에 추가.</p>
  <p>- 이후 컨트롤러(getUser)에서 사용자 정보를 조회.</p>
</AccordionItem>
        <AccordionItem title="1-2. 구성 요소별 설명">
  <p># routes/index.js</p>
  <p>- API의 라우팅을 관리하는 부분 </p>
  <p>- /signup과 /user로 들어오는 요청을 각각 SignUpPage.api와 UserPage.api로 보냄</p>
  <p>　</p>
  <p># routes/UserPage.api.js</p>
  <p>- /user 경로와 관련된 API 처리</p>
  <p>- 두 가지 주요 기능</p>
  <p>1. 로그인 API (POST /user/login) -- 사용자가 이메일(userId)와 비밀번호(userPw)를 보내면 로그인 처리</p>
  <p>2. 사용자 정보 조회 API (GET /user/me) -- 사용자가 인증된 상태에서 본인 정보를 가져옴</p>
  <p>* 인증 미들웨어 (authController.authenticate)를 거쳐 사용자 식별.</p>
  <p>　</p>
  <p># controller/user.controller.js</p>
  <p>- 사용자와 관련된 로직을 처리하는 부분</p>
  <p>1. 로그인 처리 (loginWithEmail)</p>
  <p>- 클라이언트가 보낸 userId와 userPw를 데이터베이스에서 확인</p>
  <p>- bcrypt로 암호화된 비밀번호를 비교해 인증 처리</p>
  <p>- 로그인 성공 시, 사용자 정보를 담은 JWT 토큰을 생성해 반환</p>
  <p>　</p>
  <p>2. 사용자 정보 조회 (getUser)</p>
  <p>- 인증된 사용자의 userId를 이용해 데이터베이스에서 정보를 가져옴</p>
  <p>　</p>
  <p>3. 토큰 생성 (generateToken)</p>
  <p>- 사용자 ID와 이름을 포함한 JWT 토큰을 생성</p>
  <p>- 비밀 키(JWT_SECRET_KEY)를 사용해 암호화</p>
  <p>- 생성된 토큰은 1시간 동안 유효</p>
  <p>　</p>
  <p># controller/auth.controller.js</p>
  <p>- 인증 미들웨어를 담당</p>
  <p>1. 토큰 검증 (authenticate)</p>
  <p>- 요청 헤더에서 토큰을 가져와 검증</p>
  <p>- 유효한 토큰이라면 사용자 정보를 요청 객체(req.userId)에 추가</p>
  <p>- 검증 실패 시, 에러 메시지를 반환</p>
</AccordionItem>
        <AccordionItem title="1-3. 토큰 보안사항 리프레시 토큰 (Refresh Token), 프라이빗 키 이중화 (Private Key 사용)">
          <p>리프레시 토큰은 만료된 액세스 토큰을 새로 발급하는 메커니즘으로 사용자 경험을 개선하고 보안을 강화할 수 있다.</p>
          <p>Private Key 이중화는 JWT 서명과 검증 과정을 분리하고, 키 관리 및 교체를 쉽게 만들어 보안성을 높인다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 백엔드 서버 */}
      <AccordionItem title="2. 백엔드 서버 - Node.js">
        <AccordionItem title="2-1. Node.js">
          <p>Node.js는 Express.js와 함께 RESTful API 설계에 사용되며, 비동기 처리를 통해 데이터 처리 효율성을 높입니다.</p>
        </AccordionItem>
        <AccordionItem title="2-2. JWT">
          <p>JWT는 사용자 인증 및 세션 관리를 강화하여 보안성을 높입니다.</p>
        </AccordionItem>
        <AccordionItem title="2-3. Socket.io">
          <p>Socket.io는 실시간 채팅 기능을 구현하여 사용자 간의 실시간 소통을 지원합니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 데이터베이스 관리 */}
      <AccordionItem title="3. 데이터베이스 관리 - MySQL">
        <AccordionItem title="3-1. MySQL">
          <p>MySQL은 관계형 데이터베이스로, 데이터 구조 설계 및 관리에 최적화되어 있습니다.</p>
        </AccordionItem>
        <AccordionItem title="3-2. SQL 최적화">
          <p>SQL 쿼리 최적화는 인덱스를 사용하여 대량 데이터를 효율적으로 처리하고 검색 성능을 향상시킵니다.</p>
        </AccordionItem>
        <AccordionItem title="3-3. Sequelize ORM">
          <p>Sequelize는 ORM을 통해 데이터베이스와의 상호작용을 직관적으로 처리하며 코드 유지보수성을 높입니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 서버 운영 관리 */}
      <AccordionItem title="4. 서버 운영 관리 - Linux">
        <AccordionItem title="4-1. Linux">
          <p>Linux는 서버 배포 및 유지관리에 활용되며, 파일 시스템 구조를 이해하고 서버 성능을 최적화합니다.</p>
        </AccordionItem>
        <AccordionItem title="4-2. Shell Script">
          <p>Shell Script는 자동화 작업을 위해 Bash 스크립트를 활용하여 반복 작업의 효율성을 증가시킵니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 컨테이너화 및 배포 */}
      <AccordionItem title="5. 컨테이너화 및 배포 - Docker">
        <AccordionItem title="5-1. Docker">
          <p>Docker는 서비스 환경의 일관성을 유지하며, 다양한 환경에서도 동일한 성능을 보장합니다.</p>
        </AccordionItem>
        <AccordionItem title="5-2. Docker Compose">
          <p>Docker Compose는 여러 서비스 간의 의존성을 관리하여 동시에 설정하고 관리할 수 있습니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 클라우드 배포 및 관리 */}
      <AccordionItem title="6. 클라우드 배포 및 관리 - AWS">
        <AccordionItem title="6-1. Amazon S3">
          <p>Amazon S3는 정적 웹 호스팅을 통해 웹사이트를 구성하며 파일을 안전하게 저장하고 배포합니다.</p>
        </AccordionItem>
        <AccordionItem title="6-2. Amazon API Gateway">
          <p>Amazon API Gateway는 HTTP API를 생성하여 외부 요청을 처리하고, CloudFront와 연계하여 API 요청을 처리합니다.</p>
        </AccordionItem>
        <AccordionItem title="6-3. AWS Lambda">
          <p>AWS Lambda는 서버리스 아키텍처를 통해 이벤트 기반으로 비즈니스 로직을 자동으로 처리합니다.</p>
        </AccordionItem>
        <AccordionItem title="6-4. GitHub Actions">
          <p>GitHub Actions는 소스 코드 변경 시 자동으로 빌드하고 배포하도록 CI/CD 파이프라인을 구축합니다.</p>
        </AccordionItem>
      </AccordionItem>

      {/* 대주제: 자동화된 빌드 및 배포 프로세스 */}
      <AccordionItem title="7. 자동화된 빌드 및 배포 프로세스 - CI/CD">
        <AccordionItem title="7-1. GitHub Actions">
          <p>GitHub Actions는 코드를 GitHub에 푸시할 때마다 자동으로 빌드하고 S3에 배포하는 프로세스를 설정했습니다.</p>
        </AccordionItem>
        <AccordionItem title="7-2. YAML 파일 구성">
          <p>YAML 파일을 사용하여 GitHub 워크플로우에서 자동 배포를 트리거하도록 설정합니다.</p>
        </AccordionItem>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
