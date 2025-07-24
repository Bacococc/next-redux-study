"use client";

import { editPost } from "@/api/post";
import { getPostById } from "@/api/post";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditFrom(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userId = 1;
  const params = useParams();
  const id = Number(params?.id)

  useEffect(() => {
    getPostById(Number(id)).then((res) => {
      setTitle(res.data.title ?? '');
      setContent(res.data.content ?? '');
    });
  }, [id]);
  
  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    await editPost(id, { title, content, userId });
    setTitle('');
    setContent('');
  };
  

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input value={content} onChange={(e) => setContent(e.target.value)}></input>
        <button type="submit">제출요</button>
      </form>
    </div>
  )
};