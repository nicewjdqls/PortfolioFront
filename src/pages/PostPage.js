import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { Card, Row, Col } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import { CButton } from '@coreui/react';
import './pages.css';
import { Link } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const response = await api.get(`/board/post/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('게시글 조회 실패:', error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) return <div>게시글을 불러오는 중...</div>;

  return (
    <div>
      <Row>
        <Col>
        <Card className="card-container">
        <Card.Img variant="top" src={post.imageUrl} alt="게시글 이미지" className="post-detail-image" />
            <Card.Body>
              <Card.Title className="display-4">{post.title}</Card.Title>
              <Card.Text>
                <strong>조회수:</strong> {post.views} <br />
                <strong>작성일:</strong> {new Date(post.createdAt).toLocaleDateString()}
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PostPage;
