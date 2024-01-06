import '@/styles/global.css';
import { Container } from '@mantine/core';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='page-container'>
      <Container fluid py={70} px={80}>
        <div className=' bg-red-600 mt-4'>{children}</div>
      </Container>
    </div>
  );
}
