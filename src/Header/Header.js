import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import { CButton } from '@coreui/react'; // CoreUI의 CButton 사용

const Header = () => {
    return (
        <header className="header">
            <div className="header-image">
                <img src="/ban.png" alt="헤더 이미지" className="header-banner" />
                <div className="header-title">
                    {/* 헤더 타이틀이 필요하다면 여기에 내용 추가 */}
                </div>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="/" className="logo-container">
                            <div className="logo1"></div>
                        </Link>
                    </li>
                    <li><Link to="/" className="btn btn-header">홈</Link></li>
                    <li><Link to="/about" className="btn btn-header">소개</Link></li>
                    <li><Link to="/skills" className="btn btn-header">기술</Link></li>
                    <li><Link to="/portfolio" className="btn btn-header">작품</Link></li>
                    <li><Link to="/certificate" className="btn btn-header">자격증</Link></li>
                    <li><Link to="/test" className="btn btn-header">방명록(•‿•)</Link></li>

                    <li>
                        <Link to="/sidebar">
                            {/* CoreUI의 CButton 사용 */}
                            <CButton 
                                color="primary" // 버튼 색상 설정
                                size="lg"       // 버튼 크기 설정
                                className="mb-3 p-1 px-3">
                                로그인
                            </CButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
