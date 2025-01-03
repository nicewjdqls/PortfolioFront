import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/Header";
import MainPage from "./Main/MainPage";
import CertificatePage from "./Certificate/CertificatePage";
import Footer from "./Footer/FooterPage";
import Portfolio from "./Portfolio/PortfolioPage"; // 컴포넌트 이름을 Portfolio로 수정
import Pdf from "./Pdf/PdfPage"; // 컴포넌트 이름을 Portfolio로 수정

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* 헤더 부분 */}
        <Header />

        {/* 본문 내용 */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/portfolio" element={<Portfolio />} /> {/* 경로를 소문자 'portfolio'로 수정 */}
            <Route path="/pdf" element={<Pdf />} /> 

          </Routes>
        </main>

        {/* 푸터 부분 */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
