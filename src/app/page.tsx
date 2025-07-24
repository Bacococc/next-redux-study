"use client";

import Link from 'next/link';
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import EditFrom from '@/components/EditFrom';

export default function Home() {
  return (
    <main>
      <h1>홈페이지</h1>
      <Link href="/new-post">게시글 보러 가기</Link>
      <Link href="/new-page">새로운 페이지</Link>
      <PostList />
      <h1>글쓰기</h1>
      <PostForm />
    </main>
  );
}