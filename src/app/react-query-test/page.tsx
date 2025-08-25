"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

// Post 타입 선언
type Post = {
  id: number;
  title: string;
};

// API 요청 함수들
const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get("http://localhost:4001/posts");
  return res.data;
};

// POST (새 글 추가)
const addPost = async (title: string): Promise<Post> => {
  const res = await axios.post("http://localhost:4001/posts", { title });
  return res.data;
};

// PUT (글 수정)
const updatePost = async ({
  id,
  title,
}: {
  id: number;
  title: string;
}): Promise<Post> => {
  const res = await axios.put(`http://localhost:4001/posts/${id}`, { title });
  return res.data;
};

// DELETE (글 삭제)
const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:4001/posts/${id}`);
};

function AxiosTest() {
  const queryClient = useQueryClient();

  const [newPost, setNewPost] = useState("");
  const [editPost, setEditPost] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // GET (게시글 목록)
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // POST
  const addPostMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // PUT
  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // DELETE
  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading) return <p className="p-4 text-gray-500">로딩 중...</p>;
  if (isError) return <p className="p-4 text-red-500">에러 발생!</p>;

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">글 작성 목록</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="새 글을 입력..."
          className="flex-1 border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={() => addPostMutation.mutate(newPost)}
          disabled={addPostMutation.isPending}
          className={`px-4 py-2 rounded shadow text-white
            ${addPostMutation.isPending
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"}`}
        >
          {addPostMutation.isPending ? "추가 중..." : "추가"}
        </button>
      </div>
      {/* 플래그(isPending) 사용해서 ux 개선해보기 */}

      <ul className="space-y-3">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between border p-3 rounded shadow-sm bg-white"
          >
            {editPost === post.id ? (
              <div className="flex gap-2 flex-1">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 border rounded px-2 py-1 shadow-sm focus:outline-none focus:ring focus:ring-green-200"
                />
                <button
                  onClick={() =>
                    updatePostMutation.mutate({ id: post.id, title: editText })
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 shadow"
                >
                  저장
                </button>
                <button
                  onClick={() => setEditPost(null)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 shadow"
                >
                  취소
                </button>
              </div>
            ) : (
              <div className="flex justify-between w-full items-center">
                <span className="text-gray-800">{post.title}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditPost(post.id);
                      setEditText(post.title);
                    }}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 shadow"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => deletePostMutation.mutate(post.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 shadow"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AxiosTest;