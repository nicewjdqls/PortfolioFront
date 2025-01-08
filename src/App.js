import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';  
import Header from "./Header/Header";
import MainPage from "./Main/MainPage";
import CertificatePage from "./Certificate/CertificatePage";
import Footer from "./Footer/FooterPage";
import Portfolio from "./Portfolio/PortfolioPage";
import SideBarPage from "./SideBar/SideBarPage";  // 사이드바 컴포넌트 가져오기
import About from "./About/AboutPage";
import Skills from "./Skills/SkillsPage";
import Profile from "./ProfileBar/ProfileBarPage";
import Pdf1 from "./Pdf/PdfPage1";
import Pdf2 from "./Pdf/PdfPage2";
import Pdf3 from "./Pdf/PdfPage3";
import LoginPage from "./Login/LoginPage";  
import api from "./api/api";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const storedToken = sessionStorage.getItem("token");
      console.log("토큰:", storedToken); 
      if (storedToken) {
        const response = await api.get("/user/me");
        setUser(response.data.user);
      } else {
        console.log("토큰이 없습니다.");
      }
    } catch (error) {
      setUser(null);
      console.error("API 요청 실패:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <SideBarPage user={user} setUser={setUser} /> {/* setUser를 사이드바에 전달 */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage user={user} />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sidebar" element={<SideBarPage user={user} setUser={setUser} />} /> {/* setUser를 사이드바에 전달 */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} /> {/* setUser를 LoginPage에 전달 */}
            <Route path="/pdf1" element={<Pdf1 />} />
            <Route path="/pdf2" element={<Pdf2 />} />
            <Route path="/pdf3" element={<Pdf3 />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
