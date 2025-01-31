import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';
import { Editor } from '@tinymce/tinymce-react';
import { CButton } from '@coreui/react';
import './pages.css';
import { jwtDecode } from 'jwt-decode';
const API_BASE_URL = "https://yfnsgsnkhb.execute-api.ap-northeast-2.amazonaws.com/Prod";

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });
  const [apiKey, setApiKey] = useState(null);
  const [isAuthor, setIsAuthor] = useState(true); // 추가된 상태: 작성자 확인

  // API 키 가져오기
  const fetchApiKey = async () => {
    try {
      const response = await api.get(`${API_BASE_URL}/board/get-api-key`);
      setApiKey(response.data.apiKey);
    } catch (error) {
      console.error('API 키 가져오기 실패:', error);
    }
  };

  // 게시글 조회 함수
  const fetchPost = async () => {
    try {
      const token = sessionStorage.getItem("token");

      if (!token) {
        alert("로그인이 필요합니다.");
        navigate('/login');  // 로그인 페이지로 리디렉션
        return;
      }

      const decodedToken = jwtDecode(token); // JWT 디코딩하여 userId 확인
      const { userId } = decodedToken;

      // 게시글과 작성자 정보 가져오기
      const response = await api.get(`${API_BASE_URL}/board/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 담아 보냄
        },
      });

      setPost(response.data); // 기존 게시글 불러오기

      // 작성자 확인
      if (response.data.author !== userId) {
        setIsAuthor(false); // 작성자가 아니면 수정 불가
        alert('본인만 게시글을 수정할 수 있습니다.');
        navigate(`/board/post/${id}`); // 게시글 페이지로 리디렉션
      }

    } catch (error) {
      console.error('게시글 조회 실패:', error);
      alert('게시글 조회에 실패했습니다.');
    }
  };

  // 게시글 수정 함수
  const handleUpdate = async () => {
    try {
      const token = sessionStorage.getItem("token");

      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const decodedToken = jwtDecode(token); // JWT 디코딩하여 userId 확인
      const { userId } = decodedToken;

      const response = await api.put(`${API_BASE_URL}/board/edit/${id}`, post, {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 담아 보냄
        },
      });

      if (response.status === 200) {
        alert("게시글이 수정되었습니다.");
        navigate(`/board/post/${id}`); // 수정 후 해당 게시글 페이지로 리디렉션
      }
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchApiKey(); // API 키 가져오기
    fetchPost(); // 게시글 불러오기
  }, [id]);

  if (!post || !apiKey) return <div>로딩 중...</div>; // API 키 또는 게시글 로딩 대기
  if (!isAuthor) return null; // 작성자가 아니라면 화면을 렌더링하지 않음

  return (
    <div>
      <h1>게시글 수정</h1>
      <input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="제목"
        className="form-control mb-3"
      />
      <Editor
        apiKey={apiKey}
        value={post.content}
        onEditorChange={(newContent) => setPost({ ...post, content: newContent })}
        init={{
          height: 500,
          width: '100%',
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
          ],
          toolbar:
            'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
        }}
      />
      <CButton color="primary" className="mt-3" onClick={handleUpdate}>
        수정 완료
      </CButton>
    </div>
  );
};

export default EditPostPage;
