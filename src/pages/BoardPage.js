import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import './pages.css'
const BoardPage = () => {
  const [posts, setPosts] = useState([]);

  // 게시글 목록 가져오기
  const fetchPosts = async () => {
    try {
      const response = await api.get('/board/'); // '/board/' API에서 게시글 가져오기
      if (Array.isArray(response.data)) {
        setPosts(response.data); // 게시글 배열로 상태 업데이트
      } else {
        console.error('API 응답이 배열이 아닙니다:', response.data);
      }
    } catch (error) {
      console.error('게시글 불러오기 실패:', error);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>게시판 목록</h2>
      <div className="button-container">
      <Link to="/create" className="btn btn-primary mb-3">게시글 작성</Link>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>글 제목</th>
            <th>조회수</th>
            <th>작성일 </th>
            <th>작성자 </th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((post) => (
              <tr key={post.id}>
                <td>
                <Link to={`/board/post/${post.id}`} className="text-primary">
                {post.title}
                  </Link>
                </td>
                <td>{post.views}</td>
                <td>{new Date(post.created_at).toLocaleDateString()}</td>
                <td>{post.userName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                게시글이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BoardPage;
