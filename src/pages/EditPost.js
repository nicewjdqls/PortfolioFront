import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams 추가
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();  // useParams로 게시글 ID 가져오기
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();  // 리다이렉션을 위한 navigate

  // 게시글 수정 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/board/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error('게시글 조회 실패:', error);
        alert('게시글 조회에 실패했습니다.');
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // PUT 요청으로 수정된 데이터를 보내기
      const response = await axios.put(`http://localhost:5000/api/board/edit/${id}`, { title, content });
      alert('게시글 수정 성공!');
      navigate('/pages');  // 수정 후 게시글 목록 페이지로 리다이렉션
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  return (
    <div>
      <h2>게시글 수정</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default EditPost;
