import { ReactNode } from 'react';

export const metadata = {
  title: 'My App',
  description: 'Next.js 연습 중',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}