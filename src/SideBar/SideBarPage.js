import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; 
import { COffcanvas, COffcanvasBody, CButton } from '@coreui/react'; 
import './SideBarPage.css'; 
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../SignUp/SignUpPage";

const SideBarPage = ({ user, setUser }) => {  // setUser를 props로 받음
  const [visible, setVisible] = useState(false); 
  const [renderPage, setRenderPage] = useState("login");

  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === '/sidebar') {
      setVisible(true);
    }
  }, [location]);

  const onChangePage = (mode) => {
    setRenderPage(mode);
  };

  const onLogin = (userData) => {
    setUser(userData);  // 로그인 후 setUser 호출하여 user 상태 업데이트
    setVisible(false);   // 로그인 후 사이드바 닫기
  };

  return (
    <>
      <CButton
        onClick={() => setVisible(true)}
        color="dark" 
        size="sm" 
        className="m-2 p-0 px-2"
        style={{ borderRadius: '8px', borderWidth: '2px' }}
      >
        로그인
      </CButton>

      <COffcanvas
        className="side-bar"
        placement="end"
        scroll={true}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasBody>
          {renderPage === "login" ? (
            <LoginPage onChangePage={onChangePage} onLogin={onLogin} />  // 로그인 후 onLogin 호출
          ) : renderPage === "signUp" ? (
            <SignUpPage onChangePage={onChangePage} />
          ) : (
            <div>잘못된 페이지</div> 
          )}
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default SideBarPage;
