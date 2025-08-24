"use client";

import { QueryClient, useQuery } from '@tanstack/react-query';
import React from "react";

const queryClient = new QueryClient();

function TestTanstack() {
  const { data, isLoading, error} = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      return res.json();
    },
    staleTime: 1000 * 10 //10초 동안 캐시를 신선하게 유지
  });

  if(isLoading) return <p>로딩 중...</p>;
  if(error) return <p>에러 발생</p>

  return(
      <main>
        <ul>
          {data.map((todo: any) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </main>
  )
}

export default TestTanstack;
