import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // jwt-decode에서 jwtDecode를 명시적으로 import
import { CButton, CPopover, CAvatar } from "@coreui/react";
import './ProfileBarPage.css'; // CSS 파일을 import

const ProfileBarPage = ({ user, setUser, onLogout }) => { 
  const [userName, setUserName] = useState(""); // 사용자 이름을 저장할 state
  const [getId, setGetId] = useState(""); // 역할을 저장할 state

  useEffect(() => {
    const token = sessionStorage.getItem("token"); // sessionStorage에서 토큰 가져오기
    
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // 토큰 디코딩
        console.log("디코딩된 토큰:", decodedToken); // 디코딩된 토큰 확인
        setUserName(decodedToken.userName || ""); // 사용자 이름 설정
        setGetId(decodedToken.role || ""); // 역할 설정
      } catch (error) {
        console.error("토큰 디코딩 오류:", error); // 오류 처리
      }
    } else {
      console.log("토큰이 존재하지 않습니다."); // 토큰이 없을 때 로그
    }
  }, []);

  return (
    <main className="profile-page">
      <CPopover
        className="profile-bar"
        placement="bottom"
        trigger="focus"
        content={
          <div>
            <CButton
              className="p-button mb-3"
              onClick={() => window.location.href = '/mypage'}
            >
              {getId === 'admin' ? '관리자 페이지' : '마이페이지'} {/* 역할에 따라 버튼 텍스트 변경 */}
            </CButton>                        
            <CButton  
              className="s-button"
              onClick={() => {
                alert(`${userName}님 로그아웃 되었습니다`); // 사용자 이름을 포함한 로그아웃 알림
                onLogout(); // 로그아웃 함수 호출
              }}
            >
              로그아웃
            </CButton>
          </div>
        }
      >
        <CButton shape="rounded-pill">
          <CAvatar className="profile-badge" color="success" textColor="white">
            {userName ? userName[0] : "U"} {/* 사용자 이름이 없으면 "U" 표시 */}
          </CAvatar>
        </CButton>
      </CPopover>
    </main>
  );
};

export default ProfileBarPage;
