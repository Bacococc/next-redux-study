import { useEffect, useState } from 'react';
import { getPosts } from '../api/post';
import { Postpone } from 'next/dist/server/app-render/dynamic-rendering';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data))
  });

  return (
    <main>
      <h1>글 목록</h1>
      {posts.map((post : any) => 
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
      )}
    </main>
  )
}