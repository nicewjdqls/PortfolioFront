import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import api from '../api/api';
import { Card, Row, Col, Dropdown } from 'react-bootstrap';  // Dropdown 추가
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
  const [apiKey, setApiKey] = useState(null); // API 키 상태 추가
  const [showOptions, setShowOptions] = useState(false); // 옵션 버튼 토글 상태

  // API 키 가져오기
  const fetchApiKey = async () => {
    try {
      const response = await api.get('/board/get-api-key'); // 백엔드에서 API 키 요청
      setApiKey(response.data.apiKey);
    } catch (error) {
      console.error('API 키 가져오기 실패:', error);
    }
  };

  // 게시글 조회 함수
  const fetchPost = async () => {
    try {
      const response = await api.get(`/board/post/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('게시글 조회 실패:', error);
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
        alert(`게시물이 삭제되었습니다.`);
        navigate('/pages'); // 삭제 후 게시판 페이지로 리디렉션
      }
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
      alert('본인의 게시글만 삭제가 가능합니다.');
    }
  };

  // 수정 페이지로 이동
  const handleEdit = () => {
    navigate(`/board/edit/${id}`);  // 수정 페이지로 이동
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchApiKey(); // API 키 가져오기
      fetchPost();
      hasFetched.current = true;
    }
  }, [id]);

  if (!post || !apiKey) return <div>로딩 중...</div>; // API 키 또는 게시글 로딩 대기

  return (
    <div>
      <Row>
        <Col>
          <Card className="card-container">
            <Card.Body>
              <Card.Title className="display-4">
                {post.title}

                {/* 오른쪽 버튼 메뉴 */}
                <Dropdown align="end" className="float-end">
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    옵션
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleEdit}>수정</Dropdown.Item>  {/* 수정 버튼 */}
                    <Dropdown.Item onClick={handleDelete}>삭제</Dropdown.Item> {/* 삭제 버튼 */}
                    <Dropdown.Item as={Link} to="/pages">뒤로가기</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              </Card.Title>

              <Card.Text>
                <strong>조회수:</strong> {post.views} <br />
                <strong>작성일:</strong> {new Date(post.created_at).toLocaleDateString()}
              </Card.Text>

              <Card.Text>
                <strong>내용:</strong>
                <Editor
                  apiKey={apiKey} // 가져온 API 키를 사용
                  value={post.content}
                  init={{
                    height: 500,
                    width: '100%',
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor', // 기본적인 플러그인만 사용
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PostPage;
