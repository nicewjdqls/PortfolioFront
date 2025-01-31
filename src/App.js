import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';  
import Header from "./Header/Header";
import MainPage from "./Main/MainPage";
import CertificatePage from "./Certificate/CertificatePage";
import Footer from "./Footer/FooterPage";
import Portfolio from "./Portfolio/PortfolioPage";
import SideBarPage from "./SideBar/SideBarPage";  
import About from "./About/AboutPage";
import Skills from "./Skills/SkillsPage";
import Profile from "./ProfileBar/ProfileBarPage"; 
import Test from "./pages/BoardPage";
import Pdf1 from "./Pdf/PdfPage1";
import Pdf2 from "./Pdf/PdfPage2";
import Pdf3 from "./Pdf/PdfPage3";
import LoginPage from "./Login/LoginPage";  
import api from "./api/api";
import BoardPage from "./pages/BoardPage";  // 게시판 페이지
import CreatePost from "./pages/CreatePost";  // 글 작성 페이지
import EditPost from "./pages/EditPost";  // 글 수정 페이지
import PostPage from './pages/PostPage';    // 게시글 상세 페이지
const API_BASE_URL = "https://yfnsgsnkhb.execute-api.ap-northeast-2.amazonaws.com/Prod";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const storedToken = sessionStorage.getItem("token");
      console.log("토큰:", storedToken); 
      if (storedToken) {
        const response = await api.get(`${API_BASE_URL}/user/me`);
        setUser(response.data.user);
        toast.success("사용자 정보를 성공적으로 불러왔습니다.");
      } else {
        console.log("토큰이 없습니다.");
        toast.warn("토큰이 없습니다. 로그인이 필요합니다.");
      }
    } catch (error) {
      setUser(null);
      console.error("API 요청 실패:", error);
      toast.error("사용자 정보를 가져오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <SideBarPage user={user} setUser={setUser} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage user={user} />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sidebar" element={<SideBarPage user={user} setUser={setUser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
           {/* 게시판 관련 페이지 */}
            <Route path="/pages" element={<BoardPage user={user} />} />
            <Route path="/create" element={<CreatePost user={user} />} />
            <Route path="/edit/:id" element={<EditPost user={user} />} />
            <Route path="/board/post/:id" element={<PostPage />} /> {/* 여기에서 id로 게시글을 조회 */}
            <Route path="/board/edit/:id" element={<EditPost />} />

            <Route path="/pdf1" element={<Pdf1 />} />
            <Route path="/pdf2" element={<Pdf2 />} />
            <Route path="/pdf3" element={<Pdf3 />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
