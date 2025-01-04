import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // react-router-dom을 사용하여 URL 경로에 따라 사이드바 열기
import { COffcanvas, COffcanvasBody } from '@coreui/bootstrap-react';
import './SideBarPage.css'; 
import LoginPage from "../Login/LoginPage";


const SideBarPage = () => {
  const [visible, setVisible] = useState(false); // 사이드바 열기/닫기 상태 관리
  const location = useLocation(); // 현재 경로 가져오기

  // 페이지 경로가 "/sidebar"일 때 사이드바가 열리도록 useEffect 사용
  useEffect(() => {
    if (location.pathname === '/sidebar') {
      setVisible(true); // 경로가 /sidebar이면 사이드바 열기
    }
  }, [location]);

  return (
    <>

      <COffcanvas 
        className="side-bar" 
        placement="end" 
        scroll={true} 
        visible={visible} 
        onHide={() => setVisible(false)} // 사이드바 닫기
      >
        <COffcanvasBody>
          <div>
          <img src="/welcome.png" alt="헤더 이미지" className="size" />
          </div>
          <LoginPage /> {/* 로그인 폼만 보여주기 */}
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default SideBarPage;
