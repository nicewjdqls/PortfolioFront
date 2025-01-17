import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { Link } from 'react-router-dom';

const CreatePost = ({ user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState(null); // API 키 상태 추가

  // API 키 가져오기
  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await api.get('/board/get-api-key'); // 백엔드에서 API 키 요청
        setApiKey(response.data.apiKey); // API 키 상태 저장
      } catch (error) {
        console.error('API 키 가져오기 실패:', error);
      }
    };

    fetchApiKey(); // 컴포넌트 마운트 시 API 키 요청
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };

      const postData = {
        title,
        content,
        author: user.userId,
        userName: user.userName,
      };

      const response = await api.post('/board/create', postData, { headers });
      alert('게시글이 작성되었습니다!');
      navigate('/pages');
    } catch (error) {
      console.error('게시글 작성 실패:', error);
      alert('게시글 작성에 실패했습니다.');
    }
  };

  if (!apiKey) {
    return <div>로딩 중...</div>; // API 키 로딩 대기
  }

  return (
    <div className="container mt-4">
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit} className="editor-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <Editor
            apiKey={apiKey} // 가져온 API 키를 사용
      init={{
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Jan 30, 2025:
          'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      initialValue="Welcome to TinyMCE!"
            onEditorChange={(content) => setContent(content)}
          />
        </div>
        <div>
        <button type="submit" className="btn btn-primary mt-3">
          게시글 작성
        </button>
        <Link to ='/pages'>
          <button type="button"  className="btn btn-primary mt-3">
          뒤로가기
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
