import React from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css'; // CSS 파일 추가

const Header = () => {
    return (
        <header className="header">
            <div className="header-image">
                <img src="/ban.png" alt="헤더 이미지" className="header-banner" />
                <div className="header-title">
                    {/* 헤더 타이틀 추가 가능 */}
                </div>
            </div>
            <nav className="nav-bar">
                <ul>
                    <Link to="/" className="logo-container">
                        <div className="logo1"></div>
                    </Link>
                    <li><Link to="/" className="btn btn-header">홈</Link></li>
                    <li><Link to="/about" className="btn btn-header">소개</Link></li>
                    <li><Link to="/skills" className="btn btn-header">기술</Link></li>
                    <li><Link to="/portfolio" className="btn btn-header">작품</Link></li>
                    <li><Link to="/certificate" className="btn btn-header">자격증</Link></li>
                    <li><Link to="/contact" className="btn btn-header">연락처</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
