import React from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css'; 
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <header className="header">
            <div className="header-image">
                <img src="/ban.png" alt="헤더 이미지" className="header-banner" />
                <div className="header-title">
                </div>
            </div>
            <nav className="nav-bar">
                <ul>
                    <Link to="/" className="logo-container">
                        <div className="logo1"></div>
                    </Link>
                    <li><Link to="/" className="btn btn-header">홈</Link></li>
                    <li><Link to="/about" className="btn btn-header">소개</Link></li>
                    <li><Link to="/sidebar" className="btn btn-header">기술</Link></li>
                    <li><Link to="/portfolio" className="btn btn-header">작품</Link></li>
                    <li><Link to="/certificate" className="btn btn-header">자격증</Link></li>
                    <li><Link to="/test" className="btn btn-header">방명록(•‿•)</Link></li>

                    <Link to="/sidebar">
                    <Button 
                        className="p-button" 
                        variant="mb-3 p-1 px-3">
                    로그인
                    </Button>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
