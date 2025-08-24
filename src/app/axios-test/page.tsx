"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";

// Post 타입을 컴포넌트 최상단에 선언
type Post = {
  id: number;
  title: string;
};

function AxiosTest() {
  // posts는 Post[] 타입, newPost와 editText는 string, editPost는 number | null
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<string>("");
  const [editPost, setEditPost] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  // 게시글 목록 불러오기
  const fetchPosts = async (): Promise<void> => {
    try {
      const res = await axios.get("http://localhost:4001/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 게시글 추가
  const handleAddPost = () => {
    if (!newPost.trim()) return;
    axios
      .post("http://localhost:4001/posts", { title: newPost })
      .then(() => {
        setNewPost("");
        fetchPosts();
      })
      .catch((err) => console.error(err));
  };

  // 수정 시작
  const startEdit = (post: Post) => {
    setEditPost(post.id);
    setEditText(post.title);
  };

  // 게시글 수정
  const handleEditPost = (id: number) => {
    axios
      .put(`http://localhost:4001/posts/${id}`, { title: editText })
      .then(() => {
        setEditPost(null);
        setEditText("");
        fetchPosts();
      })
      .catch((err) => console.error(err));
  };

  // 게시글 삭제
  const handleDeletePost = (id: number) => {
    axios
      .delete(`http://localhost:4001/posts/${id}`)
      .then(() => {
        fetchPosts();
      })
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <h1>글 작성 목록</h1>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="새 글을 입력..."
      />
      <button onClick={handleAddPost}>추가</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {editPost === post.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditPost(post.id)}>저장</button>
                <button onClick={() => setEditPost(null)}>취소</button>
              </>
            ) : (
              <>
                {post.title}
                <button onClick={() => startEdit(post)}>수정</button>
                <button onClick={() => handleDeletePost(post.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AxiosTest;