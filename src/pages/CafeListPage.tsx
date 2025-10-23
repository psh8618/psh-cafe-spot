import CafeList from '@/components/CafeList';
import Container from '@/components/commons/Container';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/commons/LoadingSpinner';

export default function CafeListPage() {
  return (
    <Container>
      <Suspense fallback={<LoadingSpinner />}>
        <CafeList />
      </Suspense>
    </Container>
  );
}
