import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import './pages.css';
import { Pagination, Stack } from "@mui/material";
import { Container } from 'react-bootstrap';

const BoardPage = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchPosts = async (page = 1) => {
        try {
            const response = await api.get(`/board?page=${page}&limit=5`);
            const { posts, totalPages } = response.data;

            setPosts(posts);
            setTotalPages(totalPages);
            setCurrentPage(page);
        } catch (error) {
            console.error('게시글 불러오기 실패:', error);
        }
    };

    useEffect(() => {
        fetchPosts(currentPage);
    }, [currentPage]);

    return (
        <div className="container mt-4">
            <h2>게시판 목록</h2>
            <div className="button-container">
                <Link to="/create" className="btn btn-primary mb-3">게시글 작성</Link>
            </div>
            <Container>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>글 제목</th>
                            <th>조회수</th>
                            <th>작성일</th>
                            <th>작성자</th>
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
                                <td colSpan="4" className="text-center">
                                    게시글이 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Stack alignItems="center" sx={{ marginTop: 3 }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={(e, page) => fetchPosts(page)}
                        color="primary"
                        size="large"
                    />
                </Stack>
            </Container>
        </div>
    );
};

export default BoardPage;
