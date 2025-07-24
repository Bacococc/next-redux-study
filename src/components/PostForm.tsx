import { useState } from 'react';
import { createPost } from '../api/post';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userId = 1;

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({title, content, userId});
    alert('글 쓰기 완료!');
    setTitle('');
    setContent('');
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='제목을 입력'></input>
        <input value={content} onChange={(e) => setContent(e.target.value)} placeholder='내용을 입력'></input>
        <button type='submit'>Posting!</button>
      </form>
    </div>
  );
}