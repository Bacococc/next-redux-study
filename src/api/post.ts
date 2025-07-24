import axios from 'axios';

//api 인스턴스 생성
const API = axios.create({
  baseURL: 'http://localhost:4001',
});

export const getPosts = () => API.get('/posts');

export const createPost = (data : { title: string; content: string; userId: number }) => 
  API.post('/posts', data);

export const getPostById = (id: number) => API.get(`/posts/${id}`);

export const editPost = (id: number, data : { title: string; content: string; userId: number }) =>
  API.put(`/posts/${id}`);