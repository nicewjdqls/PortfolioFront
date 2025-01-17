import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import api from '../api/api';
import { Card, Row, Col } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import { CButton } from '@coreui/react';
import './pages.css';
import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"; // jwtDecode 라이브러리 사용

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const hasFetched = useRef(false);

  // 게시글 조회 함수
  const fetchPost = async () => {
    try {
      const response = await api.get(`/board/post/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('게시글 조회 실패22:', error);
    }
  };

  // 게시글 삭제 함수
  const handleDelete = async () => {
    try {
      const token = sessionStorage.getItem("token");

      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const decodedToken = jwtDecode(token); // JWT 디코딩하여 userId 확인
      const { userId } = decodedToken;

      const response = await api.delete(`/board/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` // Authorization 헤더에 토큰을 담아 보냄
        }
      });

      if (response.status === 200) {
        alert('게시글이 삭제되었습니다!33');
        navigate('/pages'); // 삭제 후 게시판 페이지로 리디렉션
      }
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
      alert('게시글 삭제에 실패했습니다.44');
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchPost();
      hasFetched.current = true;
    }
  }, [id]);

  if (!post) return <div>게시글을 불러오는 중...</div>;

  return (
    <div>
      <Row>
        <Col>
          <Card className="card-container">
            <Card.Body>
              <Card.Title className="display-4">{post.title}</Card.Title>
              <Card.Text>
                <strong>조회수:</strong> {post.views} <br />
                <strong>작성일:</strong> {new Date(post.created_at).toLocaleDateString()}
              </Card.Text>

              <Card.Text>
                <strong>내용:</strong>
                <Editor
                  apiKey="zemc9onb4vavey6v1q7452wv9uo7y20tko77rz9ygre6ffr0"
                  value={post.content}
                  init={{
                    height: 500,
                    width: '100%',
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
                    readonly: true,
                  }}
                />
              </Card.Text>

              <CButton color="primary" className="mt-3">
                <Link to="/pages" style={{ color: 'white', textDecoration: 'none' }}>
                  게시판으로 돌아가기
                </Link>
              </CButton> 

              {/* 삭제 버튼 추가 */}
              <CButton color="danger" className="mt-3" onClick={handleDelete}>
                삭제하기
              </CButton>              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PostPage;
