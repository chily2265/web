import '@/styles/global.css';
import { LoadingOverlay, Container } from '@mantine/core';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Container
      mt={70}
      px={50}
      py={30}
      fluid
      mih='100vh'
      pos='relative'
      style={{
        backgroundColor: '#f1f3f5',
        zIndex: 1,
      }}
    >
      <LoadingOverlay
        visible={true}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
      />
    </Container>
  );
}
