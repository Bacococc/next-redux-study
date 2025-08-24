"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
};

const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get("http://localhost:4001/posts");
  return res.data;
};

function RQueryTest() {
  const {data: posts, isLoading, isError} = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <main className="max-w-lg mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">글 작성 목록</h1>

      {/* 글 목록 */}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default RQueryTest;